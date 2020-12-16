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
            if isinstance(d[language],str):
                new_html = new_html.replace('%s_%02d'%(keyword,i),d[language])
            else:
                new_html = new_html.replace('%s_%02d'%(keyword,i),"")
        text_file = open("%s_%s.html"%(output_file,language), "w")
        text_file.write(new_html)
        text_file.close()

format_text("../containcovid/templates/template_NewsArticle.html","../containcovid/languageFiles/NewsArticle","../containcovid/data/NewsArticle.csv","Text")
format_text("../containcovid/templates/template_statement.html","../containcovid/languageFiles/statement","../containcovid/data/statement.csv","statement",',')

# def format_signatories():
#
#     with open
