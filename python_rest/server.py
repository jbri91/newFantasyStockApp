from flask import Flask
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from flask_sqlalchemy import SQLAlchemy
import psycopg2

conn = psycopg2.connect(dbname='stock_application', user='postgres', password='databasePassword', host='localhost')

cur = conn.cursor()

# cur.execute('SELECT * FROM user_credentials;')
cur.execute('SELECT * FROM purchased_stock;')

print(cur.fetchall())

conn.commit()
cur.close()
conn.close()

app = Flask(__name__)
api = Api(app)

Base = declarative_base()


if __name__ == '__main__':
    app.run(debug=True)