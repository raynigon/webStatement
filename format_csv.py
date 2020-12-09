import pandas as pd

def replace_semicolons_by_commas(string):
    counter = string.count(";")
    for i in range(counter):
        string = string.replace(";", ",")
    return string

def format_csv(input_filename, output_filename):
    lis = list(range(15))
    df = pd.read_csv(input_filename, header=None, names=lis)
    new_df = pd.DataFrame(columns=["Name", "Affiliation"])

    # Name column
    new_df[new_df.columns[0]] = df[df.columns[0]]

    # Affiliation column
    new_df[new_df.columns[1]] = df[df.columns[1:]].apply(
        lambda x: ','.join(x.dropna().astype(str)),
        axis=1
        )
    new_df[new_df.columns[1]] = new_df[new_df.columns[1]].apply(
        replace_semicolons_by_commas
        )

    #print(new_df)
    new_df.to_csv(output_filename)


format_csv("test.csv", "name_affiliation.csv")
