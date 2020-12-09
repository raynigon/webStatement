import Papa from 'papaparse';

function arrayToTable(tableData) {
    console.log(tableData)
      var author_all = $("<p></p>");
      $(tableData).each(function (i,rowData) {
          var author = $('<a class="author__name" title="' + rowData.Affiliation + '" href="#">' + rowData.Name + ', </a>');
          author_all.append(author)
      });
      return author_all;
}

class generateList {

  constructor(type,dom_ref) {
    var data_file = './data/' + type + '.csv'
    console.log(data_file)
    $.ajax({
        type: "GET",
        url: data_file,
        success: function (data) {
          $(dom_ref).html(
            arrayToTable(Papa.parse(data, {
              delimiter: ";",
              header: true,
              skipEmptyLines: true}).data))
        }
    });
  }
}

export default generateList;
