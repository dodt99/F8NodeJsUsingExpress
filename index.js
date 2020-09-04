const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');
const route = require('./routes');

const db = require('./config/db/index');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//Method Override
app.use(methodOverride('_method'));

//Connect to db
db.connect();

//HTTP logger
// app.use(morgan('combined'));

//Template engine
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
app.engine('.hbs', exphbs({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}));
app.set('view engine', '.hbs');

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})