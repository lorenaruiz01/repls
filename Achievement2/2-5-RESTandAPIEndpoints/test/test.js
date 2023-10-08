
// console.log('testing testing');

const express = require('express'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

const app = express();

app.use(bodyParser.json());

let students = [
  {
    id: 1,
    name: 'Jessica Drake',
    classes: {
      biology: 95,
      algebra: 92
    }
  },
  {
    id: 2,
    name: 'Ben Cohen',
    classes: {
      biology: 95,
      algebra: 92
    }
  },
  {
    id: 3,
    name: 'Lisa Downing',
    classes: {
      biology: 95,
      algebra: 92
    }
  }
];
