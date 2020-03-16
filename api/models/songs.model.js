const moongose = require('mongoose')
const Schema = moongose.Schema

const songsSchema = new Schema({
  title: String,
  year: Number,
  theme: String,
  song_url: String
})

const song = moongose.model('Song', songsSchema)

module.exports = song
