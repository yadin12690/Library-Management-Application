const express = require('express');
const app = express();
const booksRoutes = express.Router();

// Require Books model in our routes module
let Books = require('../models/Books');

// Defined store route
booksRoutes.route('/add').post(function (req, res) {
  let books = new Books(req.body);
  books.save()
    .then(books => {
      res.status(200).json({'books': 'books in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


// Defined get data(index or listing) route
booksRoutes.route('/').get(function (req, res) {
    Books.find(function (err, books){
    if(err){
      console.log(err);
    }
    else {
      res.json(books);
    }
  });
});

// Defined edit route
booksRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Books.findById(id, function (err, books){
      res.json(books);
  });
});

//  Defined update route
booksRoutes.route('/update/:id').post(function (req, res) {
    //console.log(req);
    Books.findById(req.params.id, function(err, books) {
    if (!books)
      return next(new Error('Could not load Document'));
    else {
        books.author_name = req.body.author_name;
        books.book_name = req.body.book_name;
        books.catalog_number = req.body.catalog_number;
        books.publication_date = req.body.publication_date;
        books.cover_photo = req.body.cover_photo;

        books.save().then(books => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
booksRoutes.route('/delete/:id').get(function (req, res) {
    Books.findByIdAndRemove({_id: req.params.id}, function(err, books){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = booksRoutes;