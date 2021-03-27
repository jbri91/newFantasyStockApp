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

headers = {'token': 'pk_75972e634de441d4a997ed43057a5221', 'Accept' : 'application.json', 'Content-Type' : 'application/json'}
iexCloud = requests.get('https://cloud.iexapis.com/stable/stock/IBM/quote?token=pk_75972e634de441d4a997ed43057a5221&period=annual').json()
print(iexCloud)

class SearchStock(Resource):
    def get(self):
        headers = {'Authorization': 'pk_75972e634de441d4a997ed43057a5221', 'Accept' : 'application.json', 'Content-Type' : 'application/json'}
        searchStock = requests.get('https://cloud.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10', headers = headers).json()
        print(searchStock)
        return jsonify(searchStock)



# Connecting with Database
conn = psycopg2.connect(dbname='stock_application', user='postgres', password='databasePassword', host='localhost')
cur = conn.cursor()
# cur.execute('SELECT * FROM user_credentials;')
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

class UserCredentials(Resource):
    def get(self):
        conn = psycopg2.connect(dbname='stock_application', user='postgres', password='databasePassword', host='localhost')
        cur = conn.cursor()
        cur.execute('SELECT * FROM user_credentials;')
        userCredentials = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()
        return jsonify(userCredentials)
        

api.add_resource(SearchStock, '/searchStock')
api.add_resource(UserCredentials, '/userCredentials')
api.add_resource(Stock, '/stock')
api.add_resource(PurchasedStock, '/purchased')

app.run(debug=True)