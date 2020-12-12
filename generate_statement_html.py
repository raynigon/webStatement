import pandas as pd
import copy

def format_statement(input_csv):

    with open ("./page/data/statement.html","r") as myfile:
        plain_html = myfile.read()

    df = pd.read_csv(input_csv)#, header=None, names=lis)
    for language in df.columns[1:]:
        new_html = copy.deepcopy(plain_html)
        print(language)
        for i,d in df.iterrows():
            new_html = new_html.replace('statement_%02d'%i,d[language])
        text_file = open("./page/data/statement_%s.html"%language, "w")
        text_file.write(new_html)
        text_file.close()

# format_statement("./page/data/languages_test.csv")
format_statement("./page/data/languages_test.csv")
