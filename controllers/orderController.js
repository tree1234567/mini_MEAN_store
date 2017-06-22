var mongoose = require('mongoose'),
    Orders = mongoose.model('Orders')
Products = mongoose.model('Products')
Users = mongoose.model('Users')

module.exports = {

    new: function (req, res) {
        console.log(req.body)
        Products.findOne({ _id: req.body.productId }, function (productErr, product) {
            if (productErr) {
                console.log('Didnt find by Product Id');
            } else {

                if (product.quantity - req.body.quantity < 0) {
                    console.log('Quantity too much')
                    res.json({ message: "You cannot order more than the available quantity", success: false })
                }
                else {
                    var remainder = product.quantity - req.body.quantity
                    Products.update({ _id: product._id }, { $set: { quantity: req.body.quantity } }, function (updateErr, productUpdated) {
                        if (updateErr) {
                            console.log('Failed to make update record')
                            res.json({ message: "Order could not be placed! Try again", success: false })
                        } else {
                            Users.findOne({ _id: req.body.customerId }, function (userErr, user) {
                                if (userErr) {
                                    console.log('Didnt find by User Id')
                                    res.json({ message: "User could not be found!", success: false })
                                }
                                else {
                                    var order = new Orders({
                                        _customer: user._id,
                                        _product: product._id,
                                        amount: req.body.quantity
                                    })
                                    order.save(function (orderCreateErr) {
                                        if (orderCreateErr) {
                                            console.log('order couldnt be created')
                                        } else {
                                            console.log('order Created!')
                                            res.json({ success: true })
                                        }
                                    })
                                }
                            })


                        }
                    })
                }

            }
        })
    },
    allOrders: function (req, res) {
        var promise = Orders.find({}).populate("_product _customer")
        promise.then(function (orders) {
            res.json({ orders: orders })
        })

    }

}

// 