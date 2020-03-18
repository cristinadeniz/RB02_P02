// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000
})

var spanName = document.getElementById('user-name')
const userName = localStorage.getItem('name')

spanName.innerHTML = userName

const divLists = document.getElementById('lists')
// const divListSongs = Aqui tienes que recoger el div donde vas a guardar las canciones

api.get(`lists/${localStorage.getItem('id')}`)
  .then(response => {
    const ul = document.createElement('ul')
    response.data.forEach(list => {
      const li = document.createElement('li')
      li.innerHTML = list.name

      li.addEventListener('click', () => {
        list.songs.forEach(song => {
          // Aqui es donde tienes los nombres de las canciones!
        })
      })

      ul.appendChild(li)
    })

    divLists.appendChild(ul)
  })
