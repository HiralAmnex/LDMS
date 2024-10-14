# Currently Using For Inserting Demo data for Plotting data on Database
import psycopg2
from datetime import datetime, timedelta
import time
import random

# Database connection details
db_host = "localhost"
db_port = "5432"
db_name = "ldms"
db_user = "postgres"
db_password = "postgres"

# Connect to the PostgreSQL database
conn = psycopg2.connect(
    host=db_host,
    port=db_port,
    dbname=db_name,
    user=db_user,
    password=db_password
)
cursor = conn.cursor()

def insert_24h_data():
    # Start with 5th August 2024, 00:00:00
    start_time = datetime(2024, 8, 5, 0, 0, 0)
    
    for minute in range(1440):  # 1440 minutes in 24 hours
        # Generate random data (replace this with actual data fetching if available)
        voltage = round(random.uniform(200.0, 240.0), 2)   # Example: Voltage between 200.0V and 240.0V
        current = round(random.uniform(5.0, 20.0), 2)      # Example: Current between 5.0A and 20.0A
        temperature = round(random.uniform(20.0, 35.0), 2) # Example: Temperature between 20.0°C and 35.0°C
        ampere = round(random.uniform(1.0, 15.0), 2)       # Example: Ampere between 1.0A and 15.0A
        
        # Calculate the current timestamp
        timestamp = start_time + timedelta(minutes=minute)

        # Insert the data into the table
        query = """
        INSERT INTO ldms.voltagereadings (time_1, voltage, current, temprature, ampere)
        VALUES (%s, %s, %s, %s, %s);
        """
        cursor.execute(query, (timestamp, voltage, current, temperature, ampere))
        
        # Commit the transaction
        conn.commit()

        print(f"Inserted data at {timestamp}: Voltage={voltage}V, Current={current}A, Temperature={temperature}°C, Ampere={ampere}A")

try:
    insert_24h_data()
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    # Close the cursor and connection
    cursor.close()
    conn.close()