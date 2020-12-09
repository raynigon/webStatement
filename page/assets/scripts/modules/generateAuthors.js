import Papa from 'papaparse';

function arrayToTable(tableData) {
      var author_all = $("<ul></ul>");
      $(tableData).each(function (i, rowData) {
          var author = $('<li></li>')
          author.append($('<span class="author__name">'+rowData.Name+'</span>, <span class="author__affiliation">'+rowData.Affiliation+'</span>'));
          author_all.append(author)
      });
      return author_all;
}

class generateAuthors {

  constructor() {
    $.ajax({
        type: "GET",
        url: "./data/authors.csv",
        success: function (data) {
          $("#text__authors").html(
            arrayToTable(Papa.parse(data, {
              delimiter: ";",
              header: true,
              skipEmptyLines: true}).data))
        }
    });
  }
}

export default generateAuthors;
