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
        $('#statement__references').load(language_file + " #statement__references")
      }
    }
    if (document.getElementById("NewsArticle")) {
      var language_file = "./languageFiles/NewsArticle_"+language+".html"
      $('#NewsArticle').load(language_file)
    }
}

class addHeaderFooter {
  constructor() {

    $('#hero').load("./templates/hero.html");

    $('#navbar').addClass("navbar navbar-expand-lg navbar-dark sticky-top");
    $('#navbar').load("./templates/navbar.html");

    waitForElement('#navbarResponsive').then(function(element) {
      if (document.getElementById("statement")) {
        $("#nav-statement").addClass('active')
      }
      if (document.getElementById("signatures")) {
        $("#nav-signatures").addClass('active')
      }
      if (document.getElementById("NewsArticle")) {
        $("#nav-news").addClass('active')
      }
      if (document.getElementById("FAQ")) {
        $("#nav-faq").addClass('active')
      }
    })

    // add footer
    $('#footer').load("./templates/footer.html");

    // if (document.getElementById("statement")) {
    set_statement_lang("English",true)
    this.addLangEvents()
    // }
    // if (document.getElementById("NewsArticle")) {
      // set_statement_lang("English",true)
      // this.addLangEvents()
    // }
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
