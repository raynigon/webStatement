import '../styles/styles.css'
import './modules/carousel'
import generateList from './modules/generateList'

import addNav from './modules/addNav'
import generateStatement from './modules/generateStatement'
import generateSignatories from './modules/generateSignatories'

let nav = new addNav()
nav.addLangEvents()
new generateList('authors',"#list__authors");
new generateStatement("ENG")
new generateList('references',"#list__references");

if (module.hot) {
  module.hot.accept()
}

// $(".jumbotron").css({ height: $(window).height() + "px" });
//
// $(window).on("resize", function() {
//   $(".jumbotron").css({ height: $(window).height() + "px" });
// });
