from flask import Flask
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from flask_sqlalchemy import SQLAlchemy

Base = declarative_base()


app = Flask(__name__)
api = Api(app)

def connect(user, password, db, host='postgres', port=5432):
    url = 'postgresql://{}:{}@{}:{}/{}'
    url = url.format(user, password, host, port, db)
    
    con = SQLAlchemy.create_engine(url, client_encoding='utf8')

    meta = SQLAlchemy.MetaData(bind=con, reflect=True)

    return con, meta
con, meta = connect('postgres', 'databasePassword', 'purchased_stocks')

print(con)
print(meta)


if __name__ == '__main__':
    app.run(debug=True)