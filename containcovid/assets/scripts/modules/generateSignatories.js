import waitForElement from '../utils/waitForElement'

class generateSignatories {

  constructor() {
    $('.carousel-signatories').empty();
    $('.carousel-indicators').empty();

    var batch_sz = 30;
    var dom_id = "list__signatories_1";
    // new generateSignatories('./data/signatories_initial.csv',dom_id,0,batch_sz);

    for (var i=0; i<9; i++) {
        dom_id = "list__signatories_"+(i+1)

        if (i==0) {
          $('.carousel-signatories').append($('<div>',{
                class: "carousel-item carousel-item-signatories",
              }).append($('<div>',{
                  class: "d-flex justify-content-center",
                  id: dom_id,
                })).load('./templates/signatories_complete.html li.signatories-initial:lt('+(i+1)*batch_sz+')'));

          $('.carousel-indicators').append("<li class='carousel-indicator-item' data-target='#carousel-signatories' data-slide-to='"+i+"'></li>")
        }
        else {
          $('.carousel-signatories').append($('<div>',{
                class: "carousel-item carousel-item-signatories",
              }).append($('<div>',{
                  class: "d-flex justify-content-center",
                  id: dom_id,
                })).append($('<ul>')).load('./templates/signatories_complete.html li.signatories-initial:lt('+(i+1)*batch_sz+'):gt('+(i*batch_sz-1)+')'));

          $('.carousel-indicators').append("<li class='carousel-indicator-item' data-target='#carousel-signatories' data-slide-to='"+i+"'></li>")
        }
    };

    // for (var j=0; j<3; j++) {
    //     console.log(i)
    //     dom_id = "list__signatories_"+(i+1)
    //     console.log((j)*batch_sz)
    //     console.log((j+1)*batch_sz)
    //     $('.carousel-signatories').append($('<div>',{
    //           class: "carousel-item carousel-item-signatories",
    //         }).append($('<div>',{
    //             class: "d-flex justify-content-center",
    //             id: dom_id,
    //           })).load('./data/signatories_complete.html li.signatories-further'));//:lt('+(j+1)*batch_sz+'):gt('+j*batch_sz+')
    //
    //     $('.carousel-indicators').append("<li class='carousel-indicator-item' data-target='#carousel-signatories' data-slide-to='"+i+"'></li>")
    //     i = i+1;
    // };

    waitForElement('#list__signatories_1').then(function(element) {
        $(".carousel-signatories .carousel-item").first().addClass("active")
        $(".carousel-indicators .carousel-indicator-item").first().addClass("active")
    });
  }
}

if (document.getElementById("carousel-signatories")) {
    new generateSignatories()
}
// generate signatories carousel


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
