var app = angular.module('myApp', ["ngRoute", 'ngMessages', 'ngCookies']);
console.log(app)
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/dashboard.html'
        })
        .when('/products',{

            templateUrl: '/partials/products.html'
        })
        .when('/orders',{

            templateUrl: '/partials/orders.html'
        })
        .when('/customers',{

            templateUrl: '/partials/customers.html'
        })
        .otherwise('/')
})