import pandas as pd
import json


# excel_file=r'D:\code\CGM_SUBSTATION\data\configurations\AMNEX_TESTING_5.10.xls'
# excel_file = r'D:\code\CGM_SUBSTATION\data\configurations\AMNEX_config\AMNEX_TESTING_5\AMNEX_TESTING_5.10.xls'
# excel_file = r'D:\code\CGM_SUBSTATION\data\configurations\CH_SHMABHAJI_NAGAR_33_11kV_Patoda_S_S\ldms.xls'

excel_file = r'D:\code\CGM_SUBSTATION\data\configurations\SAMADHAN COLONY\SAMADHAN COLONY.xls_LDMS.xls'

# text_file=r'D:\code\CGM_SUBSTATION\static\text\demo.txt'
text_file=r'D:\code\CGM_SUBSTATION\LDMS\substation\static\text\SAMADHAN_COLONY.txt'


def organize_data(data):
    result = {"0b": {}, "1f": {},"2e": {},"0d":{},"1e":{}}
    
    for key, value in data.items():
        print("------::",key,type(key))
        if '11' in key:
            result["0b"][key.split(',')[0]]  = value
        elif '31' in key:
            result["1f"][key.split(',')[0]] = value
        elif '46' in key:
            result["2e"][key.split(',')[0]] = value
        elif '13' in key:
            result["0d"][key.split(',')[0]] = value
        elif '30' in key:
            result["1e"][key.split(',')[0]] = value

    # print("result******------",result)
        
            
    return result


def transform_string(s):
    parts = s.split("_")
    print("parts----",parts,type(parts))
    if len(parts) < 5:
        s = s.replace("_", "", 1)
    elif len(parts) == 5:
        s = parts[0] + parts[1] + parts[2] + "_" + "_".join(parts[3:])

    print("ssssssssssssssss-------",s)
    

    # return s



def excel_to_custom_text(excel_file, output_file):
    try:
        # sheet_name='LDMS'
        set_of_key=set()
        # df = pd.read_excel(excel_file, sheet_name=sheet_name)
        df = pd.read_excel(excel_file)
        print(df)

        data = {}
        for _, row in df.iterrows():
            # print(row)
            key = row[0]
            value = [row[2],row[14],row[16]]
            print("keyyyy--",key,type(key),value)  
            new_key = str(row[1])
            new_key = new_key.split(')')[0].lstrip('(')
            print("new_key---",new_key)

            # print(key,value,type(value))
            if pd.notna(new_key) and new_key !='Type ID':
                set_of_key.add(new_key)


            if pd.notna(value[0]) and pd.notna(key):
                # print("******************",str(key))
                if key.startswith('11') or key.startswith('33') or key.startswith('LDMS') or key.startswith('DCPS'):
                    
                    # transform_string(key)
                    key = key.replace("_", "", 1)
                    # print("&&&&&&&&&----",key)

                    data[str(key.replace(" ", "_").replace("-", "_").replace("/", "_"))+", "+str(new_key)] = value
                    # print("data----------",data)

        organized_data = organize_data(data)
        # print("###########",organized_data)
        
        with open(output_file, 'w') as f:
            json.dump(organized_data, f, indent=4)

        print(f"File has been converted and saved as {output_file}")


    except Exception as e:
        print(f"An error occurred: {e}")



excel_to_custom_text(excel_file, text_file)




# def excel_to_text(excel_file, text_file, delimiter="\t"):
#     """
#     Converts an Excel file to a text file.

#     Parameters:
#         excel_file (str): Path to the Excel file.
#         text_file (str): Path to save the output text file.
#         delimiter (str): Delimiter to separate values in the text file. Default is tab ("\t").
#     """
#     try:
#         # Read the Excel file
#         df = pd.read_excel(excel_file)

#         # Save to text file
#         df.to_csv(text_file, sep=delimiter, index=False)

#         print(f"File has been converted and saved as {text_file}")
#     except Exception as e:
#         print(f"An error occurred: {e}")

# # Example Usage
# excel_to_text(excel_file, text_file, delimiter="\t")