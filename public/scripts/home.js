// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000
})

var spanName = document.getElementById('user-name')
const userName = localStorage.getItem('name')

spanName.innerHTML = userName

const divLists = document.getElementById('lists')

const divListSongs = document.getElementById('listSongs')


api.get(`lists/${localStorage.getItem('id')}`,
  { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    const ul = document.createElement('ul')
    response.data.forEach(list => {
      const li = document.createElement('li')
      li.innerHTML = list.name

      li.addEventListener('click', () => {
        divListSongs.innerHTML = ''
        divListSongs.setAttribute('class', 'styleBoxs mt-2')
        list.songs.forEach(song => {
          const parrafo = document.createElement('p')
          parrafo.addEventListener('click', () => {
            document.getElementById('audio').setAttribute('src', song.song_url)
            document.getElementById('audio').play()
          })
          parrafo.innerHTML = song.title

          li.appendChild(parrafo)
          divListSongs.appendChild(parrafo)
        })
      })
      ul.appendChild(li)
    })
    divLists.appendChild(ul)
  })

const listas = document.getElementById('listas')
api.get(`songs/${localStorage.getItem('id')}`,
  { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    const ulSongs = document.createElement('ul')
    response.data.forEach(song => {
      ulSongs.innerText = song.title
      ulSongs.addEventListener('click', () => {
        document.getElementById('audio').setAttribute('src', song.song_url)
        document.getElementById('audio').play()
      })
      ulSongs.appendChild(listas)
    })
    listas.appendChild(ulSongs)
  })
