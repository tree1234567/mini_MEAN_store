var userController = require('./../controllers/userController.js');
var productController = require('./../controllers/productController.js')
var orderController = require('./../controllers/orderController.js')

module.exports = function(app){
    app.get('/users', userController.allUsers)
    app.post('/users/new', userController.new)
    app.post('/users/delete', userController.delete)
    app.post('/products/new', productController.new)
    app.get('/products', productController.allProducts)
    app.get('/orders', orderController.allOrders)
    app.post('/orders/new',orderController.new) 
    // app.post('/api/users/new', userController.new)
    // app.post('/api/users/login', userController.login)

}