import sqlite3

try:
    conn = sqlite3.connect('VaccinatorsData.db')
    print("Opened database successfully");
except Exception as e:
    print("Error during connection", str(e))

conn.close()

