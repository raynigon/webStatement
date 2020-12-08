import Papa from 'papaparse';

function arrayToTable(tableData) {

      // var table = $('<table></table>');
      // $(tableData).each(function (i, rowData) {
      //     var row = $('<tr></tr>');
      //     $(rowData).each(function (j, cellData) {
      //         row.append($('<td>'+cellData+'</td>'));
      //     });
      //     table.append(row);
      // });
      // console.log(table)
      // return table;

      var author_all = $("<ul></ul>");
      $(tableData).each(function (i, rowData) {
      //   // console.log(i);
          console.log(rowData.Name);
          console.log(rowData.Affiliation);
          var author = $('<li></li>')
          author.append($('<span class="author__name">'+rowData.Name+'</span>,<span class="author__affiliation">'+rowData.Affiliation+'</span>'));
          author_all.append(author)
      });
      // author_all.append("</ul>")
      console.log(author_all)
      return author_all;
}

class generateAuthors {

  constructor() {
    console.log('loading...');
    $.ajax({
        type: "GET",
        // url: "../../../data/authors.csv",
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
