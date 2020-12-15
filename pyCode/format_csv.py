import pandas as pd

def replace_semicolons_by_commas(string):
    counter = string.count(";")
    for i in range(counter):
        string = string.replace(";", ",")
    return string

def remove_quotation_marks(string):
    if type(string) == str:
        counter = string.count('"')
        for i in range(counter):
            string = string.replace('"', '')
    return string

def remove_last_character(string):
    return string[:-1]

def remove_last_fullstop(string):
    if string[-1] == '.':
        string = string[:-1]
    return string

def remove_whitespace(string):
    return string.strip()

def create_html(df):

    for row in df.iterrows():
        str_author = "<li>"+row[1]+"</li>"

    # print(line)


def format_csv(input_filename, output_filename):
    lis = list(range(15))
    df = pd.read_csv(input_filename, header=None, names=lis)
    # drop first row
    df = df.iloc[1:]
    # edit rows where data is all in column one
    is_nan = df.isnull()
    problematic_rows = df.loc[is_nan[1] == True]
    for index in list(problematic_rows.index):
        cell_content = problematic_rows.loc[index][0]
        strings = cell_content.split(',')
        name = strings[0]
        affiliation = ','.join(strings[1:])
        df.at[index, 0] = name
        df.at[index, 1] = affiliation

    new_df = pd.DataFrame(columns=["Name", "Affiliation"])

    # Name column
    new_df[new_df.columns[0]] = df[df.columns[0]]

    # Affiliation column
    # Merge affiliations data into one column
    new_df[new_df.columns[1]] = df[df.columns[1:]].apply(
        lambda x: ','.join(x.dropna().astype(str)),
        axis=1
        )
    # Remove last comma
    new_df[new_df.columns[1]] = new_df[new_df.columns[1]].apply(
        remove_last_character
        )
    # Replace semicolons by commas
    new_df[new_df.columns[1]] = new_df[new_df.columns[1]].apply(
        replace_semicolons_by_commas
        )
    # Remove full stop if there is one at the end
    new_df[new_df.columns[1]] = new_df[new_df.columns[1]].apply(
        remove_last_fullstop
        )
    # Remove leading spaces
    new_df[new_df.columns[1]] = new_df[new_df.columns[1]].apply(
        remove_whitespace
        )

    # create_html(new_df)

    # print(new_df)
    new_df.to_csv(output_filename, sep=";", index=False)


format_csv("../page/data/signatories_initial_raw.csv", "../page/data/signatories_initial.csv")
format_csv("../page/data/signatories_further_raw.csv", "../page/data/signatories_further.csv")
