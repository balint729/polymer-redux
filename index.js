// import {createStore, combineReducers} from 'redux';
const express = require('./public/node_modules/express');
const app = express();
app.use(express.static('public'));

const port = 8000
app.listen(port, () => console.log(`app listening on port ${port}!`));
