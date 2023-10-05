import os
import pandas as pd
from decimal import Decimal
import datetime
import json
import logging

log_files = {
    '/app/latency_logs/latency_logs.txt': '/app/latency_logs/latency_logs.csv'
}

# Define the columns for the DataFrame
columns = ['timestamp', 'algoid', 'ping', 'value']

logging.info("Starting logs parser")

for log_file_path, output_file_path in log_files.items():
    if not os.path.isfile(log_file_path):
        logging.error(f"Log file '{log_file_path}' does not exist. Skipping...")
        continue

    df = pd.DataFrame(columns=columns)
    dct = {}

    # Open and read the log file
    with open(log_file_path, 'r') as file:
        for line in file:
            # Load each line as a JSON object
            try:
                log_data = json.loads(line)
                log_content = log_data["log"].split(";")  # Perform the split once and store the output list

                # Extract the required information from the split list
                algoid = int(log_content[1].split("=")[1])
                ping = log_content[2].split("=")[1]
                se = log_content[3].split("=")[1]
                timestamp = float(log_content[4].split("=")[1])

                # Check if algoid exists in dct, if not, create a new entry
                if algoid not in dct:
                    dct[algoid] = {}

                # Check if ping exists for the algoid, if not, create a new entry
                if ping not in dct[algoid]:
                    dct[algoid][ping] = {}

                # Assign the timestamp to the appropriate key
                if dct[algoid][ping].get(se) is None:
                    dct[algoid][ping][se] = timestamp

                if ping == '1.1' and se == 'end':
                    ping = '1.2.1'
                    se = 'start'

                    if ping not in dct[algoid]:
                        dct[algoid][ping] = {}
                    
                    if dct[algoid][ping].get(se) is None:
                        dct[algoid][ping][se] = timestamp

                if ping == '1.3' and se == 'start':
                    ping  = '1.2.5'
                    se = 'end'
                    
                    if ping not in dct[algoid]:
                        dct[algoid][ping] = {}
                    
                    if dct[algoid][ping].get(se) is None:
                        dct[algoid][ping][se] = timestamp

            except Exception as e:
                print("Error while parsing a log:", str(e))

    # Sort the DataFrame by timestamp
    for algoid, pings in dct.items():
        for ping, x in pings.items():
            if 'start' in x.keys() and 'end' in x.keys():
                datetime_obj = datetime.datetime.fromtimestamp(x['start'])
                iso_timestamp = datetime_obj.isoformat()
                latency = (x['end'] - x['start']) * 1000
                #df = df.append({'timestamp': iso_timestamp, 'algoid': algoid, 'ping': ping, 'value': latency},
                #              ignore_index=True)
                new_row = pd.DataFrame({'timestamp': [iso_timestamp], 'algoid': [algoid], 'ping': [ping], 'value': [latency]})
                df = pd.concat([df, new_row], ignore_index=True)

    # Sort the DataFrame by timestamp
    df.sort_values(by='timestamp', inplace=True)

    # Save DataFrame to a CSV file (latency_logs.csv)
    df.to_csv(output_file_path, index=False)

    logging.info(f"Data processing complete for {log_file_path}. Output file: {output_file_path}")
