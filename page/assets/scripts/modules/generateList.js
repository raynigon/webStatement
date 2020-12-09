import Papa from 'papaparse';

function csvToList_authors(tableData) {
      var author_all = $("<p></p>");
      $(tableData).each(function (i,rowData) {
          var author = $('<a class="author__name" title="' + rowData.Affiliation + '" href="#">' + rowData.Name + ', </a>');
          author_all.append(author)
      });
      return author_all;
}

function csvToList_references(tableData) {
      var reference_all = $('<ul style="list-style: none;"></ul>');
      $(tableData).each(function (i,rowData) {
        // console.log(rowData)
          var reference = $('<li></li>');
          reference.append(
            $('<span class="ref ref__number">['+rowData.Number+'] </span>')
          )
          reference.append(
            $(' <span class="ref ref__authors">'+rowData.Authors+', </span>')
          )
          reference.append(
            $(' <span class="ref ref__year">'+rowData.Year+', </span>')
          )
          reference.append(
            $(' <span class="ref ref__title">'+rowData.Title+', </span>')
          )
          reference.append(
            $(' <span class="ref ref__year">'+rowData.Journal+'</span>')
          )
          // console.log(reference)
          reference_all.append(reference)
      });
      // console.log(reference_all)
      return reference_all;
}

class generateList {

  constructor(type,dom_ref) {
    var data_file = './data/' + type + '.csv'
    if (type=='authors') var csvToList = csvToList_authors;
    else if (type=='references') var csvToList = csvToList_references;
    else if (type=='signatories') var csvToList = csvToList_signatories;
    console.log(type)
    console.log(dom_ref)
    console.log(csvToList)
    $.ajax({
        type: "GET",
        url: data_file,
        success: function (data) {
            $(dom_ref).html(
                  csvToList(Papa.parse(data, {
                        delimiter: ";",
                        header: true,
                        skipEmptyLines: true,
                      }).data),
            console.log('success')
            )
        }
    });
  }
}

export default generateList;
