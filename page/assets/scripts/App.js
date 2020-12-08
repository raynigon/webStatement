import '../styles/styles.css'
import generateAuthors from './modules/generateAuthors'

let references = new generateAuthors();

if (module.hot) {
  module.hot.accept()
}
