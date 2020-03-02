
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Books
let Books = new Schema({
    author_name: {
    type: String
  },
  book_name: {
    type: String
  },
  catalog_number: {
    type: Number
  },
  publication_date: {
    type: String
  },
  cover_photo: {
    type: String
  }
},{
    collection: 'books'
});

module.exports = mongoose.model('Books', Books);