import '../styles/styles.css'
import './modules/carousel'
import generateList from './modules/generateList'

import addHeaderFooter from './modules/addHeader'
// import generateStatement from './modules/generateStatement'
import generateSignatories from './modules/generateSignatories'

let page_template = new addHeaderFooter()
page_template.addLangEvents()
// page_template.

// new generateList('authors',"#list__authors");
// new generateStatement("English")
// new generateList('references',"#list__references");

if (module.hot) {
  module.hot.accept()
}

// $(".jumbotron").css({ height: $(window).height() + "px" });
//
// $(window).on("resize", function() {
//   $(".jumbotron").css({ height: $(window).height() + "px" });
// });
