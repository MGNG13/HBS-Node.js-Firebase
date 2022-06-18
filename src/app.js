const express = require('express');
const hbs = require('express-handlebars');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views')); 
app.engine(
  'hbs', 
  hbs.create({ 
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    extname: '.hbs'
  }).engine
);

app.set('view engine', 'hbs');

// all routes to make CRUD
app.use(require('./routes/index'));

module.exports = app;