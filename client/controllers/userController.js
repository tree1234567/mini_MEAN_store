app.controller('userController', ['$scope', 'userFactory', function ($scope, userFactory) {
    $scope.customers = [];
    $scope.userError = null;

    function getUsers(data) {
        $scope.customers = data;
        console.log($scope.customers)
    }

    function setError(message) {
        $scope.userError = message
    }

userFactory.getUsers(getUsers);

    $scope.createUser = function (userObj) {
        userFactory.createUser(userObj, getUsers, setError)
        $scope.userObj = {};
    }
    $scope.deleteUser = function(userId){
        userFactory.deleteUser(userId, getUsers)
    }
}])