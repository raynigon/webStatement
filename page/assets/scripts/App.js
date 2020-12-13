import '../styles/styles.css'
import './modules/carousel'
import generateList from './modules/generateList'

import addHeaderFooter from './modules/addHeader'
import './modules/generateSignatories'

new addHeaderFooter()

if (module.hot) {
  module.hot.accept()
}
