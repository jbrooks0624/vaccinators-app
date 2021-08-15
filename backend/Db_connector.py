import sqlite3
from flask import Flask
from flask import request

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.run()


def check_in_database(first_name, last_name, lot_number, date_of_birth):
    try:
        conn = sqlite3.connect('VaccinatorsData.db')
        print("Opened database successfully")

    except Exception as e:
        print("Error during connection", str(e))

    cur = conn.cursor()

    select_query = "SELECT * FROM MOCK_DATA WHERE field1=? AND field2=? AND field3=? AND field4=?"
    cur.execute(select_query, (first_name, last_name, lot_number, date_of_birth))

    db_list = cur.fetchall()
    conn.close()

    if len(db_list) == 1:
        assert (db_list[0][0] == first_name and db_list[0][1] == last_name and db_list[0][2] == lot_number and db_list[0][3] == date_of_birth)
        return "True"
    else:
        return "False"


@app.route("/validateLotNumber", methods=['POST'])
def validate_lot_number():
    req = request.json
    first_name = req["first_name"]
    last_name = req["last_name"]
    lot_number = req["lot_number"]
    date_of_birth = req["date_of_birth"]

    return check_in_database(first_name, last_name, lot_number, date_of_birth)

