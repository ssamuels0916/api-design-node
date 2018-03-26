const express = require('express');
const app = express();
const fs = require('fs');
var jsonData = {count: 16, message: 'hey'};


// model data first
/*
  {
    "user": 'hope',
    "id": 1,
    "role": 'mother',
    "job": 'nurse'
  }
*/
//CRUD access resource users
/* Blueprint RESTFUL Routes
  {
    "GET /users": {
      "desc": 'returns all users',
      "response" :"200 application/json",
      "data": [{}, {}, {}]
  },
    "GET /users/:id" : {
      "desc": 'returns one user by their id',
      "response" :"200 application/json",
      "data": {}
  },
    "POST /users": {
    "desc": 'create and return a new user using posted object as user',
    "response" :"201 application/json",
    "data": {}
  },
    "PUT /users/:id": {
    "desc": 'updates and returns the matching user with the posted update object',
    "response" :"200 application/json",
    "data": {}
  },
    "DELTE /users/:id": {
    "desc": 'deletes and returns the matching user',
    "response" :"200 application/json",
    "data": {}
  },
*/

app.get('/', function (req, res) {
  fs.readFile('index.html', function (err, buffer) {
    const html = buffer.toString();
    res.setHeader('Content-type', 'text/html');
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(html);
    }
  });
});

app.get('/data', function (req, res) {
  res.json(jsonData);
});

const port = 3000;

app.listen(port, ()=> console.log('listening on port 3000'));
