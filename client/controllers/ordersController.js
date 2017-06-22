app.controller('ordersController', ["$scope", 'productFactory', 'userFactory', "orderFactory", function ($scope, productFactory, userFactory, orderFactory) {
    $scope.products = [];
    $scope.customers = [];
    $scope.orders = [];
    $scope.orderError = [];
    function loadProductsInScope(data) {
        $scope.products = data
    }
    function getUsers(data) {
        $scope.customers = data;
        // console.log($scope.customers)
    }
    function getOrders(data){
        $scope.orders = data
    }



    userFactory.getUsers(getUsers);
    productFactory.getProducts(loadProductsInScope)
    orderFactory.getOrders(getOrders)
    $scope.placeOrder = function(orderObj){
        orderFactory.createOrder(orderObj, getOrders);
    }



}])