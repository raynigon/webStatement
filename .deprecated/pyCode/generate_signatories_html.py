import pandas as pd
import copy
import codecs

def add_name(j,row,key_class=""):
    str = '<li class="'+key_class+'">'
    str += '<span>[%d] </span> '%j
    str += '<span class="sign sign__name">'+row.Name.strip()+', </span>'
    str += ' <span class="sign sign__affiliation">'+row.Affiliation+", "+row.Country+'</span>'
    str += '</li>'
    return str

def format_text(output_file,delimiter=';'):

    j = 0;
    html_string = "<ol>"

    df = pd.read_csv("../containcovid/data/signatories_initial.csv",delimiter=';')
    for i,row in df.iterrows():
        j += 1
        html_string += '\n'
        html_string += add_name(j,row,key_class='signatories-initial')
    html_string += '</ol>\n'

    # html_string += 'Further signatories \n'
    # html_string += "<ol>"
    # df = pd.read_csv("../containcovid/data/signatories_further.csv",delimiter=';')
    # for i,row in df.iterrows():
    #     j += 1
    #     html_string += '\n'
    #     html_string += add_name(j,row,key_class='signatories-further')
    # html_string += '</ol>\n'

    text_file = codecs.open(output_file, "w", "utf-8")
    text_file.write(html_string)
    text_file.close()

format_text("../containcovid/templates/signatories_complete.html")

# def format_signatories():
#
#     with open
