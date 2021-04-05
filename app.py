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
        headers = {
            'token': 'pk_75972e634de441d4a997ed43057a5221',
            'Accept': 'application.json',
            'Content-Type': 'application/json'
        }
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
    def get(self):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        cur.execute('SELECT * FROM purchased_stock;')
        purchasedStock = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(purchasedStock)


api.add_resource(PurchasedStock, '/api/purchased')


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
    def get(self, username, password):
        conn = psycopg2.connect(dbname='stock_application',
                                user='postgres',
                                password='databasePassword',
                                host='localhost')
        cur = conn.cursor()
        cur.execute(
            'INSERT INTO user_credentials (username, password) VALUES(%s, %s)',
            (username, password))
        conn.commit()
        cur.close()
        conn.close()
        print(username)
        print(password)
        return jsonify({'username': username, 'password': password})


api.add_resource(UserCredentials,
                 '/api/createaccount/<string:username>/<string:password>')

# class AddStocksToTable(Resource):
#     def get(self, symbol, stock_name, price, day_change, percentage_change,
#             date):
#         conn = psycopg2.connect(dbname='stock_application',
#                                 user='postgres',
#                                 password='databasePassword',
#                                 host='localhost')
#         cur = conn.cursor()
#         cur.execute(
#             'INSERT INTO purchased_stock (symbol, stock_name, price, day_change, percentage_change, date) VALUES(%s, %s, %s, %s, %S, %s)',
#             (symbol, stock_name, price, day_change, percentage_change, date))
#         conn.commit()
#         cur.close()
#         conn.close()
#         print(symbol)
#         print(price)
#         print(day_change)
#         print(percentage_change)
#         return jsonify({
#             'symbol': symbol,
#             'stock_name': stock_name,
#             'price': price,
#             'day_change': day_change,
#             'percentage_change': percentage_change,
#             'date': date
#         })


class AddStocksToTable(Resource):
    def post(self):
        # json_data = request.get_json()
        # print(json_data)
        
        # conn = psycopg2.connect(dbname='stock_application',
        #                         user='postgres',
        #                         password='databasePassword',
        #                         host='localhost')
        # cur = conn.cursor()
        # print(request.json)

        json_data = request.get_json()
        symbol = json_data['symbol']
        stockName = json_data['stockName']
        price = json_data['price']
        day_change = json_data['day_change']
        percentage_change = json_data['percentage_change']
        date = json_data['date']
        # stockName = request.json['stockName']
        # price = request.json['price']
        # day_change = request.json['day_change']
        # percentage_change = request.json['percentage_change']
        # date = request.json['date']
        # cur.execute(
        #     'INSERT INTO purhcased_stock (symbol, stock_name, price, day_change, percentage_change, date) VALUES(%s, %s, %s, %s, %S, %s)',
        #     (symbol, stock_name, price, day_change, percentage_change, date))
        # conn.commit()
        # cur.close()
        # conn.close()
        return jsonify(symbol, stockName, price, day_change, percentage_change, date)


api.add_resource(AddStocksToTable, '/api/buystock')

app.run(debug=True)