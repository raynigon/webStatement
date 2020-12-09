import '../styles/styles.css'
import generateList from './modules/generateList'
import generateStatement from './modules/generateStatement'
import generateSignatories from './modules/generateSignatories'


new generateList('authors',"#list__authors");
new generateList('references',"#list__references");
new generateStatement();

if (module.hot) {
  module.hot.accept()
}
