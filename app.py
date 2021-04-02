from flask import Flask, jsonify
import requests
from flask_restful import Api, Resource, reqparse
import psycopg2
import simplejson as json
import decimal

app = Flask(__name__)
api = Api(app)

# Connecting with Trial Stock API
stock = requests.get('https://sandbox.iexapis.com/stable/stock/IBM/quote?token=Tpk_b6429f1574564a01b54d614f88e0f93f').json()

# headers = {'token': 'pk_75972e634de441d4a997ed43057a5221', 'Accept' : 'application.json', 'Content-Type' : 'application/json'}
# iexCloud = requests.get('https://cloud.iexapis.com/stable/stock/IBM/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual').json()
# print(iexCloud)


class SearchStock(Resource):
    def get(self, stock):
        headers = {'token': 'pk_75972e634de441d4a997ed43057a5221', 'Accept' : 'application.json', 'Content-Type' : 'application/json'}
        searchStock = requests.get('https://cloud.iexapis.com/stable/stock/{}/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual'.format(stock)).json()
        return jsonify(searchStock)

api.add_resource(SearchStock, '/api/searchStock/<string:stock>')


class Tesla(Resource):
    def get(self):
        popular = requests.get('https://cloud.iexapis.com/stable/stock/TSLA/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual').json()
        return jsonify(popular)

api.add_resource(Tesla, '/api/tesla')

class Apple(Resource):
    def get(self):
        popular = requests.get('https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual').json()
        return jsonify(popular)

api.add_resource(Apple, '/api/apple')

class Amazon(Resource):
    def get(self):
        popular = requests.get('https://cloud.iexapis.com/stable/stock/AMZN/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual').json()
        return jsonify(popular)

api.add_resource(Amazon, '/api/amazon')


class Microsoft(Resource):
    def get(self):
        popular = requests.get('https://cloud.iexapis.com/stable/stock/MSFT/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual').json()
        return jsonify(popular)

api.add_resource(Microsoft, '/api/microsoft')

# Connecting with Database
conn = psycopg2.connect(dbname='stock_application', user='postgres', password='databasePassword', host='localhost')
cur = conn.cursor()
cur.execute('SELECT * FROM purchased_stock;')
purchasedStock = cur.fetchall()
conn.commit()
cur.close()
conn.close()




class Stock(Resource):
    def get(self):
        return jsonify(stock)

class PurchasedStock(Resource):
    def get(self):
        conn = psycopg2.connect(dbname='stock_application', user='postgres', password='databasePassword', host='localhost')
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
        conn = psycopg2.connect(dbname='stock_application', user='postgres', password='databasePassword', host='localhost')
        cur = conn.cursor()
        cur.execute('SELECT SUM(price) FROM purchased_stock')
        sum = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(sum)

api.add_resource(SumOfPurchasedStock, '/api/sum')

# class InsertStocks(Resource):
#     def get(self):
#         conn = psycopg2.connect(dbname='stock_application', user='postgres', password='databasePassword', host='localhost')
#         cur.execute('INSERT INTO purchased_stock (stock_id, symbol, stock_name, price, day_change, percentage_change, date) VALUES(13, DIS, Walt Disney Co, 188.18, 3.66, 1.98, 2021-04-01 )')
#         inserting = cur.fetchall()
#         conn.commit()
#         return jsonify(inserting)

# api.add_resource(InsertStocks, '/api/insert')

conn = psycopg2.connect(dbname='stock_application', user='postgres', password='databasePassword', host='localhost')
cur = conn.cursor()
cur.execute('INSERT INTO user_credentials (username, password) VALUES(%s, %s)', ('jjjjj', 'password44'))
cur.execute('SELECT * FROM user_credentials;')

inserting = cur.fetchall()

for r in inserting:
    print(f"username {r[0]} password {r[1]}")

conn.commit()
cur.close()
conn.close()

# class UserCredentials(Resource):
#     def get(self):
#         conn = psycopg2.connect(dbname='stock_application', user='postgres', password='databasePassword', host='localhost')
#         cur = conn.cursor()
#         cur.execute('SELECT * FROM user_credentials;')
#         userCredentials = cur.fetchall()
#         conn.commit()
#         cur.close()
#         conn.close()
#         return jsonify(userCredentials)

# api.add_resource(UserCredentials, '/api/userCredentials')
        

app.run(debug=True)