var wrap = require('co-express');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var modelApplication = require('../models/application.js');
var modelDeveloper = require('../models/developer.js');
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
// api of application
router.post('/add/application',wrap(function* (req, res){
    console.log(req.body);
    let ob = new modelApplication({
        name:req.body.name,
        developer: new ObjectId(req.body.developer),
        description: req.body.description,
        ScreenShots: ['linh']
    });
    try{
       var x = yield ob.save();
       res.json(x);            
    }catch(e){
        res.json(e);
    }
}));
router.post('/remove/application', wrap(function* (req, res){
    console.log(req.body);
    var x = yield modelApplication.findByIdAndRemove({
        _id: req.body._id
    });
    res.json(x);
}));
router.post('/update/application', wrap(function* (req, res){
    console.log(req.body);
    try{
         var x = yield modelApplication.findByIdAndUpdate({
             _id: req.body._id,
    },req.body);
         res.json(x);

    }catch(e){
        req.json(e);
    }
}));

// api of developer
router.post('/add/developer', wrap(function* (req, res){
    let ob = new modelDeveloper({
        name: req.body.name
    });
    try{
        var x = yield ob.save();
        res.json(x);
    }catch(e){
        res.json(e);
    }

}));
router.post('/remove/developer', wrap(function* (req, res){
    try{
        var x = yield modelDeveloper.findByIdAndRemove({
             _id:req.body._id
        });
        res.json(x);
    }catch(e){
        res.json(e);
    }

}));
router.post('/update/developer',wrap(function* (req, res){
    try{
        var x = yield modelDeveloper.findByIdAndUpdate({
            _id: req.body._id
        },req.body);
        res.json(x);
    }catch(e){
        res.json(e);
    }
}));
module.exports = router;