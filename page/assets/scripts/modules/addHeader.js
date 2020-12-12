import waitForElement from '../utils/waitForElement'
// import generateStatement from './generateStatement'

function set_statement_lang(language='English',init=false) {
    var language_file = "./data/statement_"+language+".html"
    if (init) {
      $('#statement').load(language_file)
    }
    else {
      $('#statement__title').load(language_file + " #statement__title")
      $('#statement__text').load(language_file + " #statement__text")
    }
}

class addHeaderFooter {
  constructor() {

    // add hero image
    $('.hero').addClass("jumbotron jumbotron-fluid");
    $('#hero').load("./templates/hero.html");

    // add navigation bar
    $('#navbar').addClass("navbar navbar-expand-lg navbar-light bg-light sticky-top");
    $('#navbar').load("./templates/navbar.html");

    // add footer
    $('#footer').load("./templates/footer.html");

    set_statement_lang('English',true)
    this.addLangEvents()
  }

  addLangEvents() {

    waitForElement('#navbarResponsive').then(function(element) {
      $('#dropdown-languages').children().each(function(i,child) {
        child.onclick = function() {
          set_statement_lang(child.text,false)
        }
      })
    })
  }
}

export default addHeaderFooter
