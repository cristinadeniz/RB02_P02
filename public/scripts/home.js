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

api.get(`lists/${localStorage.getItem('id')}`)
  .then(response => {
    const ul = document.createElement('ul')
    response.data.forEach(list => {
      const li = document.createElement('li')
      li.innerHTML = list.name

      li.addEventListener('click', () => {
        list.songs.forEach(song => {
          const parrafo = document.createElement('p')
          parrafo.innerHTML = song.title
          
          li.appendChild(parrafo)
          divListSongs.appendChild(parrafo)
        })
      })
      ul.appendChild(li)
    })
    divLists.appendChild(ul)
  


this.addEventListener('click', () => {
   list.songs.forEach(song => {
      song.song_url.play()
})
})
})
