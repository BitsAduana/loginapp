import { sayHi } from './utils'
import './styles.css'

document.getElementById('btn-alert')
  .addEventListener('click', function () {
    sayHi()
  })