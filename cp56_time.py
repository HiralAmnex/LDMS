# class CP56Time2a:
#     def __init__(self, *args):
#         self.dataset = [0] * 13
#         self.octetset = [0] * 7
#         self.invalidity = 0

#         if len(args) == 0:
#             self.init_from_current_time()
#         elif len(args) == 7:
#             self.init_from_octets(*args)
#         else:
#             raise ValueError("Invalid number of arguments")

#     def init_from_octets(self, octet1, octet2, octet3, octet4, octet5, octet6, octet7):
#         self.octetset[0] = octet1
#         self.octetset[1] = octet2
#         self.octetset[2] = octet3
#         self.octetset[3] = octet4
#         self.octetset[4] = octet5
#         self.octetset[5] = octet6
#         self.octetset[6] = octet7
#         self.decode()

#     def decode(self):
#         self.dataset[0] = self.octetset[0] | (self.octetset[1] << 8)
#         self.dataset[1] = self.octetset[2] & 0x3F
#         self.dataset[2] = bool((self.octetset[2] & 0x40) >> 6)
#         self.dataset[3] = bool((self.octetset[2] & 0x80) >> 7)
#         self.dataset[4] = self.octetset[3] & 0x1F
#         self.dataset[5] = (self.octetset[3] & 0x60) >> 5
#         self.dataset[6] = bool((self.octetset[3] & 0x80) >> 7)
#         self.dataset[7] = self.octetset[4] & 0x1F
#         self.dataset[8] = (self.octetset[4] & 0xE0) >> 5
#         self.dataset[9] = self.octetset[5] & 0x0F
#         self.dataset[10] = (self.octetset[5] & 0xF0) >> 4
#         self.dataset[11] = self.octetset[6] & 0x7F
#         self.dataset[12] = bool((self.octetset[6] & 0x80) >> 7)
#         self.invalidity = (1 if self.dataset[3] else 0) << 1
#         if self.invalidity != 0:
#             self.invalidity |= 2

#     def code(self):
#         self.octetset[0] = self.dataset[0] & 0xFF
#         self.octetset[1] = (self.dataset[0] & 0xFF00) >> 8
#         self.octetset[2] = self.dataset[1]
#         self.octetset[3] = self.dataset[4] | (1 if self.dataset[6] else 0) << 7
#         self.octetset[4] = self.dataset[7] | self.dataset[8] << 5
#         self.octetset[5] = self.dataset[9] | self.dataset[10] << 4
#         self.octetset[6] = self.dataset[11]

#     def init_from_current_time(self):
#         from datetime import datetime
#         now = datetime.now()

#         self.dataset[0] = now.microsecond // 1000 + 1000 * now.second
#         self.dataset[1] = now.minute
#         self.dataset[2] = False
#         self.dataset[3] = False
#         self.dataset[4] = now.hour
#         self.dataset[5] = False
#         self.dataset[6] = True
#         self.dataset[7] = now.day
#         self.dataset[8] = now.weekday()
#         self.dataset[9] = now.month
#         self.dataset[10] = 0x00

#         year = now.year % 100
#         self.dataset[11] = year
#         self.dataset[12] = False
#         self.code()
#         print(self.dataset[0] ,self.dataset[1] )
  

# cp56_time1 = CP56Time2a(0x15, 0x34, 0x23, 0x12, 0x01, 0x02, 0x03)
# print("Decoded dataset with specific octet values:")
# print(cp56_time1.init_from_octets)







import pytz
from datetime import datetime, timedelta

class InformationElement:
    def __init__(self, octet_length, dataset_length):
        self.octetset = [0] * octet_length
        self.dataset = [None] * dataset_length
        self.invalidity = 0

class CP56Time2a(InformationElement):
    def __init__(self, octet1=None, octet2=None, octet3=None, octet4=None, octet5=None, octet6=None, octet7=None):
        super().__init__(7, 13)
        if octet1 is not None:
            self.octetset[0] = octet1
            self.octetset[1] = octet2
            self.octetset[2] = octet3
            self.octetset[3] = octet4
            self.octetset[4] = octet5
            self.octetset[5] = octet6
            self.octetset[6] = octet7
            self.decode()
        else:
            self.initialize_with_current_time()

    def decode(self):
        self.dataset[0] = self.octetset[0] | (self.octetset[1] << 8)
        self.dataset[1] = self.octetset[2] & 0x3F
        self.dataset[2] = (self.octetset[2] & 0x40) >> 6 == 1
        self.dataset[3] = (self.octetset[2] & 0x80) >> 7 == 1
        self.dataset[4] = self.octetset[3] & 0x1F
        self.dataset[5] = (self.octetset[3] & 0x60) >> 5
        self.dataset[6] = (self.octetset[3] & 0x80) >> 7 == 1
        self.dataset[7] = self.octetset[4] & 0x1F
        self.dataset[8] = (self.octetset[4] & 0xE0) >> 5
        self.dataset[9] = self.octetset[5] & 0x0F
        self.dataset[10] = (self.octetset[5] & 0xF0) >> 4
        self.dataset[11] = self.octetset[6] & 0x7F
        self.dataset[12] = (self.octetset[6] & 0x80) >> 7 == 1
        self.invalidity = ((1 if self.dataset[3] else 0) << 1)
        if self.invalidity != 0:
            self.invalidity |= 2

    def code(self):
        self.octetset[0] = self.dataset[0] & 0xFF
        self.octetset[1] = (self.dataset[0] & 0xFF00) >> 8
        self.octetset[2] = self.dataset[1]
        self.octetset[3] = self.dataset[4] | ((1 if self.dataset[6] else 0) << 7)
        self.octetset[4] = self.dataset[7] | (self.dataset[8] << 5)
        self.octetset[5] = self.dataset[9] | (self.dataset[10] << 4)
        self.octetset[6] = self.dataset[11]

    def initialize_with_current_time(self):
        now = datetime.now()
        self.dataset[0] = now.microsecond // 1000 + 1000 * now.second
        self.dataset[1] = now.minute
        self.dataset[2] = False
        self.dataset[3] = False
        self.dataset[4] = now.hour
        self.dataset[5] = False
        self.dataset[6] = True
        self.dataset[7] = now.day
        self.dataset[8] = now.weekday()
        self.dataset[9] = now.month
        self.dataset[10] = 0x00
        year = now.year % 100
        self.dataset[11] = year
        self.dataset[12] = False
        self.code()
    def to_datetime(self):
        milliseconds = self.dataset[0]
        seconds = milliseconds // 1000
        microseconds = (milliseconds % 1000) * 1000
        minutes = self.dataset[1]
        hours = self.dataset[4]
        day = self.dataset[7]
        month = self.dataset[9]
        year = 2000 + self.dataset[11]

        # Create datetime object
        dt = datetime(year, month, day, hours, minutes, seconds, microseconds)

        # Convert to the desired timezone
        local_tz = pytz.timezone('Asia/Kolkata')
        local_dt = local_tz.localize(dt)

        return local_dt


# Example 1: Initialization with specific octet values
# cp56_time1 = CP56Time2a(0x15, 0x34, 0x23, 0x12, 0x01, 0x02, 0x03)
cp56_time1 = CP56Time2a(0xe0, 0x0b, 0x0c, 0x12, 0x44, 0x06, 0x18)

# {E0}{0B}{0C}{12}{44}{06}{18}{38}
print("Decoded dataset with specific octet values:")
print("-------",cp56_time1.dataset)


# Convert octet set to hex values
hex_octetset = ['0x'+format(octet, '02x') for octet in cp56_time1.octetset]
print("Hexadecimal octet set:")
print("hex_octetset------",hex_octetset)

cp56_time2 = [int(h, 16) for h in hex_octetset]
# print("cp56_time2-----",cp56_time2)

cp_time = CP56Time2a(*cp56_time2)
print("cp_time--",cp_time)
formatted_time = cp_time.to_datetime().strftime('%Y-%m-%d %H:%M:%S.%f%z')
print("888888888--",formatted_time)


# Example 2: Initialization with the current time to raw data
cp56_time2 = CP56Time2a()
print("Decoded dataset with current time:")
print(cp56_time2.dataset)

hex_octetset2 = ['0x'+format(octet, '02x') for octet in cp56_time2.octetset]
print("Hexadecimal octet set:")
print("hex_octetset2------",hex_octetset2)


hex_octetset3 = [format(octet, '02x') for octet in cp56_time2.octetset]
print("hex_octetset3------",hex_octetset3)


new_value = "".join([format(octet, '02x') for octet in cp56_time2.octetset])
print("new_value------",new_value)


##############
cp56_time2 = [int(h, 16) for h in hex_octetset2]
print("cp56_time2-----",cp56_time2)

cp_time = CP56Time2a(*cp56_time2)
# print("cp_time--",cp_time)
formatted_time = cp_time.to_datetime().strftime('%Y-%m-%d %H:%M:%S.%f%z')
print("888888888--",formatted_time)

# 3d750f0bad0618

######################convert raw to current time
dat = "85920f0bad0618"

pairs = ['0x'+ dat[i:i+2] for i in range(0, len(dat), 2)]
print("pairs---",pairs)
# dat = "85920f0bad0618"


cp56_time_new = [int(h, 16) for h in pairs]
# print("cp56_time2-----",cp56_time_new)

cp_time = CP56Time2a(*cp56_time_new)
print("cp_time--",cp_time)
formatted_time = cp_time.to_datetime().strftime('%Y-%m-%d %H:%M:%S.%f%z')
print("888888888--",formatted_time)





# import datetime
# import pytz

# def cp56_to_datetime(cp56_time):
#     # Extract the CP56 time components
#     milliseconds = cp56_time[0] + (cp56_time[1] << 8)
#     minutes = cp56_time[2]
#     hours = cp56_time[3]
#     day = cp56_time[4]
#     month = cp56_time[5]
#     year = cp56_time[6] + 2000

#     # Print extracted values for debugging
#     print(f"Extracted values: Year: {year}, Month: {month}, Day: {day}, Hours: {hours}, Minutes: {minutes}, Milliseconds: {milliseconds}")

#     # Validate the extracted values
#     if not (1 <= month <= 12):
#         raise ValueError("Month is out of range")
#     if not (1 <= day <= 31):  # Simplified check, you can add more detailed check for each month
#         raise ValueError("Day is out of range")
#     if not (0 <= hours <= 23):
#         raise ValueError("Hours are out of range")
#     if not (0 <= minutes <= 59):
#         raise ValueError("Minutes are out of range")
#     if not (0 <= milliseconds <= 999):
#         raise ValueError("Milliseconds are out of range")

#     # Create a datetime object
#     dt = datetime.datetime(year, month, day, hours, minutes, milliseconds // 1000, (milliseconds % 1000) * 1000)
    
#     # Convert to the desired timezone (assuming the desired timezone is Asia/Kolkata with UTC+5:30 offset)
#     local_tz = pytz.timezone('Asia/Kolkata')
#     local_dt = local_tz.localize(dt)

#     return local_dt

# # Example CP56 time array as a list of strings
# hex_octetset = ['0xda', '0xb3', '0x0d', '0x8d', '0x6d', '0x06', '0x18']

# # Convert list of hex strings to list of integers
# cp56_time2 = [int(h, 16) for h in hex_octetset]

# # Convert CP56 time to the desired format
# try:
#     formatted_time2 = cp56_to_datetime(cp56_time2)
#     print(formatted_time2)
# except ValueError as e:
#     print(f"Error: {e}")


# # Example CP56 time array as a list of strings
# cp56_time_str = ['0x1C', '0x02', '0x1C', '0x12', '0x07', '0x06', '0x18']

# # Convert list of hex strings to list of integers
# cp56_time = [int(h, 16) for h in cp56_time_str]
# print("cp56_time---",cp56_time)

# # Convert CP56 time to the desired format
# formatted_time = cp56_to_datetime(cp56_time)
# print("formatted_time--",formatted_time)


# print("hex_octetset--",hex_octetset)
# # Convert list of hex strings to list of integers
# cp56_time2 = [int(h, 16) for h in hex_octetset]
# print("cp56_time2---",cp56_time2)

# formatted_time2 = cp56_to_datetime(cp56_time2)
# print("formatted_time2---",formatted_time2)

# # Example CP56 time array (7 bytes)


# hex_int_list = [int(h, 16) for h in hex_octetset]
# print(hex_int_list)
# print("hex_octetset---",hex_int_list)
# print("hex_octetset---",type(hex_int_list))

# formatted_time = cp56_to_datetime(hex_octetset)
# print(formatted_time)