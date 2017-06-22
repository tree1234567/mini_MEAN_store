var mongoose = require('mongoose'),
    Users = mongoose.model('Users'),
    bcrypt = require('bcrypt');



module.exports = {
    allUsers: function(req, res){
        Users.find({}, function(userfinderr,users){
            if(userfinderr){
                console.log('something broke in UserController')
                res.json ({users: []});
            }else{
                res.json({users: users})
            }

        })
    },
    new : function(req,res){
        Users.findOne({firstName: req.body.firstName}, function(findOneErr, user){
            if (findOneErr === null){
                var user = new Users({
                    firstName: req.body.firstName, 
                    lastName: req.body.lastName
                });
                user.save(function(err){
                    if (err){
                        res.json({message: "customer already exists", success:false})
                    }else{
                        res.json({success:true})
                    }
                })
            }else{
                res.json({message:"customer already exists", success:false});
            }
        })
    },

    delete : function(req,res){
        Users.remove({_id: req.body.user_id}, function(err, success){
            if (err){
                console.log("delete method didnt work")

            }else{
                console.log("delete method worked")
                res.json({success: true})
            }
        })


    }



}