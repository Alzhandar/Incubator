const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  userId:{type: String, required: true},
  characterUrls:[{ type: String }]
},{
  timestamps:true,
});

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
