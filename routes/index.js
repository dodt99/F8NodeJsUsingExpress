const newsRoute = require('./news.route');
const siteRoute = require('./site.route');
const booksRoute = require('./books.route');

function route(app) {
       
    app.use('/news', newsRoute);
    app.use('/books', booksRoute);
    app.use('/', siteRoute);
    
}

module.exports = route;