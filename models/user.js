var mongoose = require('mongoose');
var userSchema = mongoose.Schema(
    {
        "name":String,
        "email":String,
        "address":String,
        "bio":String,
        "image":String
    }
);

mongoose.model('users',userSchema);










