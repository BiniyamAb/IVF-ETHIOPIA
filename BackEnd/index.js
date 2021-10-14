'use strict';

const express = require('express');
const cors = require('cors');
const config = require('./config');


const app = express();


app.use(express.json());
app.use(cors());



app.listen(config.port, () => console.log('Server is listening on url http://localhost:' + config.port));