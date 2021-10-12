from flask import Flask, jsonify, request
import requests
from flask_restful import Api, Resource
import psycopg2
import simplejson as json
import os
from dotenv import load_dotenv
from db import DB, ConnectionPool

DB.init()

load_dotenv()


app = Flask(__name__, static_folder='./build', static_url_path="/")
api = Api(app)


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index')


# DATABASE_URL = os.environ.get('DATABASE_URL')
SECRET_TOKEN = os.environ.get('SECRET_TOKEN')
URL = os.environ.get('URL')


class SearchStock(Resource):
    def get(self, stock):
        searchStock = requests.get(
            'https://cloud.iexapis.com/stable/stock/{}/quote?token={}&period=annual'
            .format(stock, SECRET_TOKEN)).json()
        return jsonify(searchStock)


api.add_resource(SearchStock, '/api/searchStock/<string:stock>')


class Stocks(Resource):
    def get(self):
        stocks = ['TSLA', 'AMZN', 'MSFT', 'AAPL']
        result = []
        for stock in stocks:
            response = requests.get(
                f'{URL}/{stock}/quote?token={SECRET_TOKEN}&period=annual')
            data = response.json()
            result.append(data)
        return jsonify(result)


api.add_resource(Stocks, '/api/stocks')


class PurchasedStock(Resource):
    def get(self, userId):
        with ConnectionPool() as cursor:
            cursor.execute('SELECT * FROM purchased_stock WHERE user_id = %s',
                           (userId, ))
            purchased_stock = cursor.fetchall()
            return json.dumps(purchased_stock)


api.add_resource(PurchasedStock, '/api/purchased/<userId>')


class SumOfPurchasedStock(Resource):
    def get(self, userId):
        with ConnectionPool() as cursor:
            cursor.execute('SELECT SUM(price) FROM purchased_stock WHERE user_id = %s',
                           (userId, ))
            sum = cursor.fetchall()
            return jsonify(sum)


api.add_resource(SumOfPurchasedStock, '/api/sum/<userId>')


class UserCredentials(Resource):
    def post(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            username = json_data['username']
            password = json_data['password']
            cursor.execute(
                'INSERT INTO user_credentials (username, password) VALUES(%s, %s) RETURNING *',
                (username, password))
            new_user = cursor.fetchone()
            credentials = {
                'id': new_user[0],
                'username': new_user[1],
                'password': new_user[2],
                'buyingPower': new_user[3]
            }
            return json.dumps(username, credentials)


api.add_resource(UserCredentials, '/api/createaccount')


class AddStocksToTable(Resource):
    def post(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            symbol = json_data['symbol']
            stockName = json_data['stockName']
            price = json_data['price']
            day_change = json_data['day_change']
            percentage_change = json_data['percentage_change']
            date = json_data['date']
            shares = json_data['shares']
            userId = json_data['userId']
            initial_price = json_data['initialPrice']
            cursor.execute('SELECT * FROM purchased_stock WHERE symbol = %s AND user_id = %s',
                           (symbol, userId))
            symbolExists = cursor.fetchone()
            if symbolExists is None:
                cursor.execute(
                    "INSERT INTO purchased_stock (symbol, stock_name, price, day_change, percentage_change, date, shares, user_id, initial_price) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s)",
                    (symbol, stockName, price, day_change, percentage_change, date, shares, userId, initial_price))
                return jsonify(symbol, stockName, price, day_change, percentage_change, date, shares, userId, initial_price)
            else:
                cursor.execute(" UPDATE purchased_stock SET shares = shares + %s, price = %s, initial_price = ((%s + initial_price)/2) WHERE user_id = %s AND symbol = %s ",
                               (shares, price, price, userId, symbol))
                return json.dumps(shares, price, price, userId, symbol)


api.add_resource(AddStocksToTable, '/api/buystock')


class DeleteRow(Resource):
    def delete(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            stock_id = json_data['stock_id']
            cursor.execute('DELETE FROM purchased_stock WHERE stock_id = %s',
                           (stock_id, ))


api.add_resource(DeleteRow, '/api/deleterow')

# Report Page


class AllSymbols(Resource):
    def get(self, userId):
        with ConnectionPool() as cursor:
            cursor.execute('SELECT symbol FROM (SELECT symbol, SUM(shares) FROM purchased_stock WHERE user_id = %s GROUP BY symbol, price) AS symbol_name',
                           (userId, ))
            symbols = cursor.fetchall()
            return jsonify(symbols)


api.add_resource(AllSymbols, '/api/allsymbols/<userId>')


class StockReport(Resource):
    def get(self, userId):
        with ConnectionPool() as cursor:
            cursor.execute(
                'SELECT symbol, SUM(shares), price FROM purchased_stock WHERE user_id = %s GROUP BY symbol, price, user_id;',
                (userId, ))
            symbols = cursor.fetchall()
            return json.dumps(symbols)


api.add_resource(StockReport, '/api/stockreport/<userId>')


class NumberOfShares(Resource):
    def get(self, userId):
        with ConnectionPool() as cursor:
            cursor.execute("SELECT SUM(shares), symbol FROM purchased_stock WHERE user_id = %s GROUP BY symbol, price",
                           (userId, ))
            shares = cursor.fetchall()
            return jsonify(shares)


api.add_resource(NumberOfShares, '/api/shares/<userId>')


class TotalInvested(Resource):
    def get(self, userId):
        with ConnectionPool() as cursor:
            cursor.execute("SELECT SUM(shares), price FROM purchased_stock WHERE user_id = %s  GROUP BY price",
                           (userId, ))
            invested = cursor.fetchall()
            return jsonify(invested)


api.add_resource(TotalInvested, '/api/invested/<userId>')


class SumOfAllStocksPurchased(Resource):
    def get(self, userId):
        with ConnectionPool() as cursor:
            cursor.execute("SELECT SUM(x.total_invested) FROM (SELECT symbol, price * shares AS total_invested FROM purchased_stock WHERE user_id = %s) AS x",
                           (userId, ))
            sum = cursor.fetchall()
            return jsonify(sum)


api.add_resource(SumOfAllStocksPurchased,
                 '/api/sumofallstockspurchased/<userId>')


class AccountValue(Resource):
    def post(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            user_id = json_data['userId']
            cursor.execute(
                "SELECT ((SELECT SUM(x.total_invested) FROM (SELECT symbol, price * shares AS total_invested FROM purchased_stock WHERE user_id = %s) AS x) + (SELECT user_balance FROM user_Credentials WHERE user_id = %s)) AS account_value",
                (user_id, user_id))
            accountValue = cursor.fetchall()
            return json.dumps(accountValue)


api.add_resource(AccountValue, '/api/accountvalue')


class TotalPortfolio(Resource):
    def get(self, userId):
        with ConnectionPool() as cursor:
            cursor.execute(
                "SELECT SUM(price * shares) FROM purchased_stock WHERE user_id = %s", (userId, ))
            totalPortfolio = cursor.fetchall()
            return json.dumps(totalPortfolio)


api.add_resource(TotalPortfolio, '/api/totalPortfolio/<userId>')


class DeleteAllStocks(Resource):
    def delete(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            stock_symbol = json_data['stock_symbol']
            userId = json_data['userId']
        cursor.execute(
            'DELETE FROM purchased_stock WHERE symbol = %s AND user_id = %s',
            (stock_symbol, userId))
        return jsonify(stock_symbol, userId)


api.add_resource(DeleteAllStocks, '/api/deleteall')


class UpdateStocks(Resource):
    def put(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            shares = json_data['shares']
            stock_id = json_data['stock_id']
        cursor.execute(
            'UPDATE purchased_stock SET shares = %s WHERE stock_id = %s',
            (shares, stock_id))


api.add_resource(UpdateStocks, '/api/updatestocks')


class UpdateLatestStockPrices(Resource):
    def put(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            symbol = json_data['symbol']
            stock_price = json_data['stockPrice']
            day_change = json_data['dayChange']
            percentage_change = json_data['percentageChange']
            user_id = json_data['userId']
            cursor.execute(
                'UPDATE purchased_stock SET price = %s, day_change = %s, percentage_change = %s WHERE user_id = %s AND symbol = %s',
                (stock_price, day_change, percentage_change, user_id, symbol))


api.add_resource(UpdateLatestStockPrices, '/api/lateststocks')


class ValidateCredentials(Resource):
    def post(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            usernameCredential = json_data['usernameCredential']
            password = json_data['password']
            cursor.execute(
                "SELECT user_id FROM user_credentials WHERE username = %s AND password = %s",
                (usernameCredential, password,
                 ))
            account = cursor.fetchone()
            if account is None:
                return jsonify('Something went wrong'), 500
            else:
                return jsonify(account, True)


api.add_resource(ValidateCredentials, '/api/username')


class FindUsername(Resource):
    def post(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            user_id = json_data['userId']
            cursor.execute('SELECT username FROM user_credentials WHERE user_id = %s',
                           (user_id, ))
            username = cursor.fetchone()
            return jsonify(username)


api.add_resource(FindUsername, '/api/foundusername')


class UserBalance(Resource):
    def post(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            userId = json_data['userId']
            cursor.execute(
                'SELECT user_balance FROM user_credentials WHERE user_id = %s',
                (userId, ))
            balance = cursor.fetchone()
            return json.dumps(balance)


api.add_resource(UserBalance, '/api/userbalance')


class UpdateBalance(Resource):
    def put(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            userId = json_data['userId']
            bought_stock = json_data['boughtStock']
            cursor.execute(
                'UPDATE user_credentials SET user_balance = %s WHERE user_id = %s',
                (bought_stock, userId))


api.add_resource(UpdateBalance, '/api/boughtstock')


class UserAndPassword(Resource):
    def post(self):
        with ConnectionPool() as cursor:
            json_data = request.get_json()
            userId = json_data['userId']
            cursor.execute(
                'SELECT * FROM user_credentials WHERE user_id = %s',
                (userId, ))
            credentials = cursor.fetchone()
        return json.dumps(credentials)

api.add_resource(UserAndPassword, '/api/credentials')


# app.run(debug=True)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='127.0.0.1', debug=True, port=port)

# app.run(debug=True, port = 5000)
