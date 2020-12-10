import waitForElement from '../utils/waitForElement'
import generateStatement from './generateStatement'

class addHeader {
  constructor() {

    // add hero image
    $('#hero').empty();
    $('#hero').addClass("jumbotron jumbotron-fluid");
    $.get("./templates/hero.html", function(data){
      $('#hero').html(data);
    });

    // add navigation bar
    $('#navbar').empty();
    $('#navbar').addClass("navbar navbar-expand-lg navbar-light bg-light sticky-top");
    $.get("./templates/navbar.html", function(data){
      $('#navbar').html(data);
    });
  }

  addLangEvents() {
    var lang_arr = ['English','French','German','Italian','Russian']
    waitForElement('#navbarResponsive').then(function(element) {
      $('#dropdown-languages').children().each(function(i,child) {
        child.onclick = function(){new generateStatement(lang_arr[i])}
      })
    })
  }
}

export default addHeader
