const _ = require('lodash');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

var USERS = [
    { 'id': 1, 'username': 'a'       ,'password': '1' },
    { 'id': 2, 'username': 'ahmad'       ,'password': '123456' },
    { 'id': 3, 'username': 'hussain'     ,'password': '123456' },
];

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); //<-- you can change this with a specific url like http://localhost:4200
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
app.use(bodyParser.json());
app.use(expressJwt({secret: 'app-super-shared-secret'}).unless({path: ['/api/auth']}));

app.get('/', function (req, res) {
    res.send('hello !!')
});
app.post('/api/auth', function(req, res) {
    const body = req.body;

    const user = USERS.find(user => user.username == body.username);
    if(!user || body.password != user.password ) return res.sendStatus(401);
    
    var token = jwt.sign({userID: user.id}, 'app-super-shared-secret', {expiresIn: '2h'});
    res.send({token});
});


app.listen(4000, function () {
    console.log(' API Server listening on port 4000!')
});
