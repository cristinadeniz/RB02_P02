// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000
})

document.getElementById('btn-signup').addEventListener('click', (event) => {
  const newUser = {
    user_name: document.getElementById('user_name').value,
    user_email: document.getElementById('user_email').value,
    user_password: document.getElementById('user_password').value
  }

  api
    .post('auth/signup', newUser)
    //
    // Aqui es donde el backend crea el usuario
    // crea el token y me lo devuelve
    //
    .then(function (response) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('name', response.data.username)
      localStorage.setItem('email', response.data.email)
      localStorage.setItem('id', response.data.userID)
      location.assign('home.html')
    })
    .catch(function (error) {
      console.log(error.response)
    })
})

document.getElementById('btn-login').addEventListener('click', (event) => {
  const newUser = {
    user_email: document.getElementById('login_email').value,
    user_password: document.getElementById('login_password').value
  }

  api
    .post('auth/login', newUser)
    .then(function (response) {
      console.log(response)
      if (response.data.error) {
        alert('WRONG PASSWORD')
      } else {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', response.data.username)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('id', response.data.userID)
        location.assign('home.html')
      }
    })
    .catch(function (error) {
      console.log(error.response)
    })
})
