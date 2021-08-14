import json


# Parameters: string of database name, tuple containing frontend person's first name, last name, and lot number
# Output: returns true if person in database, false otherwise
def verify_person_in_database(database_json, fp):
    f = open(database_json, 'r')
    lines = f.readlines()
    f.close()
    for line in lines[1:]:
        line_items = line.split(',')
        # Getting info from each line of csv
        first_name = line_items[0]
        last_name = line_items[1]
        lot_number = line_items[2][:-1]

        # If there's a match
        if first_name == fp[0] and last_name == fp[1] and lot_number == fp[2]:
            return True

    # If nothing is found
    return False


# Test cases
print(verify_person_in_database('test_database.csv', ('Antin', 'Melloi', 'qtvXru')))  # True
print(verify_person_in_database('test_database.csv', ('Kevin', 'Hass', 'qtvXru')))  # False

