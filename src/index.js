const { Router } = require('express');
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
require('./database/index');


const app = express();

const routes = Router()

routes.use('/images', router)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);

app.listen(3000, () => {
    console.log('Running');
});