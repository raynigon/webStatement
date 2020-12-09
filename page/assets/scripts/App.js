import '../styles/styles.css'
import generateAuthors from './modules/generateAuthors'
import generateStatement from './modules/generateStatement'

new generateAuthors();
new generateStatement();

if (module.hot) {
  module.hot.accept()
}
