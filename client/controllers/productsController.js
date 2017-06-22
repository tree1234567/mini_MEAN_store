app.controller('productsController', ['$scope', "productFactory",function($scope,productFactory){

$scope.products = [];
$scope.productError = null

productFactory.getProducts(loadProductsInScope)

function loadProductsInScope(data){
    $scope.products = data
}
function setError(message){
    $scope.productError = message
} 

$scope.makeProduct = function(productObj){
    productFactory.makeProducts(productObj, loadProductsInScope, setError);
    $scope.productObj = {};
}

}])