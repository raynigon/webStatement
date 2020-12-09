import '../styles/styles.css'
import generateList from './modules/generateList'
import generateStatement from './modules/generateStatement'

new generateList('authors',"#list__authors");
new generateList('references',"#list__references");
new generateStatement();
// new generateStatement('signatories',"#list__signatories");

if (module.hot) {
  module.hot.accept()
}
