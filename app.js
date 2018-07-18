/**
 * file : app.js
 * 파일 업로드를 테스트 하기 위한 간단한 코드 작성
 * 
 * To be completed
 *  - multer 를 이용하였음.
 *  - 한 개의 파일 업로드는 가능함.
 * To do list
 *  - 파일 이름 추출하는 문제
 *  - 여러 개의 파일을 동시에 업로드 하는 문제
 *  - web client가 아닌 vb/c# client를 붙이는 문제
 */
var express = require('express')
var bodyParser = require('body-parser');
var router = require('./router'); // defulat : index(.js)

/* =======================
    LOAD THE CONFIG
==========================*/
//const config = require('./config')
const port = process.env.PORT || 3002

/* =======================
    EXPRESS CONFIGURATION
==========================*/
var app = express();
//app.set('jwt-secret', config.secret)

/** ======================================================
 * app.use(bodyParser.urlencoded({ extended: false }));
 * => req.body : { 'array[key1][key2]': '233' }
 * app.use(bodyParser.urlencoded({ extended: true })); 
 * => req.body : { array: { key1: { key2: '233' } } }
 ======================================================== */
// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({ limit : '50mb', parameterLimit:100000, extended: true}));
app.use(bodyParser.json( { limit: '50mb'}));

app.listen(port, function() {
    console.log('start app, express server on port ' + port);
})

app.use(router);

module.exports = app;