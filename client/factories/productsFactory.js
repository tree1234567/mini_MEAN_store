app.factory('productFactory', function($http){

var factory = {};
factory.products = [];

factory.getProducts = function(callback){
    $http.get('/products').then(function(res){
        console.log(res)
        factory.products = res.data.products
        callback(factory.products);
    })
}

factory.makeProducts = function(productObj, loadProductsInScope, setError){
    $http.post('/products/new', productObj).then(function(res){
        if (res.data.success){
            factory.products = res.data.products
            factory.getProducts(loadProductsInScope)
            setError(res.data.message)
        }else{
            setError(res.data.message)


        }
    })
}
return factory;


})