import Papa from 'papaparse';
import waitForElement from '../utils/waitForElement'

function csvToList_signatories(tableData,idx_start,idx_end,offset) {
      var reference_all = $('<ul class="sign__list"></ul>');
      $(tableData).each(function (i,rowData) {
        if ((i>=idx_start) & (i<idx_end)) {
          var reference = $('<li></li>');
          reference.append(
            $('<span>['+(i+1+offset)+'] </span> ')
          )
          reference.append(
            $('<span class="sign sign__name">'+rowData.Name+', </span>')
          )
          reference.append(
            $(' <span class="sign sign__affiliation">'+rowData.Affiliation+'</span>')
          )
          reference_all.append(reference)
        }
      });
      return reference_all;
}

class generateSignatories {

  constructor(data_file,dom_ref,i,batch_sz,offset=0) {
    var idx_start = (i)*batch_sz;
    var idx_end = (i+1)*batch_sz;
    console.log(idx_start + "," + idx_end)

    $.ajax({
        type: "GET",
        url: data_file,
        success: function (data) {
            $('<div>',{
                class: "d-flex justify-content-center",
                html: csvToList_signatories(Papa.parse(data, {
                      delimiter: ";",
                      header: true,
                      skipEmptyLines: true,
                }).data,idx_start-offset,idx_end-offset),
                id: dom_ref,
              }).appendTo(
                $('<div>',{
                  class: "carousel-item carousel-item-signatories",
                }).appendTo('.carousel-signatories'));


        }
    });
  }
}

// generate signatories carousel
$('.carousel-signatories').empty();
$('.carousel-indicators').empty();

var batch_sz = 30;
var dom_id = "list__signatories_1";
// new generateSignatories('./data/signatories_initial.csv',dom_id,0,batch_sz);

for (var i=0; i<6; i++) {
    dom_id = "list__signatories_"+(i+1)

    $('.carousel-signatories').append($('<div>',{
          class: "carousel-item carousel-item-signatories",
        }).append($('<div>',{
            class: "d-flex justify-content-center",
            id: dom_id,
          })).load('./data/signatories_complete.html li.signatories-initial:lt('+(i+1)*batch_sz+'):gt('+i*batch_sz+')'));

    $('.carousel-indicators').append("<li class='carousel-indicator-item' data-target='#carousel-signatories' data-slide-to='"+i+"'></li>")
};

for (var j=0; j<3; j++) {
    console.log(i)
    dom_id = "list__signatories_"+(i+1)
    console.log((j)*batch_sz)
    console.log((j+1)*batch_sz)
    $('.carousel-signatories').append($('<div>',{
          class: "carousel-item carousel-item-signatories",
        }).append($('<div>',{
            class: "d-flex justify-content-center",
            id: dom_id,
          })).load('./data/signatories_complete.html li.signatories-further'));//:lt('+(j+1)*batch_sz+'):gt('+j*batch_sz+')

    $('.carousel-indicators').append("<li class='carousel-indicator-item' data-target='#carousel-signatories' data-slide-to='"+i+"'></li>")
    i = i+1;
};


waitForElement('#list__signatories_1').then(function(element) {
    $(".carousel-signatories .carousel-item").first().addClass("active")
    $(".carousel-indicators .carousel-indicator-item").first().addClass("active")
});

// var batch_sz = 30;
// var dom_id = "list__signatories_1";
// new generateSignatories('./data/signatories_further.csv',dom_id,0,batch_sz,5);
// for (var i=1; i<5; i++) {
//     dom_id = "list__signatories_"+(i+1)
//     new generateSignatories('./data/signatories_further.csv',dom_id,i,batch_sz,5);
//     waitForElement('#'+dom_id).then(function(element) {
//         $(".carousel-signatories .carousel-item").first().addClass("active")
//         $(".carousel-indicators .carousel-indicator-item").first().addClass("active")
//     });
// };

// export default generateSignatories;
