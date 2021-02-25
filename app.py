from flask import Flask
import requests
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

response = requests.get('https://swapi.dev/api/people/1/')
print(response.status_code)

# @app.route('/hello')
# def hello_world():
#     return 'Hello World'
    


app.run(debug=True)