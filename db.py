from psycopg2 import pool
import os
from dotenv import load_dotenv


load_dotenv()
DATABASE_URL = os.environ.get("DATABASE_URL")

# print(type(DATABASE_URL))
class DB :
    __connection_pool = None
    
    @classmethod
    def init(cls):
        DB.__connection_pool = pool.SimpleConnectionPool(5, 100, DATABASE_URL)

    @classmethod
    def get_connection(cls):
        return cls.__connection_pool.getconn()


    @classmethod
    def return_connection(cls, connection):
        return cls.__connection_pool.putconn(connection)

    @classmethod
    def close_all_connection(cls):
        return cls.__connection_pool.closeall()


class ConnectionPool:
    def __init__(self):
        self.connection = None
        self.cursor = None

    def __enter__(self):
        self.connection = DB.get_connection()
        self.cursor = self.connection.cursor()
        return self.cursor

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            self.connection.rollback()
        else:
            self.cursor.close()
            self.connection.commit()
        DB.return_connection(self.connection)