const moongose = require('mongoose')
const Schema = moongose.Schema

const favouriteListSchema = new Schema({
  owner: String, // _idUser
  name: String,
  songs: [{
    type: moongose.Schema.Types.ObjectId,
    ref: 'songs'
  }]
})

const list = moongose.model('List', favouriteListSchema)

module.exports = list
