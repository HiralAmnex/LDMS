# P = 110000  # principal amount
# annual_interest_rate = 16 / 100  # annual interest rate as a decimal
# monthly_interest_rate = annual_interest_rate / 12  # monthly interest rate
# n = 36  # number of months

# # EMI formula
# EMI = (P * monthly_interest_rate * (1 + monthly_interest_rate)**n) / ((1 + monthly_interest_rate)**n - 1)
# total_payment = EMI * n
# total_interest = total_payment - P

# EMI, total_payment, total_interest

# print("Loan :: ",P)
# print("EMI :: ",EMI)
# print("total_payment :: ",total_payment)
# print("total_interest :: ",total_interest)
# -------------------------------------------------------

# def reverse_word(request):
# 	words = request.split()

# 	print(words)
# 	print(type(words))

# 	new_word_list = [i[::-1] for i in words]

# 	print(new_word_list)
# 	print(type(new_word_list))

# 	res_str = " ".join(new_word_list)
# 	print(res_str)
# 	print(type(res_str))

# 	return res_str

# str1 = "My name is python"
# print(reverse_word(str1))


# -------------------------------------------------------

# ascii_dict = {'A': 65, 'B': 66, 'C': 67, 'D': 68}
# print(ascii_dict)

# # Reverse mapping
# new_dict = {value: key for key, value in ascii_dict.items()}
# print(new_dict)

# -------------------------------------------------------

sample_list = [10, 20, 60, 30, 20, 40, 30, 60, 70, 80]
exist = {}
duplicates = []

for x in sample_list:
    if x not in exist:
        exist[x] = 1
    else:
        duplicates.append(x)
print(duplicates)

# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------