app.controller('dashboardController', ["$scope", "productFactory", 'userFactory', "orderFactory", function($scope, productFactory, userFactory, orderFactory){
    $scope.products = [];
    $scope.customers = [];
    $scope.orders =[];

    function setProductScope(data){
        $scope.products = data.slice(0,3);
    }
    
    function setCustomers(data){
        $scope.customers = data.slice(0,3);
    }
    function setOrders(data){
        $scope.orders = data;
    }
    productFactory.getProducts(setProductScope)
    userFactory.getUsers(setCustomers);
    orderFactory.getOrders(setOrders);
    




}])