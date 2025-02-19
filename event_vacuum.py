import os
import time
import sys
import psycopg2
import datetime
from dateutil import relativedelta
from datetime import datetime, timedelta
from dateutil.relativedelta import *
 

# current_folder = open('D:/code/FCS/TEMPLATES/CONFIGURATION/' + 'CURRENT_FOLDER.txt',"r").read().strip()
# database_name = 'ldms_' + str(current_folder)
database_name='ldms'

i = 3


########################## This Function will be called when to insert data into the Database ###########################
def WriteToDatabase(sql1,*args):
    	
	# print(args)
	counter = 0 # for trying atleast five times in case of failure.
	while True:
		try:
			conn = psycopg2.connect(database=database_name, user="postgres", password="postgres", host="localhost", port="5432")  # This will connect to the database.
			cur = conn.cursor()
			cur.execute(sql1,args) # Execute the querry.
			conn.commit()          # Insert data into database.
			conn.close()
			# print("Inserted in Database....")
			break
		except Exception as e:
			print("Error in Database writing-------::::",e)
			exc_type, exc_obj, exc_tb = sys.exc_info()
			fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
			print(exc_type, fname, exc_tb.tb_lineno)
			try:
				conn.close()
				counter += 1
				if(counter > 5):
					result = []
					break
			except Exception as e:
				print("WriteToDatabase error",e)
				break
	counter = 0


########################## This Function will be called when to fetch the data from the Database #################################
def ReadDatabase(querry):
	global result
	
	counter = 0 # for trying atleast five times in case of failure.

	while True:
		try:
			conn = psycopg2.connect(database=database_name, user="postgres", password="postgres", host="localhost", port="5432")  # This will connect to the database.
			cur = conn.cursor()
			cur.execute(querry)  # Execute the querry.
			result = cur.fetchall() # read data from database.
			# print("result::",result)
			conn.close()
			break
		except Exception as e:
			exc_type, exc_obj, exc_tb = sys.exc_info()
			fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
			print(exc_type, fname, exc_tb.tb_lineno)
			try:
				conn.close()
				counter += 1 # increase the counter value
				if(counter > 5): # If counter value is greater then five then break the loop
					result = []
					break

			except:
				result = []
				break
	counter = 0
	return result



######To create the partitions first time if partition is not applied.
def proc1_new():
	global result

	t1=datetime.now()
	print("t1::::::::",t1)

	input_dt = datetime.today().date()
	print('Input date today:', input_dt)

	# day_num = input_dt.strftime("%d")

	# res = input_dt - timedelta(days = int(day_num) - 1)
	# print('First day of month:', res)
	res = input_dt + timedelta(days=1)
	print('res:', res)

	pastyear_date = input_dt + relativedelta(months=-12)
	print("pastyear_date: ",pastyear_date)


	###to check the partitions
	C_1 = "SELECT nmsp_parent.nspname AS parent_schema FROM pg_inherits JOIN pg_class parent ON\
	 pg_inherits.inhparent = parent.oid JOIN pg_class child ON pg_inherits.inhrelid = child.oid JOIN\
	  pg_namespace nmsp_parent ON nmsp_parent.oid = parent.relnamespace JOIN pg_namespace nmsp_child ON\
	   nmsp_child.oid = child.relnamespace WHERE parent.relname='Event_data';"

	ReadDatabase(C_1)
	print("result------",result)
	# print("C_1:: ",C_1)

	####if there is no partitions applied before, than it execute this code
	# if(len(result) == 0):
	if(0 == 0):

		print("ldms Partaition Currently : 0")
		C_2 = '''ALTER TABLE ldms."Event_data" RENAME TO event_data_old;'''
		WriteToDatabase(C_2)
		print("C_2",C_2)

		###To create the table for partition
		C_3 = '''CREATE TABLE IF NOT EXISTS ldms."Event_data"
		(srno bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ,
			substationid text COLLATE pg_catalog."default" NOT NULL,
			feederid text COLLATE pg_catalog."default" NOT NULL,
			feedername text COLLATE pg_catalog."default" NOT NULL,
			feedercode text COLLATE pg_catalog."default" NOT NULL,
			received_datetime timestamp with time zone NOT NULL,
			parameter text COLLATE pg_catalog."default",
			parameter_value text COLLATE pg_catalog."default",
			lastupdateddatetime timestamp with time zone NOT NULL,
			systeminsertdatetime text COLLATE pg_catalog."default",
			feederiddigit text COLLATE pg_catalog."default")
			PARTITION BY RANGE (received_datetime);'''
		
		WriteToDatabase(C_3)
		print("C_3",C_3)
		

		start_date = datetime(2025, 1, 1)  # Start date
		num_days = 365  # Number of days for partitioning

		# Iterate through each date and create partitions
		for i in range(num_days):
			current_date = start_date + timedelta(days=i)  # Current date
			next_date = current_date + timedelta(days=1)  # Next date

			# Format dates as strings for SQL
			res = current_date.strftime('%Y-%m-%d')
			resto = next_date.strftime('%Y-%m-%d')
			print("res--",res)
			print("resto--",resto)

			v1 = 'event' 
			v3 = res.replace("-", "_")  

			# Create partition SQL command
			C_4 = f"""CREATE TABLE ldms.{v1}_{v3} PARTITION OF ldms."Event_data" FOR VALUES FROM ('{res} 00:00:00') TO ('{resto} 00:00:00');"""

			# Write the SQL to the database
			WriteToDatabase(C_4)
			print("c4---",C_4)


		C_6 = '''CREATE TABLE ldms.ldms_def PARTITION OF ldms."Event_data" DEFAULT;'''
		WriteToDatabase(C_6)
		print("C_6-",C_6)

		# C_7 = '''INSERT INTO Event_main_data (data, received_datetime) VALUES ('Recent Data', '2024-11-01'), ('Older Data', '2023-11-01');'''
		C_7 = '''INSERT INTO ldms."Event_data" SELECT * FROM ldms.event_data_old'''
		WriteToDatabase(C_7)
		print("C_7-",C_7)
		time.sleep(1)

		C_9 = '''DROP TABLE ldms.ldms_old;'''
		# WriteToDatabase(C_9)
		print("C_9-",C_9)
	

# proc1_new()


########To check the partitions and delete the partitions of more than 3 months 
def proc2():
	
	global result

	input_dt = datetime.today().date()
	print('Input date:', input_dt)
	print('Input date:', type(input_dt))

	day_num = input_dt.strftime("%d")

	first_day_month = input_dt - timedelta(days = int(day_num) - 1)
	print('First day of month:', type(first_day_month))
	# first_day_month = date(2025, 1, 29)

	current_date = datetime.now()
	year = current_date.year
	month = current_date.month

	# Calculate the first and last day of the current month
	start_date = datetime(year, month, 1)  # First day of the month
	print("start_date--",start_date)
	if month == 12:  # Handle December (rollover to the next year)
		end_date = datetime(year + 1, 1, 1)
		print("end_date--",end_date)
	else:
		end_date = datetime(year, month + 1, 1)  # First day of the next month
		print("end_date--",end_date)

	total_days = (end_date - start_date).days
	print("Total Days:", total_days)


	if input_dt==first_day_month:
		for i in range(total_days+1):
			print("iiii-----",i)

			iterate_startdays = start_date + timedelta(days=i)
			print("iterate_startdays--",iterate_startdays)

			resto = iterate_startdays.strftime('%Y-%m-%d')
			print("resto--",resto)
			v3 = resto.replace("-", "_")
			print("v3--",v3)

			iterate_enddays = start_date + timedelta(days=i+1)
			print("iterate_enddays--",iterate_enddays)

			# Create partition SQL command
			C_4 = f"""CREATE TABLE IF NOT EXISTS ldms.event_{v3} PARTITION OF ldms."Event_data" FOR VALUES FROM ('{iterate_startdays} 00:00:00') TO ('{iterate_enddays} 00:00:00');"""

			# WriteToDatabase(C_4)
			print("c4---",C_4)

	#####To check the partitions
	C_1 = "SELECT child.relname  AS child FROM pg_inherits JOIN pg_class parent ON\
	pg_inherits.inhparent = parent.oid JOIN pg_class child ON pg_inherits.inhrelid = child.oid JOIN\
	pg_namespace nmsp_parent ON nmsp_parent.oid = parent.relnamespace JOIN pg_namespace nmsp_child ON\
	nmsp_child.oid = child.relnamespace WHERE parent.relname='Event_data';"

	ReadDatabase(C_1)
	print("result::",result)

	lastyear_date = input_dt + relativedelta(years=-1)
	lastyear_date1 = lastyear_date.strftime('%Y_%m_%d')
	print("lastyear_date----",lastyear_date1)

	part_name = "event_{}".format(lastyear_date1)
	# part_name='event_2025_12_31'
	print("part_name---",part_name)

	C_2 = '''SELECT COUNT(*) FROM pg_inherits JOIN pg_class parent ON pg_inherits.inhparent = parent.oid JOIN pg_class child ON pg_inherits.inhrelid = child.oid 
				WHERE parent.relname = 'Event_data' AND child.relname = '{}';'''.format(part_name)
	ReadDatabase(C_2)
	print("result::",result)

	if result[0][0] > 0:
		print("--------exists in the list------")

		C_4 = '''ALTER TABLE  ldms."Event_data" DETACH PARTITION ldms.{};'''.format(part_name)
		WriteToDatabase(C_4)
		print("C_4: ",C_4)

		####Drop partition
		C_5 = "DROP TABLE ldms.{}; ".format(part_name)
		WriteToDatabase(C_5)
		print("C_5: ",C_5)

	else:
		print("-------Table does not exist---------")
			

proc2()