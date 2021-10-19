const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
require('./database/index');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(router);

app.listen(3000, () => {
    console.log('Running');
});