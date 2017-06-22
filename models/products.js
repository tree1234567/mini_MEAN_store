var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    // bcrypt = require('bcrypt');


productSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        unique : true,
        minlength : [2, 'Name is too short']
    },
    img_path : {
        type : String,
        required : true,

    },
    description : {
        type : String,
        required : true,
        minlength : [2, "Description too short"]
    },
    quantity : {
        type : Number,
        required : true,
        min : 1,
        max : 50,

    } 


},{timestamps : true})

mongoose.model('Products', productSchema);