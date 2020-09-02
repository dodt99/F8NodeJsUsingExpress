const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');
const route = require('./routes');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//Template engine
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})