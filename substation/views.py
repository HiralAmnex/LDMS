import os
import time
import json
import socket
import getpass
import threading
from pathlib import Path
from datetime import datetime 
from django.conf import settings
from cp56_time import CP56Time2a
from substation.models import *
from django.utils import timezone
from substation.serializers import *
from django.http import JsonResponse
from django.shortcuts import render, redirect
from rest_framework.renderers import JSONRenderer
from django.views.decorators.csrf import csrf_exempt



# Global flag to track running threads
url = "http://127.0.0.1:8000/"  # Adjust the URL and port if different

# webbrowser.open(url)

# ________________to strat in chrome browser ------
# # Open Chrome browser
# chrome_path = None
# # Specify the path for Google Chrome based on the OS

# if os.name == 'nt':  # Windows
# 	chrome_path = 'C:/Program Files/Google/Chrome/Application/chrome.exe %s'
# 	if not os.path.exists('C:/Program Files/Google/Chrome/Application/chrome.exe'):
# 		chrome_path = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'

# elif os.name == 'posix':  # Linux/macOS
# 	chrome_path = '/usr/bin/google-chrome %s'

# if chrome_path:
# 	webbrowser.get(chrome_path).open(url)
# else:
# 	print("Chrome browser not found or not supported")



## Get the current user name
pc_username = getpass.getuser()

## Get the current file directory (without the file name)
current_directory = str(Path(__file__).resolve().parent)

print(f"The current user is: {pc_username}")
print(f"The current directory path is: {current_directory}")


dwg_file = f"{current_directory}"+"/static/img/Diagrama unifilar00.dwg"
# print(f"dwg_file : {dwg_file}")

txt_file_path = f"{current_directory}/SLD/"
# print(f"txt_file_path : {txt_file_path}")


socket_conn_1 = None
socket_con_flag = False

database_name='ldms'


ip_path = ''
RTU_readings_Data = ''

SLD_1 = []
SLD_2 = []

super_user = 0
User_name = ''

final_data = {}


final_result = {}
final_result1 = {}

transformed_data={}

demo_SLD2_data_variable={}
transformed_data_flag=0

mfm_data={}


# with open(r'D:\code\CGM_SUBSTATION\LDMS\substation\static\text\config.txt', 'r') as file:
# with open(f"{current_directory}"+"/static/text/patoda_config.txt", 'r') as file:
# with open(f"{current_directory}"+"/static/text/patoda_config_new.txt", 'r') as file:
with open(f"{current_directory}"+"/static/text/SAMADHAN_COLONY.txt", 'r') as file:


	data = file.read()  # Read the entire file content

float_config=json.loads(data)
# print("float_config---",float_config)

# print("RTU_readings_Data :: 1 ",RTU_readings_Data)


#####---- Create your views here.
############## Function to create socket to send data to server ################
def create_socket():
	global socket_conn_1
	global socket_con_flag

	while True:
		try:  
			print("connecting:::::")
			# socket_file = open(txt_file_path + 'SOCKET_INFO.txt',"r")
			# tcp_data = json.load(socket_file)

			# TCP_IP = "192.168.1.1"
			# TCP_IP = "124.123.122.157"
			# TCP_IP = "195.1.2.1"
			# TCP_IP = "195.1.1.1"
			TCP_IP = "10.195.202.217"

			
			TCP_PORT = 2404
			# (5001)Changes port as given by software team.
			socket_conn_1 = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
			socket_conn_1.settimeout(5)
			socket_conn_1.connect((TCP_IP, TCP_PORT))
			print("socket_1 created sucessfully")
			socket_con_flag = True
			# socket_file.close()
			break

		except Exception as e:
			time.sleep(1)
			print("Error while creating socket::",e)
			socket_con_flag = False


def currenttime_to_cp56():
	#########convert  current time to raw data
	cp56_time2 = CP56Time2a()
	print("Decoded dataset with current time:")
	print(cp56_time2.dataset)

	hex_octetset2 = ['0x'+format(octet, '02x') for octet in cp56_time2.octetset]
	# print("Hexadecimal octet set:")
	# print("hex_octetset2------",hex_octetset2)

	hex_octetset3 = [format(octet, '02x') for octet in cp56_time2.octetset]
	# print("hex_octetset3------",hex_octetset3)

	current_time_send = "".join([format(octet, '02x') for octet in cp56_time2.octetset])
	print("new_value------",current_time_send)
			

def cp56_to_datetime(dat):
	pairs = ['0x'+ dat[i:i+2] for i in range(0, len(dat), 2)]
	# print("pairs---",pairs)
	# dat = "85920f0bad0618"

	cp56_time_new = [int(h, 16) for h in pairs]
	# print("cp56_time2-----",cp56_time_new)

	cp_time = CP56Time2a(*cp56_time_new)
	# print("cp_time--",cp_time)
	formatted_time = cp_time.to_datetime().strftime('%Y-%m-%d %H:%M:%S.%f%z')
	print("888888888--",formatted_time)


def find_config(value_to_find,config):
	try:
		print("####-----",value_to_find)
		key = next(([key,value] for key, value in config.items() if value[0] == value_to_find), None)
		print("%%%%%%%%%%---key---%%%%%%%%%",key)

		return key
	except Exception as e:
		print("Error in find_config",e)


def float_value_calculation(get_data,IOA_no):
	if get_data!='':
		try:
			n=2
			data=[get_data[i:i+n] for i in range(0,len(get_data),n)]
			# print(data)
			data_0=data[::-1]
			# print(data_0)
			binary_data= [bin(int(i,16))[2:].zfill(8) for i in data_0]

			# print(binary_data)
			fst=str(binary_data[0][0])

			if fst=='0':
				sign=1
			else:
				sign=-1
			# print("sign------",sign)

			exponents = int((binary_data[0][-7:]+binary_data[1][0]),2)
			# print("exponent--",exponents)
			exponent=exponents-127
			# print("exponent--",exponent)

			# final_bits = binary_data[1][-7:]+binary_data[2]+binary_data[3]
			# print(final_bits)

			dt=int(binary_data[1][-7:],2)*256*256+int(binary_data[2],2)*256+int(binary_data[3],2)
			# print("dt---",dt)
			sta_1 = int('800000',16)
			sta_2 = int('400000',16)

			div_1=dt/sta_1+1
			# print(div_1)
			div_2=dt/sta_2
			# print(div_2)

			if exponents>0:
				mantissa=div_1
			else:
				mantissa=div_2
			# print("mantissa--",mantissa)

			final_float_value=sign*mantissa*(2**exponent)
			print("final_float_value--",final_float_value)

			return final_float_value

		except Exception as e:
			print("error--",e)
			
	else:
		print("Data is not available")



def find_IOA(data,nox):
	print("888888889999900000")	
	# nox=16	
	IOA_no3 = []			
	
	len_data = int(data[12:14],16)
	print("len_data----000--",len_data)
	# IOA_nos = [int(i[22:28], 16),int(i[22+nox:28+nox], 16),int(i[22+2*nox:28+2*nox], 16),int(i[22+3*nox:28+3*nox], 16),int(i[22+4*nox:28+4*nox], 16),int(i[22+5*nox:28+5*nox], 16),int(i[22+6*nox:24+6*nox], 16),int(i[22+7*nox:24+7*nox], 16),int(i[22+8*nox:24+8*nox], 16),int(i[22+9*nox:24+9*nox], 16),int(i[22+10*nox:24+10*nox], 16),int(i[22+11*nox:24+11*nox], 16),int(i[22+(12*nox):24+(12*nox)], 16),int(i[22+(13*nox):24+(13*nox)], 16)]
	# d1=data[22:28]

	IOA_ = [data[22+j*nox : 28+j*nox] for j in range(len_data)]
	print("IOA_no----@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-",IOA_)	


	for k in IOA_:
		if k:
			pairs = [str(k)[i:i+2] for i in range(0, len(str(k)), 2)]						
			converted_data = int(''.join(pairs[::-1]), 16)
			IOA_no3.append(converted_data)
			# print("IOA_no3-----------------",IOA_no3)

		else:
			print("Warning: Empty IOA segment encountered, skipping.")
				

	print("----------****-----------",IOA_no3)
	return IOA_no3


def get_digital_data(data,IOA_nos,type_id):
	input_status = {}
	start_pos1 = 29  								
	nox1 = 8         								
	num_inputs = len(IOA_nos) 
	print(IOA_nos,type(IOA_nos))	
	# print(data,type(data))	
	# print("^^^^^^^&&&&&&&***********----",float_config[type_id])	


	for x in range(num_inputs):
		key_compare = (find_config(IOA_nos[x], float_config[type_id]))
		print("key_compare1-----",key_compare[0])
		if key_compare != None and key_compare!=[]:
			key_compare=key_compare[0]

			current_pos1 = start_pos1 + x * nox1
			if data[current_pos1] == '1':
				input_status[key_compare] = 'ON'  		
				print(f"&&&........{key_compare}  ON.....")

			else:
				input_status[key_compare] = 'OFF'  		
				print(f"&&&........{key_compare}  OFF.....")
		
	print("------final input_status------",input_status)
	return input_status
		

def get_data(seperate_data,final_dict):
	# global final_dict
	# global final_dict1

	time.sleep(0.5)
	dt=seperate_data
	print("iii-------------",dt)
	type_id=dt[10:12]
	print("type_id----------",type_id)
	i=dt
	j=len(dt)

	print(f"^^^^^^^^^^^^^^^^*********************^^^^^^-------🔥 Active Thread Count: {threading.active_count()}")
	print("tttttttttttttttttttttttttttttttttt---------",[t for t in threading.enumerate()])


	if type_id =="0d":
		print("-----FLOAT (MFM) DATA-----")
		# print("jjj---",j,type(j))
		IOA_no3 = find_IOA(i,16)
		# print("^^^^^^^^^^^^^^^^^^^^^^aaaaaaaaaa--",float_config[type_id])

		con=0
		final_dict_MFM={}

		for a in IOA_no3:
			print("aaaaaaaaaa--",a)

			key_compare = (find_config(a, float_config[type_id]))
			if key_compare !=None :
				key_compare=key_compare[0]
				print("key_compareeee-----",key_compare)	
				get_data=str(i)[28+con:36+con]
				# print("get_data--",get_data)
				
				final_float_value = float_value_calculation(get_data,a)
				final_dict_MFM[key_compare]=final_float_value
				con+=16

		# print("###-----final_dict_MFM----####",final_dict_MFM)
		# print("###-----final_dict_MFM----####",len(final_dict_MFM))
		# time.sleep(0.5)

		if type_id in final_dict:
			final_dict[type_id].update(final_dict_MFM)  	# Update the existing nested dictionary
		else:
			final_dict[type_id] = final_dict_MFM	
		# print("###-----final_dict----####",final_dict)
		return final_dict

		
	elif type_id =="24":
		print("-----FLOAT (MFM) DATA WITH TIME-----")

		if j>=24:
			IOA_no3 = find_IOA(i,16)
			final_dict_MFM={}
			con=0
			for a in IOA_no3:
				# print("aaaaaaaaaa--",a)
				key_compare = (find_config(a, float_config[type_id]))
				if key_compare !=None: 
					key_compare=key_compare[0]
					print("key_compare3-----",key_compare)	
					get_data=str(i)[28+con:36+con]
					# print("get_data--",get_data)
					time_data=str(i)[-14:]
					print("time_data--",time_data)

					final_float_value = float_value_calculation(get_data,a)
					cp56_to_datetime(time_data)
					final_dict_MFM[key_compare]=final_float_value
					print("-----final_dict_MFM----",final_dict_MFM)
					con+=16
			

		if type_id in final_dict:
			final_dict[type_id].update(final_dict_MFM)  	# Update the existing nested dictionary
		else:
			final_dict[type_id] = final_dict_MFM

		print("###-----final_dict----####",final_dict)

		return final_dict
		
	elif type_id =="1e":
		print("------DIGITAL IO DATA WITH TIME -----")
		print("ii---",i)
		if j>=24:
			IOA_nos = find_IOA(i,8)
			print("IOA_nos:", IOA_nos)
			final_digital_data_time = get_digital_data(i,IOA_nos,type_id)
			print("------final_digital_data_time------",final_digital_data_time)

			if type_id in final_dict:
				final_dict[type_id].update(final_digital_data_time)  	# Update the existing nested dictionary
			else:
				final_dict[type_id] = final_digital_data_time

			# print("###-----final_dict----####",final_dict)

		return final_dict
		
	elif type_id =="01":
		print("------DIGITAL IO DATA-------")
		if j>=24:
			IOA_nos = find_IOA(i,8)
			print("IOA_nos:", IOA_nos)
			# print("IOA_nos:", IOA_nos[0])
			# print("IOA_nos:", type(IOA_nos[0]))

			final_digital_data = get_digital_data(i,IOA_nos,type_id)
			print("------final_digital_data------", final_digital_data)

			if type_id in final_dict:
				final_dict[type_id].update(final_digital_data)  # Update the existing nested dictionary

			else:
				final_dict[type_id] = final_digital_data
			# print("###-----final_dict----####",final_dict)

		return final_dict
		
			
	elif type_id =="03":
		print("------DOUBLE POINT DATA -----")
		IOA_nos = find_IOA(i,8)
		print("IOA_nos:", IOA_nos)
		final_double_point_data = get_digital_data(i,IOA_nos,type_id)
		# print("------final_double_point_data------", final_double_point_data)

		if type_id in final_dict:
			final_dict[type_id].update(final_double_point_data)  # Update the existing nested dictionary
		else:
			final_dict[type_id] = final_double_point_data
			
		# print("###-----final_dict----####",final_dict)
		
		return final_dict


	elif type_id =="1f":
		print("------DOUBLE POINT DATA WITH TIME -----")

		IOA_nos = find_IOA(i,8)
		print("IOA_nos:", IOA_nos)
		final_double_point_data = get_digital_data(i,IOA_nos,type_id)
		# print("------final_double_point_data------", final_double_point_data)

		if type_id in final_dict:
			final_dict[type_id].update(final_double_point_data)  # Update the existing nested dictionary
		else:
			final_dict[type_id] = final_double_point_data
			
		# print("###-----final_dict----####",final_dict)
		
		return final_dict


	elif type_id =="0b":
		print("------MEASURED VALUE, SCALED VALUE -----")
		IOA_nos = find_IOA(i,16)
		print("IOA_nos--:", IOA_nos)
		con=0
		final_dict_scaled={}

		for a in IOA_nos:
			print("aaaaaaaaaa------",a)
			key_compare = (find_config(a, float_config[type_id]))
			if key_compare!=None and key_compare!=[]:
				key_compare=key_compare[0]
				print("key_compare3-----",key_compare)	
				if key_compare != None:
					get_data=str(i)[28+con:36+con]
					print("get_data--",get_data)

					final_scaled_value =int(get_data[:2], 16)
					final_dict_scaled[key_compare]=final_scaled_value
					con+=16

		# final_dict[type_id]=final_dict_scaled
		# print("###-----final_dict----####",final_dict)

		if type_id in final_dict:
			final_dict[type_id].update(final_dict_scaled)  # Update the existing nested dictionary

		else:
			final_dict[type_id] = final_dict_scaled	
		print("###-----final_dict----####",final_dict)

		return final_dict


	else:
		print("DATA TYPE IS NOT MATCHED...")
		# final_dict={}
		return {}


def send_command(hex_data):
	socket_conn_1.sendall(hex_data)
	print("send.........")

	msg_res = (socket_conn_1.recv(1024)) 
	# print("msg Event response::::", msg_res)

	recv_hex_data = msg_res.hex()
	# print("msg in hex format ::::", recv_hex_data)

	seperate_data = recv_hex_data.split('68')
	# print("seperate_data ::::",seperate_data)

	lenth_of_strings0 = {i:len(i)  for i in seperate_data}
	print("lenth_of_strings0  ::::",lenth_of_strings0)
	return seperate_data


###########get the data and bifurcate it in usefull format
def send_data_to_server(line):
	global socket_conn_1
	global socket_con_flag
	global final_result
	global final_dict
	global transformed_data
	global mfm_data

	final_dict={}

	try:
		if line!='' or line !=None:
			msg_res = line.strip()
			time.sleep(0.3)
			# print(msg_res)
			
			# recv_hex_data = msg_res.hex()
			# print("msg in hex format ::::", recv_hex_data)

			seperate_data = msg_res.split('68')
			# print("seperate_data ::::",seperate_data)

			# lenth_of_strings0 = {i:len(i)  for i in seperate_data}
			# print("lenth_of_strings0  ::::",lenth_of_strings0)

			for dt in seperate_data[1:]:
				# print("dt-------------",dt)
				
				# final_dict = get_data(dt)
				get_data(dt,final_dict)
				# print("final_dict1---+++++++----",final_dict)
				final_result.update(final_dict)

			print("^^^^^^^^^final_result^^^^^^^^^^^^^^^^^^",final_result)


			transformed_data={}
			
			mfm_data = final_result['0d']
			print("mfm_data---",mfm_data)
			# for sub_dict in mfm_data.values():
			for full_key, value in mfm_data.items():
				print("full_key,,,,,value------",full_key, value)
				# if value != None or full_key !=None :
				# 	prefix, sub_key = full_key.split('_', 1)
				# 	transformed_data.setdefault(prefix, {})[sub_key] = value

				if full_key is not None and value is not None:  # Ensure both key and value are not None
					try:
						prefix, sub_key = full_key[2:].split('_', 1)  # Split only if key is valid
						transformed_data.setdefault(prefix, {})[sub_key] = round(value,2)
					except ValueError as e:
						print(f"Error splitting key {full_key}: {e}")

			print("transformed_data:::::::::::::::::",transformed_data)


			for key,value in transformed_data.items():
				mfm_enter = MFM_data(				
					substationid ="1", 
					feederid = "10", 
					feedername = key, 
					feedercode = '1',
					received_datetime = timezone.now(), 
					feedertypeid = '0', 
					feedervoltageid = '0',
					feederlocationid = '0', 
					feedercategoryid = '0', 
					voltage_brphase = value.get('BR_VOLT'), 
					voltage_bphase =  value.get('B_VOLT'), 
					voltage_ryphase = value.get('RY_VOLT'), 
					voltage_rphase = value.get('R_VOLT'), 
					voltage_ybphase = value.get('YB_VOLT'), 
					voltage_yphase = value.get('Y_VOLT'), 
					current_bphase = value.get('B_CURR'),
					current_rphase = value.get('R_CURR'), 
					current_yphase = value.get('Y_CURR'), 
					frequency = value.get('FREQ'), 
					powerfactor = value.get('PF_AVG'), 
					active_power = value.get('ACTIVE_POWER_TOTAL'), 
					apparent_power = value.get('APPRANT_POWER'), 
					active_export = value.get('ACTIVE_EXPORT_ENERGY'), 
					active_import = value.get('ACTIVE_IMPORT_ENERGY'), 
					reactive_export = value.get('REACTIVE_EXPORT_ENERGY'), 
					reactive_import = value.get('REACTIVE_IMPORT_ENERGY'), 
					reactive_power = value.get('REACTIVE_POWER'), 
					lastupdateddatetime = timezone.now(), 
					systeminsertdatetime = '0', 
					oil_temprature = value.get('Oil_Temperature_T1'), 
					tap_position = '',
					winding_temprature = value.get('Winding_Temperature_T1'), 
					feederiddigit = '0'
				)
					
				mfm_enter.save()
				print("MFM DATA INSERTED SUCCESSFULLY.........")

			if mfm_data != {}:
				time.sleep(10)


	except Exception as e:
		print("error to send data to server",e)
		socket_con_flag = False
		time.sleep(1)
		# threading.Thread(target=create_socket).start()



#######get the data and compare the data for events
def get_data_event(seperate_data,final_dict1):
	# global final_dict
	# global final_dict1

	time.sleep(0.5)
	i=seperate_data
	# print("iii-------------",dt)
	type_id=i[10:12]
	print("type_id----------",type_id)
	# i=dt
	j=len(i)

	if type_id =="0d":
		print("-----FLOAT (MFM) DATA-----")
		# print("jjj---",j,type(j))
		IOA_no3 = find_IOA(i,16)

		con=0
		final_dict_event={}

		for a in IOA_no3:
			print("aaaaaaaaaa--",a)
			key_values = (find_config(a, float_config[type_id]))
			key_compare=key_values[0]
			print("key_compare4-----",key_compare)	
			get_data=str(i)[28+con:36+con]
			# print("get_data--",get_data)

			
			final_float_value = float_value_calculation(get_data,a)
			print("@@@@@@@@@@@@@@@@@@@@@@@@@@@final_float_value--",final_float_value)

			# final_dict_event[key_compare]=final_float_value
			low_alart=key_values[1][2]
			high_alart=key_values[1][3]
			print("@@@@@@@@@@@@@@@@@@@@@@@@@@@low_alart--",low_alart)
			print("@@@@@@@@@@@@@@@@@@@@@@@@@@@high_alart--",high_alart)
			if final_float_value !=None:
				if final_float_value<low_alart:
					print("----low alert generated----")
					final_dict_event[key_compare]=final_float_value
					con+=16

				elif final_float_value>high_alart:
					print("----high alert generated----")
					final_dict_event[key_compare]=final_float_value
					con+=16
				else:
					continue
			else:
				print("Final_float_value is None.")
	
		print("###-----final_dict_event----####",final_dict_event)
		# print("###-----final_dict_event----####",len(final_dict_event))
		time.sleep(0.5)

		if type_id in final_dict1:
			final_dict1[type_id].update(final_dict_event)  # Update the existing nested dictionary
		else:
			final_dict1[type_id] = final_dict_event	
		# print("###-----final_dict1----####",final_dict1)

		return final_dict1


	elif type_id =="24":
		print("-----FLOAT (MFM) DATA WITH TIME-----")

		if j>=24:
			IOA_no3 = find_IOA(i,16)
			final_dict_event={}
			con=0
			for a in IOA_no3:
				# print("aaaaaaaaaa--",a)
				key_values = (find_config(a, float_config[type_id]))
				key_compare=key_values[0]
				print("key_compare5-----",key_compare)
				get_data=str(i)[28+con:36+con]
				# print("get_data--",get_data)
				time_data=str(i)[-14:]
				print("time_data--",time_data)

				final_float_value = float_value_calculation(get_data,a)
				cp56_to_datetime(time_data)
				final_dict_event[key_compare]=final_float_value
				# print("-----final_dict_event----",final_dict_event)
				con+=16
			

		if type_id in final_dict1:
			final_dict1[type_id].update(final_dict_event)  # Update the existing nested dictionary
		else:
			final_dict1[type_id] = final_dict_event

		print("###-----final_dict1----####",final_dict1)

		return final_dict1
		
	elif type_id =="1e":
		print("------DIGITAL IO DATA WITH TIME -----")
		print("ii---",i)
		if j>=24:
			IOA_nos = find_IOA(i,8)
			print("IOA_nos:", IOA_nos)
			final_digital_data_time = get_digital_data(i,IOA_nos,type_id)
			print("------final_digital_data_time------",final_digital_data_time)

			time_data=str(i)[-14:]
			print("time_data--",time_data)
			cp56_to_datetime(time_data)

			if type_id in final_dict1:
				final_dict1[type_id].update(final_digital_data_time)  # Update the existing nested dictionary
			else:
				final_dict1[type_id] = final_digital_data_time

			# print("###-----final_dict1----####",final_dict1)

		return final_dict1
		
	elif type_id =="01":
		print("------DIGITAL IO DATA-------")
		if j>=24:
			IOA_nos = find_IOA(i,8)
			print("IOA_nos:", IOA_nos)
			# print("IOA_nos:", IOA_nos[0])
			# print("IOA_nos:", type(IOA_nos[0]))

			final_digital_data = get_digital_data(i,IOA_nos,type_id)
			print("------final_digital_data------", final_digital_data)

			if type_id in final_dict1:
				final_dict1[type_id].update(final_digital_data)  # Update the existing nested dictionary

			else:
				final_dict1[type_id] = final_digital_data
			# print("###-----final_dict1----####",final_dict1)

		return final_dict1
		
			
	elif type_id =="03":
		print("------DOUBLE POINT DATA -----")
		IOA_nos = find_IOA(i,8)
		print("IOA_nos:", IOA_nos)
		final_double_point_data = get_digital_data(i,IOA_nos,type_id)
		# print("------final_double_point_data------", final_double_point_data)

		if type_id in final_dict1:
			final_dict1[type_id].update(final_double_point_data)  # Update the existing nested dictionary
		else:
			final_dict1[type_id] = final_double_point_data
			
		# print("###-----final_dict1----####",final_dict1)
		
		return final_dict1


	elif type_id =="1f":
		print("------DOUBLE POINT DATA WITH TIME -----")
		IOA_nos = find_IOA(i,8)
		print("IOA_nos:", IOA_nos)
		final_double_point_data = get_digital_data(i,IOA_nos,type_id)
		# print("------final_double_point_data------", final_double_point_data)
		time_data=str(i)[-14:]
		print("time_data--",time_data)
		cp56_to_datetime(time_data)

		if type_id in final_dict1:
			final_dict1[type_id].update(final_double_point_data)  # Update the existing nested dictionary
		else:
			final_dict1[type_id] = final_double_point_data
			
		# print("###-----final_dict1----####",final_dict1)
		
		return final_dict1



	elif type_id =="0b":
		print("------MEASURED VALUE, SCALED VALUE -----")
		IOA_nos = find_IOA(i,16)
		print("IOA_nos--:", IOA_nos)
		con=0
		final_dict_scaled={}

		for a in IOA_nos:
			print("aaaaaaaaaa--",a)
			key_compare = (find_config(a, float_config[type_id]))[0]
			print("key_compare3-----",key_compare)	
			get_data=str(i)[28+con:36+con]
			print("get_data--",get_data)

			final_scaled_value =int(get_data[:2], 16)
			final_dict_scaled[key_compare]=final_scaled_value
			con+=16

		final_dict1[type_id]=final_dict_scaled
		return final_dict1

	else:
		print("DATA TYPE IS NOT MATCHED...")
		# final_dict={}
		return {}



###########get the data and bifurcate it in usefull format
def get_store_event(line):
	global socket_conn_1
	global socket_con_flag
	global final_result1
	global mfm_data

	final_dict1={}

	try:
		if line!='' or line !=None:
			msg_res = line.strip()
			time.sleep(0.3)
			# print(msg_res)
			
			# recv_hex_data = msg_res.hex()
			# print("msg in hex format ::::", recv_hex_data)

			seperate_data1 = msg_res.split('68')
			# print("seperate_data ::::",seperate_data)

			# lenth_of_strings = {i:len(i)  for i in seperate_data1}
			# print("lenth_of_strings0  ::::",lenth_of_strings0)

			for dt in seperate_data1[1:]:
				print("dt111-------------",dt)
				if dt[14:16]=='03':
					print("-----SPONTANEOUS DATA----")

				# final_dict1 = get_data_event(dt)
				get_data_event(dt,final_dict1)
				print("final_dict1111---+++++++----",final_dict1)
				final_result1.update(final_dict1)

			print("^^^^^^^^^final_result111^^^^^^^^^^^^^^^^^^",final_result1)


			if all(not value for value in final_result1.values()):
				print("Values are empty.")
			else:
				print("Values are not empty. Proceed with normal flow.")
				
				for outer_key, inner_dict in final_result1.items():
					# Iterating through the inner dictionary
					# print("$%%%%%%%",type(inner_dict))
					for key, value in inner_dict.items():
						print("^^^^",key.split('_'),value)
						# Create an Event_data instance
						event_enter = Event_data(
							substationid="1",
							feederid=outer_key,  # Use the outer key as feederid
							feedername=key.split('_')[0],  # Use the inner key as feedername
							feedercode='1',
							received_datetime=timezone.now(),
							parameter=key.split('_',1)[1],  # Use the inner key as the parameter
							parameter_value=value,  # Use the value as the parameter value
							lastupdateddatetime=timezone.now(),
							systeminsertdatetime=timezone.now(),
							feederiddigit='0'
						)
					
						event_enter.save()
						print("EVENT DATA INSERTED SUCCESSFULLY.........")


	except Exception as e:
		print("error to get event data- ",e)
		socket_con_flag = False
		# time.sleep(0.5)
		# threading.Thread(target=create_socket).start()

def main():

	# with open(f"{current_directory}"+"/test_data.txt", 'r') as file:
	with open(f"{current_directory}"+"/samadhan_data.txt", 'r') as file:

		# Loop through each line in the file
		try:
			for line in file:
				send_data_to_server(line)
		except Exception as e:
			print("Error in reading file",e)

					
def Event_Data():
	# with open(f"{current_directory}"+"/test_data_event.txt", 'r') as file:
	with open(f"{current_directory}"+"/samadhan_event_data.txt", 'r') as file:

		# Loop through each line in the file
		try:
			for line in file:
				time.sleep(1)
				
				# print("line-----",line[16:18],type(line))
				if line[16:18]=='03':
					get_store_event(line)
		except Exception as e:
			print("Error in reading file",e)


def RTU_readings():
	global RTU_readings_Data

	RTU_readings_Data = "as"
	print("RTU_readings_Data is ;;; ",RTU_readings_Data)


def Login(request):
	global ip_path
	global super_user

	ip_path = 'Login'
	return render(request, 'Login.html')


def sld_data():
	global final_data
	global final_result
	global transformed_data

	while True:
		time.sleep(1)

		if transformed_data !={}:
			# print("^^^^^^^^^^666666666666666666666666666666666666666666",transformed_data)

			try:
				
				# converted_data = [{"titlename": key, **value} for key, value in transformed_data.items()]
				# converted_data = [{"titlename": key, **value,"status":"on","titlesidetext":key} for key, value in transformed_data.items()]
				# print("converted_data--------------",converted_data)

				final_data_result = {}

				for key, value in transformed_data.items():
					
					if key.startswith("TRANSFORMER"):
						category = "transformer_data"
					elif key.startswith("INCOMER") and key != "INCOMER":
						category = "incomer11_data"
					elif "SOLARINCOMER" in key:
						category = "solarincomer"
					elif "DCMETER" in key:
						category = "dcmeter"
					elif key =="INCOMER":
						category = "incomer33_data"
					else:
						category = "feeder"

					if category not in final_data_result:
						final_data_result[category] = []
						# print("final_data_result-----111333444",final_data_result)

					entry = value.copy()
					entry['titlename'] = key  
					final_data_result[category].append(entry)
				
				# print("final_data_result----",final_data_result)
				# final_data=json.dumps(final_data_result)
				final_data = final_data_result
					
				
			except Exception as e:
				print("error on sld data--",e)
							
		print("********final  *****",final_data)
		print("********final  *****",type(final_data))


def get_sld_data():
	global final_data
	try:
		f = open(txt_file_path +'SLD_1.txt',"r")
		# SLD_1 = f.read()
		final_data = f.read()
		print("SLD_1 -- ",final_data)
		print("SLD_1 -- ",type(final_data))
		f.close()

	except Exception as e:
		# print("SLD Error ::: ",e)
		pass
		

# def Home(request):
# 	global ip_path
# 	global SLD_1
# 	global final_data
# 	global super_user
# 	global User_name

# 	ip_path = 'Home'
# 	print("ip_path --",ip_path)
# 	# print("RTU_readings_Data :::: 2 ",RTU_readings_Data)
# 	RTU_readings()
# 	Title = 'Khargar Sec - 2'

# 	get_sld_data()
# 	# threading.Thread(target=sld_data).start()

# 	if not any(t.name == "sld_data" for t in threading.enumerate()):
# 		thread3 = threading.Thread(target=sld_data, daemon=True, name="sld_data")
# 		thread3.start()

# 	# print("final_dataaaaaaa--------*********----",final_data)
# 	# print("final_dataaaaaaa--------*********----",type(final_data))

# 	context={
# 		'RTU_readings_Data':RTU_readings_Data,
# 		'User_name':User_name,
# 		'Title':Title,
# 		'SLD_1':final_data,
# 		'super_user':super_user,
# 		# 'SLD_1':SLD_1,
# 		# 'SLD_2':SLD_2,
# 		}

# 	# RTU_readings()
# 	return render(request, 'Home.html', context=context)



def Home(request):
	global ip_path
	global final_data
	global transformed_data_flag
	global demo_SLD2_data_variable


	ip_path = 'Home'
	print("ip_path --",ip_path)
	print("RTU_readings_Data :::: 2 ",RTU_readings_Data)
	RTU_readings()
	Title = 'Khargar Sec - 2'

	with open(txt_file_path + "SLD_2.txt", "r") as file:
		demo_SLD2_data_variable = json.load(file)  

	print("demo_SLD2_data_variable::::",demo_SLD2_data_variable)

	if not any(t.name == "sld_data" for t in threading.enumerate()):
		thread3 = threading.Thread(target=sld_data, daemon=True, name="sld_data")
		thread3.start()
	# print("HOME final_data--------*********----",final_data)

	context={
		'RTU_readings_Data':RTU_readings_Data,
		'User':'User_name',
		'transformed_data_flag':transformed_data_flag,
		'Title':Title,
		'demo_SLD2_data_variable':demo_SLD2_data_variable,
		'SLD_1':final_data
		}
		
	# RTU_readings()
	return render(request, 'Home.html', context=context)



def fetch_data(request):

	return JsonResponse({
		'final_data': final_data,
		# 'final_data2': final_data2,
	})


def Base(request):
	global ip_path
	global RTU_readings_Data
	global super_user
	global User_name

	ip_path = 'Base'
	context={		
		'super_user':super_user,
		'User_name':User_name,
		}
	print("ip_path --",ip_path)


	# template = loader.get_template('Base.html')
	# return HttpResponse(template.render())
	return render(request, 'Base.html', context=context)
	
def Events(request):
	global ip_path
	global super_user
	global User_name

	ip_path = 'Events'
	print("ip_path --",ip_path)
	# event_datas = Event_data.objects.all()[:15]
	event_data = Event_data.objects.filter(acknowledge=True).order_by('-systeminsertdatetime')[:15]
	print("event_datas-----",event_data)
	print("event_datas length-----",len(event_data))


	context={		
		'super_user':super_user,
		'User_name':User_name,
		'event_data':event_data,
		}

	return render(request, 'Events.html', context=context)
	
def Alarms(request):
	global ip_path
	global super_user
	global User_name
	global event_data

	ip_path = 'Alarms'
	print("ip_path --",ip_path)

	# event_data = Event_data.objects.all()[:15]
	# event_data = Event_data.objects.filter(acknowledge=False)[:15]
	event_data = Event_data.objects.filter(acknowledge=False).order_by('-systeminsertdatetime')[:15]

	
	print("event_datas-----",event_data)
	print("event_datas length-----",len(event_data))

	context={		
		'super_user':super_user,
		'User_name':User_name,
		'events' : event_data,
		}

	return render(request, 'Alarms.html', context=context)
	
def Graphs(request):
	global ip_path
	global super_user
	global User_name

	ip_path = 'Graphs'
	print("ip_path --",ip_path)
	context={		
		'super_user':super_user,
		'User_name':User_name,
		}

	return render(request, 'Graphs.html', context=context)

def Feeders(request):
	global ip_path
	global super_user
	global User_name

	ip_path = 'Feeders'
	print("ip_path --",ip_path)
	context={		
		'super_user':super_user,
		'User_name':User_name,
		}

	return render(request, 'Feeders.html', context=context)



data_in_time_range_list=[]
fields_to_retrieve =[]


def Reports(request):
	global ip_path
	global super_user
	global User_name
	global data_in_time_range_list
	global fields_to_retrieve


	ip_path = 'Reports'
	print("ip_path --",ip_path)
	# print("data_in_time_range_list_-----------------------##########33333333",data_in_time_range_list)
	print("fields_to_retrieve-----------------------##########33333333",fields_to_retrieve)
	print("fields_to_retrieve-----------------------##########33333333",type(fields_to_retrieve))

	feder_values = MFM_data.objects.values_list('feedername', flat=True).distinct()
	print("feder_values-----",feder_values)

	
	context={		
		'super_user':super_user,
		'User_name':User_name,
		'data': data_in_time_range_list,
		'fields_to_retrieve': json.dumps(fields_to_retrieve),
		'feder_values': feder_values
		}

	return render(request, 'Reports.html', context=context)

	
def Repots_Metering(request):
	global ip_path
	global super_user
	global User_name

	ip_path = 'Repots_Metering'
	print("ip_path --",ip_path)

	return render(request, 'Repots_Metering.html')
	

def Reports_SoE(request):
	global ip_path
	global super_user
	global User_name

	ip_path = 'Reports_SoE'
	print("ip_path --",ip_path)

	return render(request, 'Reports_SoE.html')
	
def Settings(request):
	global ip_path
	global super_user
	global User_name

	ip_path = 'Settings'
	print("ip_path --",ip_path)

	context={		
		'super_user':super_user,
		'User_name':User_name,
		}

	return render(request, 'Settings.html', context=context)
	

def Authentication(request):
	global ip_path
	global super_user
	global User_name

	ip_path = 'Authentication'
	print("ip_path --",ip_path)
	if request.method == 'POST':
		# print("request.POST --- ", request.POST)

		# Dynamically create variables from POST data
		for key, value in request.POST.items():
			if request.POST['Username'] == "admin" and request.POST['Password'] == "admin":		
				super_user = 1
			else:
				super_user = 0
			User_name = request.POST['Username']

		# print("***********************************************")
		# print("User_name --",User_name )

		return redirect('/Home/')

	
def RTU_Status(request):
	global ip_path
	global super_user
	global User_name

	ip_path = 'RTU_Status'
	print("ip_path --",ip_path)
	
	context = {
	# 'data_result_voltage':data_result_voltage,
	# 'data_result_current':data_result_current,
	# 'data_result_ampere':data_result_ampere,
	# 'sum_list_current':sum_list_current,
	'super_user':super_user,
	'User_name':User_name,
	}
	
	return render(request, 'RTU_Status.html',context)




@csrf_exempt
def Button_event(request):
	global data_in_time_range_list
	global fields_to_retrieve
	global event_data
	global final_result1

	if request.method == 'POST':
		print("*****&&&&&&&&&&&**********",request.POST)
		print("*****&&&&&&&&&&&**********",request.POST.getlist('selected_events'))
			
		# if (request.POST.get('start_date')!=''):
		if (request.POST.get('start_date')):
				

			# Default value in case there's no data or GET request
			start_time = datetime(2024, 11, 16, 10, 0, 0)  # Replace with your desired start time
			print("start_time-------",start_time,type(start_time))
			end_time = datetime(2024, 11, 18, 15, 0, 0)  

			if request.method == "POST":
				start_date = request.POST.get('start_date')
				end_date = request.POST.get('end_date')
				feedername = request.POST.get('feeder')
				selected_parameters = request.POST.getlist('feeder_parameter')

				print("start_date--",start_date)
				print("end_date--",end_date)
				print("feedername--",feedername)
				print("selected_parameters--",selected_parameters)
				fields_to_retrieve = ['received_datetime', 'feedername'] + selected_parameters

				if start_date:
					start_time = datetime.strptime(start_date, "%Y-%m-%d")
					start_time = start_time.replace(hour=0, minute=0, second=0)  # Set default time
				else:
					start_time = None 

				if end_date:
					end_time = datetime.strptime(end_date, "%Y-%m-%d")
					end_time = end_time.replace(hour=0, minute=0, second=0)  # Set default time
				else:
					end_time = None  # or set to a default value if needed

			try:
				# data_in_time_range = MFM_data.objects.filter(received_datetime__range=(start_time, end_time),feedername=feedername).values('received_datetime','feedername','voltage_ryphase')
				data_in_time_range = MFM_data.objects.filter(received_datetime__range=(start_time, end_time),feedername=feedername).values(*fields_to_retrieve)

				# print("data_in_time_range---", data_in_time_range)
				print("data_in_time_range---", len(data_in_time_range))
				# print("data_in_time_range---", type(data_in_time_range))
			

				# print("data_in_time_range---", data_in_time_range_list)
				# print("data_in_time_range---", type(data_in_time_range_list))

				serializer = MFMdataSerializer(data_in_time_range, many=True)
				serialized_data = serializer.data  # Serialized data as a list of dictionaries
				# print("serialized_data---------",serialized_data)
				
				# Optional: Convert to JSON if using in JavaScript context
				data_in_time_range_list = JSONRenderer().render(serialized_data).decode('utf-8')
				# print("data_in_time_range---", data_in_time_range_list)
				# print("data_in_time_range---", type(data_in_time_range_list))
			
			except Exception as e:
				context = {
					'error': str(e),
				}
				print(f"Error occurred: {e}")

		# elif 'incomingLines' in request.POST:

		# elif request.POST.get('incomingLines') !='' :
		elif request.POST.get('incomingLines'):

			print("*****&&&&&&&&&&&**********",request.POST)

			post_data = request.POST.copy()  # Make a copy to manipulate

			# Remove CSRF token
			post_data.pop("csrfmiddlewaretoken", None)

			# Extract values
			incomingLineCount = int(post_data.get("incomingLines", 0))
			transformerCount = int(post_data.get("transformers", 0))
			solarCount = int(post_data.get("solarConnections", 0))
			solarPosition = [post_data.get("solarPosition", "").lower()]

			# Extract incoming line details
			incomingLineAssignments = [0] * transformerCount  # Assuming all transformers assigned to the same incoming line
			incLineStatus = ["on"] * incomingLineCount
			incCBStatus = ["on"] * incomingLineCount
			mainBusLineCouplerStatus = ["off"]

			# Extract transformer data
			transformerFeederCounts = []
			feederNames = []
			feederCBStatus = []

			for t in range(1, transformerCount + 1):
				print('ttttttttttt-----',t)
				feeder_count = int(post_data.get(f"transformer_{t}_outgoingFeeders", 0))
				transformerFeederCounts.append(feeder_count)

				feeders = []
				feeder_cb_status = []
				
				for f in range(1, feeder_count + 1):
					print("ffffffffffff---",f)
					# feeder_name = post_data.get(f"transformer_{t}feeder{f}", f"Feeder {f}")
					feeder_name = post_data.get(f"transformer_{t}_feeder_{f}",f"Feeder {f}")

					feeders.append({"feederName": feeder_name})
					print("feeders-------",feeders)
					
					# Assign dummy CB statuses (You can update based on actual data)
					cb_status = ["on", "off", "error"][f % 3]  
					feeder_cb_status.append(cb_status)

				feederNames.append(feeders)
				feederCBStatus.append(feeder_cb_status)

			# Solar details
			solarNames = [["Solar A"]] if solarCount > 0 else []
			solarIncomingLineStatus = ["off"]
			solarCBStatus = ["error"]

			# Transformer CB Statuses
			trfTopCBStatus = ["on"] * transformerCount
			trfBottomCBStatus = ["on", "off", "on"][:transformerCount]  # Adjusted based on count

			# Bus coupler statuses
			subBusLineCouplerStatus = ["off", "on"] if transformerCount > 1 else ["off"]

			# Create final dictionary
			data_dict = {
				"incomingLineCount": incomingLineCount,
				"incLineStatus": incLineStatus,
				"incCBStatus": incCBStatus,
				"mainBusLineCouplerStatus": [""] + mainBusLineCouplerStatus if mainBusLineCouplerStatus else [""],
				"transformerVoltageLineStatus": ["on"] * transformerCount,
				"transformerCount": transformerCount,
				"transformerFeederCounts": transformerFeederCounts,
				"feederNames": feederNames,
				"solarCount": solarCount,
				"solarPosition": solarPosition,
				"solarNames": solarNames,
				"feederCBStatus": feederCBStatus,
				"incomingLineAssignments": incomingLineAssignments,
				"trfTopCBStatus": trfTopCBStatus,
				"trfBottomCBStatus": trfBottomCBStatus,
				"solarIncomingLineStatus": solarIncomingLineStatus,
				"solarCBStatus": solarCBStatus,
				"subBusLineCouplerStatus": (["off"] * (transformerCount - 1)) + ["" if transformerCount > 0 else "off"]
			}
			print("data_dict-------",data_dict)


			# Write to a .txt file in JSON format
			with open(txt_file_path + "SLD_2.txt", "w") as file:
				json.dump(data_dict, file, indent=4)

			print("Data successfully written to output_data.txt")


		############ User login #############
		if (ip_path == 'Home'):
			# return render(request, 'Home.html')
			return redirect('/Home/')
		
		elif (ip_path == 'Events'):
			return redirect('/Events/')	
		
		elif (ip_path == 'Alarms'):
				
			selected_events = request.POST.getlist('selected_events')  # ✅ Get selected events
			print("Received Selected Events:", selected_events)  # Debugging

			if not selected_events or all(e == '' for e in selected_events):
				return JsonResponse({"message": "No valid events selected!"}, status=400)
		
		
			print("event_data-----",event_data)

			for i in range(len(selected_events)):
				# print("****---",event_data[int(i)])
				print("****---",event_data[int(i)].pk)
				# print("****---",event_data[int(i)].received_datetime)

				# print("&&&&&&&&&&&&&")
			
				Event_data.objects.filter(srno=event_data[int(i)].pk).update(acknowledge=True, lastupdateddatetime=timezone.now())
				print("----EVENT DATA UPDATED SUCCESSFULLY.........")

			return redirect('/Home/') 		 # Make sure 'home' is defined in `urls.py`

		
		elif (ip_path == 'Graphs'):
			return redirect('/Graphs/')
		elif (ip_path == 'Feeders'):
			return redirect('/Feeders/')		
		elif (ip_path == 'Reports'):
			return redirect('/Reports/')
		elif (ip_path == 'Repots_Metering'):
			return redirect('/Repots_Metering/')
		elif (ip_path == 'Reports_SoE'):
			return redirect('/Reports_SoE/')
		elif (ip_path == 'RTU_Status'):
			return redirect('/RTU_Status/')
		elif (ip_path == 'RTU_readings'):
			return redirect('/RTU_readings/')
		elif (ip_path == ''):
			return redirect('/Login/')
		else:
			return redirect('/Home/')




try:
	socket_con_flag = False
	# threading.Thread(target=create_socket).start()
	# thread1 = threading.Thread(target=main, name='main')
	# thread2 = threading.Thread(target=Event_Data, name='Event_Data')

	# if not any(t.name == "create_socket" for t in threading.enumerate()):
	# 	thread1 = threading.Thread(target=create_socket, daemon=True, name="create_socket")
	# 	thread1.start()

	if not any(t.name == "main" for t in threading.enumerate()):
		thread1 = threading.Thread(target=main, daemon=True, name="main")
		thread1.start()

	if not any(t.name == "Event_Data" for t in threading.enumerate()):
		thread2 = threading.Thread(target=Event_Data, daemon=True, name="Event_Data")
		thread2.start()

except KeyboardInterrupt:
	print('Keyboard Interrupted')
	os._exit(130)
