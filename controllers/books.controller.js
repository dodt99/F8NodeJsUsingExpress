const Course = require('../models/course.model');
const { multilMongooseToObject, mongooseToObject } = require('../util/mongoose');

class BooksController {

    // [GET] /books
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('books/books', { 
                    courses: multilMongooseToObject(courses) 
                });
            })
            .catch(next);

    }

    // [GET] /books/:slug
    show(req, res, next) {
        // res.send('/books/:slug' + req.params.slug);

        Course.findOne({ slug: req.params.slug })
            .then(course => res.render('books/bookdetail', {
                course: mongooseToObject(course)
            }))
            .catch(next);

    }
}

module.exports = new BooksController;