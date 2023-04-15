from flask import Flask
import sqlite3
import datetime

app = Flask(__name__)


@app.route("/")
def hello_world():
    con = sqlite3.connect("Backend.db")
    return "<p>Hello, World!</p>"

@app.route('/GetTables')
def get_tables():
    return "<p>Here Are the tables</p>"