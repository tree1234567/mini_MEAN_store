var mongoose = require('mongoose'),
    Products = mongoose.model('Products'),
    bcrypt = require('bcrypt');


    module.exports = {
        new : function(req, res){
            console.log("method HIt")
            Products.findOne({name: req.body.name}, function(findOneErr, product){
                // console.log(Products.findOne({name: req.body.name}))
                if (findOneErr === null){
                    // console.log("create method Hit")
                    var product = new Products({
                        name: req.body.name,
                        img_path : req.body.img_path,
                        description : req.body.description,
                        quantity: req.body.quantity
                    });
                    product.save(function(err){
                        if (err){
                            // console.log(err)
                            res.json({message:"product already exists", success:false})    
                        }else{
                            res.json({success: true})
                        }
                    })
                }else {
                    // console.log("Final Else Hit")
                    res.json({message: "product already exists", success: false})
                }
            })



        },

    allProducts : function(req, res){
        Products.find({}, function(productfinderr, products){
            if (productfinderr){
                console.log('something broke!')
                res.json({products : []})
            }else{
                res.json({products: products})
            }
        })
    }

    
    }