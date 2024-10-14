import time
import json
import random
import paho.mqtt.client as mqtt

# MQTT settings
# broker = "mqtt.eclipse.org"  # Replace with your MQTT broker address
# port = 1883  # Replace with your MQTT broker port
# topic = "sensor/data"  # Replace with your topic

# Function to generate random data
def generate_data():
    data = {
        "voltage": round(random.uniform(220, 240), 2),
        "current": round(random.uniform(5, 15), 2),
        "mega_volt": round(random.uniform(1, 5), 2),
        "mvt": round(random.uniform(0.1, 0.5), 2)
    }
    print("******** INIT ********")
    return data


generate_data()