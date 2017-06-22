var mongoose = require('mongoose'),
    Schema = mongoose.Schema


userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        minlength: [2, "This name is either not present or too short"]
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
        minlength: [2, "This name is either not present or too short"]
    },
},{timestamps:true})

mongoose.model("Users", userSchema);
