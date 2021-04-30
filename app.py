from flask import Flask, jsonify, request
import requests
from flask_restful import Api, Resource, reqparse
import psycopg2
import simplejson as json
import decimal

app = Flask(__name__)
api = Api(app)


class SearchStock(Resource):
    def get(self, stock):
        # headers = {

        #     'token': 'pk_75972e634de441d4a997ed43057a5221',
        #     'Accept': 'application.json',
        #     'Content-Type': 'application/json'
        # }
        searchStock = requests.get(
            'https://cloud.iexapis.com/stable/stock/{}/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual'
            .format(stock)).json()
        return jsonify(searchStock)


api.add_resource(SearchStock, '/api/searchStock/<string:stock>')


class Tesla(Resource):
    def get(self):
        popular = requests.get(
            'https://cloud.iexapis.com/stable/stock/TSLA/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual'
        ).json()
        return jsonify(popular)


api.add_resource(Tesla, '/api/tesla')


class Apple(Resource):
    def get(self):
        popular = requests.get(
            'https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual'
        ).json()
        return jsonify(popular)


api.add_resource(Apple, '/api/apple')


class Amazon(Resource):
    def get(self):
        popular = requests.get(
            'https://cloud.iexapis.com/stable/stock/AMZN/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual'
        ).json()
        return jsonify(popular)


api.add_resource(Amazon, '/api/amazon')


class Microsoft(Resource):
    def get(self):
        popular = requests.get(
            'https://cloud.iexapis.com/stable/stock/MSFT/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual'
        ).json()
        return jsonify(popular)


api.add_resource(Microsoft, '/api/microsoft')

# # Connecting with Database
# conn = psycopg2.connect(dbname='stock_application', user='postgres', password='databasePassword', host='localhost')
# cur = conn.cursor()
# cur.execute('SELECT * FROM purchased_stock;')
# purchasedStock = cur.fetchall()
# conn.commit()
# cur.close()
# conn.close()


class PurchasedStock(Resource):
    def get(self, userId):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        cur.execute('SELECT * FROM purchased_stock WHERE user_id = %s', (userId, ))
        purchasedStock = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(purchasedStock)


api.add_resource(PurchasedStock, '/api/purchased/<userId>')


class SumOfPurchasedStock(Resource):
    def get(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        cur.execute('SELECT SUM(price) FROM purchased_stock')
        sum = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(sum)


api.add_resource(SumOfPurchasedStock, '/api/sum')


class UserCredentials(Resource):
    def post(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        json_data = request.get_json()
        username = json_data['username']
        password = json_data['password']
        cur.execute(
            'INSERT INTO user_credentials (username, password) VALUES(%s, %s)',
            (username, password))
        conn.commit()
        print('User Inserted...')
        cur.close()
        conn.close()
        return jsonify(username, password)


api.add_resource(UserCredentials, '/api/createaccount')


class AddStocksToTable(Resource):
    def post(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        json_data = request.get_json()
        symbol = json_data['symbol']
        stockName = json_data['stockName']
        price = json_data['price']
        day_change = json_data['day_change']
        percentage_change = json_data['percentage_change']
        date = json_data['date']
        shares = json_data['shares']
        userId = json_data['userId']
        cur.execute(
            "INSERT INTO purchased_stock (symbol, stock_name, price, day_change, percentage_change, date, shares, user_id) VALUES(%s, %s, %s, %s, %s, %s, %s, %s)",
            (symbol, stockName, price, day_change, percentage_change, date,
             shares, userId))
        conn.commit()
        print('Records Inserted....')
        cur.close()
        conn.close()
        return jsonify(symbol, stockName, price, day_change, percentage_change,
                       date, shares, userId)


api.add_resource(AddStocksToTable, '/api/buystock')


class DeleteRow(Resource):
    def delete(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        json_data = request.get_json()
        stock_id = json_data['stock_id']
        cur.execute('DELETE FROM purchased_stock WHERE stock_id = %s',
                    (stock_id, ))
        rows_deleted = cur.rowcount
        print(rows_deleted)
        conn.commit()
        cur.close()
        print('Deleted')
        return jsonify(stock_id)


api.add_resource(DeleteRow, '/api/deleterow')

# Report Page


class AllSymbols(Resource):
    def get(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        cur.execute(
            'SELECT symbol FROM (SELECT symbol, SUM(shares) FROM purchased_stock GROUP BY symbol, price) AS symbol_name'
        )
        symbols = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(symbols)


api.add_resource(AllSymbols, '/api/allsymbols')


class StockReport(Resource):
    def get(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        cur.execute(
            'SELECT symbol, SUM(shares), price FROM purchased_stock GROUP BY symbol, price;'
        )
        symbols = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(symbols)


api.add_resource(StockReport, '/api/stockreport')


class NumberOfShares(Resource):
    def get(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        cur.execute(
            "SELECT SUM(shares), symbol FROM purchased_stock GROUP BY symbol, price"
        )
        shares = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(shares)


api.add_resource(NumberOfShares, '/api/shares')


class TotalInvested(Resource):
    def get(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        cur.execute(
            "SELECT SUM(shares), price FROM purchased_stock GROUP BY symbol, price"
        )
        invested = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(invested)


api.add_resource(TotalInvested, '/api/invested')


class SumOfAllStocksPurchased(Resource):
    def get(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        cur.execute(
            "SELECT SUM(x.total_invested) FROM (SELECT symbol, price * shares AS total_invested FROM purchased_stock) AS x"
        )
        sum = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(sum)


api.add_resource(SumOfAllStocksPurchased, '/api/sumofallstockspurchased')


class TotalPortfolio(Resource):
    def get(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        cur.execute("SELECT SUM(price) FROM purchased_stock")
        totalPortfolio = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(totalPortfolio)


api.add_resource(TotalPortfolio, '/api/totalPortfolio')


class DeleteAllStocks(Resource):
    def delete(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        json_data = request.get_json()
        stock_symbol = json_data['stock_symbol']
        cur.execute('DELETE FROM purchased_stock WHERE symbol = %s',
                    (stock_symbol, ))

        conn.commit()
        cur.close()
        print('Deleted')
        return jsonify(stock_symbol)


api.add_resource(DeleteAllStocks, '/api/deleteall')


class UpdateStocks(Resource):
    def put(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        json_data = request.get_json()
        shares = json_data['shares']
        stock_id = json_data['stock_id']
        cur.execute(
            'UPDATE purchased_stock SET shares = %s WHERE stock_id = %s',
            (shares, stock_id))
        conn.commit()
        cur.close()
        conn.close()


api.add_resource(UpdateStocks, '/api/updatestocks')


class ValidateCredentials(Resource):
    def post(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        json_data = request.get_json()
        usernameCredential = json_data['usernameCredential']
        password = json_data['password']
        cur.execute(
            "SELECT user_id FROM user_credentials WHERE username = %s AND password = %s",
            (usernameCredential, password,))
        account = cur.fetchone()
        print(account)
        conn.commit()
        cur.close()
        conn.close()
        if account:
            return jsonify(account, True)
        else:
            return  False


api.add_resource(ValidateCredentials, '/api/username')

# class UserId(Resource):
#     def get(self):
#         conn = psycopg2.connect(dbname='stock_application',
#                                 user='postgres',
#                                 password='databasePassword',
#                                 host='localhost')
#         cur = conn.cursor()
#         json_data = request.get_json()
#         usernameCredential = json_data['usernameCredential']
#         password = json_data['password']
#         cur.execute(
#             "SELECT user_id FROM user_credentials WHERE username = %s AND password = %s",
#             (usernameCredential, password,))
#         account = cur.fetchone()
#         conn.commit()
#         cur.close()
#         conn.close()
#         return jsonify(account)

# api.add_resource(UserId, '/userid/stocks')


app.run(debug=True)