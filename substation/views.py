from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseBadRequest,HttpResponseRedirect
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.contrib import messages
import threading
import time
import paho.mqtt.client as mqtt
import psycopg2
import json
import sys
import os

# Create your views here.
from django.http import HttpResponse
# import ezdxf

# import pythoncom
# import os
# from pyautocad import Autocad

dwg_file = "/home/purvesh/LDMS/substation/static/img/Diagrama unifilar00.dwg"
txt_file_path = "/home/purvesh/LDMS/substation/SLD/"
database_name = 'ldms'

ip_path = ''
RTU_readings_Data = ''

SLD_1 = ''
SLD_2 = ''


print("RTU_readings_Data :: 1 ",RTU_readings_Data)
########################## This Function will be called when to insert data into the Database ###########################
def WriteToDatabase(sql1,*args):

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
			print("error in WriteToDatabase(): ",exc_type, fname, exc_tb.tb_lineno)
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
	
	counter = 0 # for trying atleast five times in case of failure.

	while True:
		try:
			conn = psycopg2.connect(database=database_name, user="postgres", password="postgres", host="localhost", port="5432")  # This will connect to the database.
			cur = conn.cursor()
			cur.execute(querry)  # Execute the querry.
			result = cur.fetchall() # read data from database.
			conn.close()
			break
		except Exception as e:
			exc_type, exc_obj, exc_tb = sys.exc_info()
			fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
			print("error in ReadDatabase() :",exc_type, fname, exc_tb.tb_lineno)
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


def RTU_readings():
	global RTU_readings_Data

	RTU_readings_Data = "as"
	print("RTU_readings_Data is ;;; ",RTU_readings_Data)


def Login(request):
	global ip_path

	ip_path = 'Login'

	return render(request, 'Login.html')


def Home(request):
	global ip_path

	ip_path = 'Home'
	print("ip_path --",ip_path)
	print("RTU_readings_Data :::: 2 ",RTU_readings_Data)
	RTU_readings()
	Title = 'Khargar Sec - 2'
	SLD_1 = ''
	SLD_2 = ''

	try:
		f = open(txt_file_path +'SLD_1.txt',"r")
		SLD_1 = f.read()
		print("SLD_1 -- ",SLD_1)
		f.close()
		f = open(txt_file_path +'SLD_2.txt',"r")
		SLD_2 = f.read()
		print("SLD_2 -- ",SLD_2)
		f.close()

		print("#######", SLD_1)

	except Exception as e:
		print("SLD Error ::: ",e)
		pass


	context={
		'RTU_readings_Data':RTU_readings_Data,
		'User':'User_name',
		'Title':Title,
		'SLD_1':SLD_1,
		'SLD_2':SLD_2,
		}
	# RTU_readings()
	# print("-------")
	# return redirect('redirection_func')
	return render(request, 'Home.html', context=context)

def Base(request):
	global ip_path
	global RTU_readings_Data

	ip_path = 'Base'
	print("ip_path --",ip_path)


	# template = loader.get_template('Base.html')
	# return HttpResponse(template.render())
	return render(request, 'Base.html')
	
def Events(request):
	global ip_path

	ip_path = 'Events'
	print("ip_path --",ip_path)

	return render(request, 'Events.html')
	
def Alarms(request):
	global ip_path

	ip_path = 'Alarms'
	print("ip_path --",ip_path)

	return render(request, 'Alarms.html')
	
def Graphs(request):
	global ip_path

	ip_path = 'Graphs'
	print("ip_path --",ip_path)

	return render(request, 'Graphs.html')

def Feeders(request):
	global ip_path

	ip_path = 'Feeders'
	print("ip_path --",ip_path)

	return render(request, 'Feeders.html')
	
def Reports(request):
	global ip_path

	ip_path = 'Reports'
	print("ip_path --",ip_path)

	return render(request, 'Reports.html')
	
def Repots_Metering(request):
	global ip_path

	ip_path = 'Repots_Metering'
	print("ip_path --",ip_path)

	return render(request, 'Repots_Metering.html')
	
def Reports_SoE(request):
	global ip_path

	ip_path = 'Reports_SoE'
	print("ip_path --",ip_path)

	return render(request, 'Reports_SoE.html')
	
def Settings(request):
	global ip_path

	ip_path = 'Settings'
	print("ip_path --",ip_path)

	return render(request, 'Settings.html')
	
def Authentication(request):
	global ip_path

	ip_path = 'Authentication'
	print("ip_path --",ip_path)
	if request.method == 'POST':
		print("request.POST --- ", request.POST)

		# Dynamically create variables from POST data
		for key, value in request.POST.items():
			if key == 'Username':		
				request.POST['Username']
				request.POST['Password']
				
		print("***********************************************")
		
		print("request.POST['username'] --",request.POST['Username'] )
		print("request.POST['Password'] --",request.POST['Password'] )
		return redirect('/Home/')

	
def RTU_Status(request):
	global ip_path

	ip_path = 'RTU_Status'
	print("ip_path --",ip_path)


	Q = "SELECT * FROM ldms.voltagereadings"
	result = ReadDatabase(Q)
	# print("result :::: ",result)
	data_result_voltage = []
	data_result_current = []
	data_result_ampere = []
	for i in result:
		print("------------------->",i)
		# print("------------------->",type(i[2]))
		# print("------------------->",i[3])
		data_result_voltage.append(i[2])
		data_result_current.append(i[3])
		data_result_ampere.append(i[4])

	# New list to store sums
	sum_list_current = []

	# Summing every 30 items and storing the result
	for i in range(0, len(data_result_current), 60):
		sum_list_current.append(sum(data_result_current[i:i + 60]))

	# print("sum_list_current : ",sum_list_current)


		# print("i ::::: ",i)
	# print("data_result_current::::: list",data_result_current)
	# print("data_result_voltage::::: list",data_result_voltage)
	
	context = {
	'data_result_voltage':data_result_voltage,
	'data_result_current':data_result_current,
	'data_result_ampere':data_result_ampere,
	'sum_list_current':sum_list_current,
	}

	return render(request, 'RTU_Status.html',context)




@csrf_exempt
def Button_event(request):
	ip_path = 'Button_event'

	if request.method == 'POST':
		# Dynamically create variables from POST data
		for key, value in request.POST.items():
			# Skip 'csrfmiddlewaretoken'
			if key == 'csrfmiddlewaretoken':
				continue

			# Convert the list value to its first element and create a variable
			globals()[key] = value

		# Print all dynamically created variables to verify
		for key in request.POST.keys():
			if key == 'csrfmiddlewaretoken':
				continue

			print(f"{key}: {globals()[key]}")

		# Extract number of incoming lines and transformers
		incoming_lines = int(globals().get('incomingLines', 0))
		transformers_ = int(globals().get('transformers', 0))

		# Initialize js_data
		js_data = []
		for i in range(1, incoming_lines + 1):
			incoming_line_title = globals().get(f'incoming_line_title_{i}', f'33 kV INCOMER LINE {i}')
			js_data.append({
				'titlename': incoming_line_title,
				'attr1name': 'MVA',
				'attr1val': '0.45',
				'attr2name': 'VLL',
				'attr2val': ' K',
				'attr3name': 'I',
				'attr3val': '1.28',
				'attr4name': 'Iy',
				'attr4val': '1.28',
				'attr5name': 'Ib',
				'attr5val': '1.28',
				'attr6name': 'PF',
				'attr6val': '-',
				'titlesidetext': 'Transformer' if i % 2 == 1 else 'Purvesh',
				'status': 'on' if i % 2 == 1 else 'off',
			})

		# Initialize middledata using user-provided titles for transformers and outgoing feeders
		middledata = []
		for i in range(1, transformers_ + 1):
			transformer_title = globals().get(f'transformer_title_{i}', f'TRANSFORMER-{i}')
			outgoing_feeders = int(globals().get(f'transformer_{i}_outgoingFeeders', 0))

			transporter_data = [
				{
					'titlename': globals().get(f'transformer_{i}_outgoingFeeder_{j}_title', f'FEEDER {j}'),
					'attr1name': 'MVA',
					'attr1val': '2.48',
					'attr2name': 'VLL',
					'attr2val': ' K',
					'attr3name': 'I',
					'attr3val': '2.48',
					'attr4name': 'Iy',
					'attr4val': '2.48',
					'attr5name': 'Ib',
					'attr5val': '2.48',
					'attr6name': 'PF',
					'attr6val': '-',
					'titlesidetext': 'Transformer',
					'status': 'on',
					'attributecenter': f'11kV IN{i-1}'
				}
				for j in range(1, outgoing_feeders + 1)
			]

			middledata.append({
				'titlename': transformer_title,
				'attr1name': 'MVA',
				'attr1val': '28.00',
				'attr2name': 'VLL',
				'attr2val': ' K',
				'attr3name': 'I',
				'attr3val': '28.00',
				'attr4name': 'Iy',
				'attr4val': '28.00',
				'attr5name': 'Ib',
				'attr5val': '28.00',
				'attr6name': 'PF',
				'attr6val': '-',
				'titlesidetext': f'{transformer_title} 33/11 KV 10MVA',
				'status': 'on' if i % 2 == 1 else 'off',
				'statustransporter': 'off' if i % 2 == 1 else 'on',
				'attr7name': 'MVA',
				'attr7val': '28.00',
				'attr8name': 'VLL',
				'attr8val': ' K',
				'attr9name': 'I',
				'attr9val': '28.00',
				'attr10name': 'Iy',
				'attr10val': '28.00',
				'attr11name': 'Ib',
				'attr11val': '28.00',
				'attr12name': 'PF',
				'attr12val': '-',
				'attr13name': 'OLTC',
				'attr13val': '1',
				'attr14name': 'OTI',
				'attr14val': '56' if i % 2 == 1 else '28',
				'attr15name': 'WTI',
				'attr15val': '0',
				'attributeleft': f'11kV IN{i-1}',
				'transpoterdata': transporter_data
			})

		# Print data for verification
		print("js_data::::::::::", js_data)
		print("middledata::::::::::", middledata)

		# Continue processing as needed (e.g., render template, return response, etc.)

	# Render your template as needed


		file = open(txt_file_path + "SLD_1.txt", 'w')
		file.write(str(js_data))
		file.close()
		file = open(txt_file_path + "SLD_2.txt", 'w')
		file.write(str(middledata))
		file.close()

		print("************************************")


		############ User login #############

		


		if (ip_path == 'Home'):
			# return render(request, 'Home.html')
			return redirect('/Home/')
		elif (ip_path == 'Events'):
			return redirect('/Events/')
		elif (ip_path == 'Alarms'):
			return redirect('/Alarms/')
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

	return render(request, 'Login.html')
