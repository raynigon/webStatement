import waitForElement from '../utils/waitForElement'
import generateStatement from './generateStatement'

class addNav {
  constructor() {
    $('nav').empty();
    $('nav').addClass("navbar navbar-expand-lg navbar-light bg-light sticky-top");
    $('nav').attr("id","navbar");


    $.get("navbar.html", function(data){
      $('nav').html(data);
    });
  }

  addLangEvents() {
    var lang_arr = ['ENG','FR','GER','IT','RU']
    waitForElement('#navbarResponsive').then(function(element) {
      $('#dropdown-languages').children().each(function(i,child) {
        child.onclick = function(){new generateStatement(lang_arr[i])}
      })
    })
  }
}

export default addNav
