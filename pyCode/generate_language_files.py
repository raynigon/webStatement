import pandas as pd
import copy

def format_text(input_template,output_file,input_csv,keyword,delimiter=';'):

    with open (input_template,"r") as myfile:
        plain_html = myfile.read()

    df = pd.read_csv(input_csv,delimiter=delimiter)
    for language in df.columns[1:]:
        new_html = copy.deepcopy(plain_html)
        print(language)
        for i,d in df.iterrows():
            new_html = new_html.replace('%s_%02d'%(keyword,i),d[language])
        text_file = open("%s_%s.html"%(output_file,language), "w")
        text_file.write(new_html)
        text_file.close()

format_text("../page/templates/template_NewsArticle.html","../page/languageFiles/NewsArticle","../page/data/NewsArticle.csv","Text")
format_text("../page/templates/template_statement.html","../page/languageFiles/statement","../page/data/statement.csv","statement",',')

# def format_signatories():
#
#     with open
