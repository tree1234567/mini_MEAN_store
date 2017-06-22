app.factory('orderFactory', function($http){
    
    var factory= {};
    factory.orders = [];

    factory.getOrders = function(callback){
        $http.get('/orders').then(function(res){
            factory.orders = res.data.orders
            callback(factory.orders)

        })
    }

    factory.createOrder = function(orderObj, resetOrdersInScope){
        $http.post('/orders/new', orderObj).then(function(res){
            if (res.data.success){
                factory.getOrders(resetOrdersInScope)
            }
            else{
                console.log(res.data.message);
            }

        })
    }
    return factory
})