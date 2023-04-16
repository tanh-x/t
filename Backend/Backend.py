import sqlite3

from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    con = sqlite3.connect("Backend.db")
    print("connected\n")
    con.execute("""
    
    );
    """)
    print("table made\n")
    con.close()
    return "Pe"


@app.route('/GetTables')
def get_tables():
    return "<p>Here Are the tables</p>"
