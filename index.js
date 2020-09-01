const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('home');
  // res.render('home', {layout: false});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})