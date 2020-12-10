import Papa from 'papaparse';

function csvToList_authors(tableData,idx_start=null,idx_end=null) {
      var author_all = $("<p></p>");
      $(tableData).each(function (i,rowData) {
          var author = '<a class="author__name" title="' + rowData.Affiliation + '" href="#">' + rowData.Name;

          if (i<(tableData.length-1)) author = author + ', </a>'
          else author = author + '</a>'
          author_all.append($(author))
      });
      return author_all;
}

function csvToList_references(tableData,idx_start=null,idx_end=null) {
      var reference_all = $('<ul style="list-style: none;"></ul>');
      $(tableData).each(function (i,rowData) {
        // console.log(rowData)
          var reference = $('<li></li>');
          reference.append(
            $('<span class="ref ref__number">['+rowData.Number+'] </span>')
          )
          if (rowData.Authors.length>0) {
            reference.append(
              $(' <span class="ref ref__authors">'+rowData.Authors+', </span>')
            )}
          if (rowData.Year.length>0) {
            reference.append(
              $(' <span class="ref ref__year">'+rowData.Year+', </span>')
            )}
          if (rowData.Link.length>0) {
            reference.append(
              $(' <span class="ref ref__title"><a class="ref__title-link" href="'+rowData.Link+'">'+rowData.Title+'</a>, </span>')
            )}
          else {
            reference.append(
              $(' <span class="ref ref__title">'+rowData.Title+', </span>')
            )
          }
          if (rowData.Journal.length>0) {
            reference.append(
              $(' <span class="ref ref__year">'+rowData.Journal+'</span>')
            )}
          reference_all.append(reference)
      });
      return reference_all;
}

 
class generateList {

  constructor(type,dom_ref,idx_start=null,idx_end=null) {
    var data_file = './data/' + type + '.csv'
    if (type=='authors') var csvToList = csvToList_authors;
    else if (type=='references') var csvToList = csvToList_references;
    else if (type=='signatories') var csvToList = csvToList_signatories;
    $.ajax({
        type: "GET",
        url: data_file,
        success: function (data) {
            $(dom_ref).html(
                  csvToList(Papa.parse(data, {
                        delimiter: ";",
                        header: true,
                        skipEmptyLines: true,
                      }).data,idx_start,idx_end),
            )
        }
    });
  }
}

export default generateList;
