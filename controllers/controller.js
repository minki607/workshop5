var mongoose = require('mongoose');
var User = mongoose.model('users');




var createUser = function(req,res){
    var user = new User({
        "name":req.body.name,
        "email":req.body.email,
        "address":req.body.address,
        "bio":req.body.bio,
        "image":req.body.image
    });
    user.save(function(err,newUser){
        if(!err){
            res.send(newUser);
        }else{
            res.sendStatus(400);
        }
    });

};

var listUser = function(req,res){
    User.find(function(err,users){
        if(!err){
            res.send(users);
        }else{
            res.sendStatus(404);
        }
    });
};

var findbyID = function(req,res){
    var userId = req.params.id;
    User.findById(userId,function(err,user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createUser = createUser;
module.exports.listUser = listUser;
module.exports.findbyID= findbyID;