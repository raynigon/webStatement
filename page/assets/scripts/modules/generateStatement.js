import Papa from 'papaparse';
import waitForElement from '../utils/waitForElement'

function csvToLanguage(tableData,language,dom_ref) {
      $(tableData).each(function (i,rowData) {

        var dom_id = dom_ref+i.toString()
        if (i==0) {
          $('#title').text(rowData[language])
        }
        else {
          $(dom_id).text(rowData[language])
        }
      });
};

class generateStatement {
  constructor(language,dom_ref="#statement_") {
    var data_load = "./data/statement.html";
    $("#text__statement").load(data_load)

    waitForElement('#statement_1').then(function() {
      var data_file = './data/languages.csv'
      $.ajax({
        type: "GET",
        url: data_file,
        success: function (data) {
          csvToLanguage(Papa.parse(data, {
            delimiter: ",",
            header: true,
            skipEmptyLines: true,
          }).data,language,dom_ref)
        }
      });
    });
  }
}

export default generateStatement
