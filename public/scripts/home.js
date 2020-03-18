// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000
})

var spanName = document.getElementById('user-name')
const userName = localStorage.getItem('name')

spanName.innerHTML = userName

var div = document.getElementById('test')
var titulo = document.createElement('h2')
titulo.innerText = 'Me pareces una caca'
div.appendChild(titulo)
