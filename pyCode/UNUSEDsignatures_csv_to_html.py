import pandas as pd

df = pd.read_csv("Sign the statement (Responses) - Form Responses 1.csv")
display(df)

def append_if_str(init_str, value):
    if type(value) == str:
        init_str += f"{value}, "
    return init_str

def return_list_of_signatures_as_str_from_df(df):
    signatures = []
    for index, row in df.iterrows():
        signature = f"{row['Full Name']}, "
        signature = append_if_str(signature, row['Department'])
        signature += f"{row['Institute']}, "
        signature = append_if_str(signature, row['City'])
        signature += f"{row['Country']}"
        signatures.append(signature)
    return signatures

signatureStr_list = return_list_of_signatures_as_str_from_df(df)
