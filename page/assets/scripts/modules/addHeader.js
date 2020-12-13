import waitForElement from '../utils/waitForElement'
// import generateStatement from './generateStatement'

function set_statement_lang(language='English',init=false) {

    if (document.getElementById("statement")) {
      var language_file = "./languageFiles/statement_"+language+".html"
      if (init) {
        $('#statement').load(language_file)
      }
      else {
        $('#statement__title').load(language_file + " #statement__title")
        $('#statement__text').load(language_file + " #statement__text")
      }
    }
    if (document.getElementById("NewsArticle")) {
      var language_file = "./languageFiles/NewsArticle_"+language+".html"
      $('#NewsArticle').load(language_file)
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

    if (document.getElementById("statement")) {
      set_statement_lang("English",true)
      this.addLangEvents()
    }
    if (document.getElementById("NewsArticle")) {
      set_statement_lang("English",true)
      // $('#NewsArticle').load("./languageFiles/NewsArticle_German.html");
      this.addLangEvents()
    }
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
