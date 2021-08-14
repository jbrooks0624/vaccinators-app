import json


# Opens json file and check if name is in file
def verify_lot_numbers(database_json, frontend_name):
    f = open(database_json, 'r')
    s = f.read()
    f.close()

    obj = json.loads(s)
    statuses = obj['statuses']

    for tweet in statuses:
        user = tweet['user']
        name = user['name']
        if frontend_name == name:
            return True
    return False


print(verify_lot_numbers('tweets.json', "NASA"))

