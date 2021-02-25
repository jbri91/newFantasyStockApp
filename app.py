from flask import Flask
import requests
from flask_restful import Api, Resource, reqparse

# Tpk_b6429f1574564a01b54d614f88e0f93f

app = Flask(__name__)
api = Api(app)

response = requests.get('https://sandbox.iexapis.com/stable/stock/IBM/quote?token=Tpk_b6429f1574564a01b54d614f88e0f93f')
print(response.json())

# @app.route('/hello')
# def hello_world():
#     return 'Hello World'
    
class Stock(Resource):
    def get(self, stockInfo):
        return response.json()

api.add_resource(Stock, '/stock')

app.run(debug=True)