import psycopg2
import time
from datetime import datetime
from random import uniform

# Database connection parameters
DB_HOST = "localhost"
DB_NAME = "ldms"
DB_USER = "postgres"
DB_PASSWORD = "postgres"

# Establish a connection to the PostgreSQL database
conn = psycopg2.connect(
    host=DB_HOST,
    database=DB_NAME,
    user=DB_USER,
    password=DB_PASSWORD
)

# Create a cursor object to execute SQL queries
cur = conn.cursor()

def insert_reading():
    # Generate the current timestamp
    current_time = datetime.now()
    
    # Generate random readings for demonstration purposes
    voltage_reading = round(uniform(368.0, 320.0), 2)  # Voltage between 220.0 and 240.0
    current_reading = round(uniform(20.0, 30.0), 2)  # Current between 10.0 and 20.0
    ampere_reading = round(uniform(5.0, 10.0), 2)  # Ampere between 5.0 and 10.0

    # SQL query to insert a new reading
    insert_query = """
    INSERT INTO ldms.voltagereadings (time_1, voltage, current, ampere)
    VALUES (%s, %s, %s, %s)
    """
    
    # Execute the SQL query
    cur.execute(insert_query, (current_time, voltage_reading, current_reading, ampere_reading))
    
    # Commit the transaction
    conn.commit()

    # Print the inserted values for verification
    print(f"Inserted reading: Voltage={voltage_reading}, Current={current_reading}, Ampere={ampere_reading} at {current_time}")

def main():
    try:
        for i in range(84000):  # Loop to insert 100 data entries
            insert_reading()
            time.sleep(0.01)  # Wait for 2 seconds before the next insertion
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        # Close the cursor and connection to clean up
        cur.close()
        conn.close()

if __name__ == "__main__":
    main()
