/**
 * file name : /router/index.js
 */
var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var path = require('path')

var multer = require('multer');
var storage = multer.diskStorage( {
    destination : function(req, file, cb) {
        cb(null, 'uploads/');  // 주의! /uploads 폴더에 저장됨!
    },
    filename : function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
var upload = multer( { storage : storage });


router.use(function timeLog(req, res, next) {
    console.log('Router main Time: ', dateFormat(Date.now(), 'isoDateTime'));
    next();
});


router.post('/upload/file', upload.single('ato_files'), function(req, res) {
    if( !req.file) {
        console.log("No file received");
        res.json( {"message" : "No file" } );
    }
    else {
        //res.json( { 'message' : '파일 업로드 성공'});
        res.redirect('/upload');
    }
    
})


router.get('/upload', function(req, res) {
    //res.sendFile(path.join(__dirname + '/uploadfile.html'));
    res.sendFile(path.join(__dirname + '/kendo.html'));
});



module.exports = router;