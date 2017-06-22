var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var orderSchema = new mongoose.Schema({
    _customer : {
        type: Schema.Types.ObjectId, ref : 'Users'
    },
    _product : {
        type: Schema.Types.ObjectId, ref : "Products"
    },
    amount : {
        type: Number,
        min : 1,
        max : 15
    }


},{timestamps: true});

mongoose.model('Orders', orderSchema);