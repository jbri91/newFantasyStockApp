from flask import Flask, jsonify
import requests
from flask_restful import Api, Resource, reqparse


app = Flask(__name__)
api = Api(app)

stock = requests.get('https://sandbox.iexapis.com/stable/stock/IBM/quote?token=Tpk_b6429f1574564a01b54d614f88e0f93f').json()


class Stock(Resource):
    def get(self):
        return jsonify(stock)


api.add_resource(Stock, '/stock')

app.run(debug=True)