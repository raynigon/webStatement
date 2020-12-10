import '../styles/styles.css'
import './modules/carousel'
import generateList from './modules/generateList'
import generateStatement from './modules/generateStatement'
import generateSignatories from './modules/generateSignatories'


new generateList('authors',"#list__authors");
new generateList('references',"#list__references");
new generateStatement();

if (module.hot) {
  module.hot.accept()
}

// $(".jumbotron").css({ height: $(window).height() + "px" });
//
// $(window).on("resize", function() {
//   $(".jumbotron").css({ height: $(window).height() + "px" });
// });
