import sqlite3
from flask import Flask
from flask import request
app = Flask(__name__)
app.run()


def check_in_database(first_name, last_name, lot_number):
    try:
        conn = sqlite3.connect('VaccinatorsData.db')
        print("Opened database successfully");

    except Exception as e:
        print("Error during connection", str(e))

    cur = conn.cursor()

    select_query = "SELECT * FROM MOCK_DATA WHERE field1=? AND field2=? AND field3=?"
    cur.execute(select_query, (first_name, last_name, lot_number))

    db_list = cur.fetchall()
    conn.close()

    if len(db_list) == 1:
        assert(db_list[0][0] == first_name and db_list[0][1] == last_name and db_list[0][2] == lot_number)
        return "True"
    else:
        return "False"


@app.route("/validateLotNumber", methods=['POST'])
def validate_lot_number():
    first_name = request.args.get('first_name')
    last_name = request.args.get('last_name')
    lot_number = request.args.get('lot_number')
    return check_in_database(first_name, last_name, lot_number)

