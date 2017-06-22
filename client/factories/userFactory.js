app.factory('userFactory', function ($http) {
    var factory = {};
    factory.users = [];
    
    factory.getUsers = function (callback) {
        $http.get('/users').then(function (res) {
            factory.users = res.data.users
            callback(factory.users);
        })
    }
    
    factory.createUser = function (userObj, reloadUsersInScope, setError) {
        $http.post('/users/new', userObj).then(function (res) {
            if (res.data.success) {
                factory.getUsers(reloadUsersInScope)
                setError(res.data.message)
            } else {
                setError(res.data.message);
            }

        })

    }
    factory.deleteUser = function(userId, reloadUsersInScope){
        var id = {user_id : userId}
        $http.post('/users/delete',id).then(function(res){
            if (res.data.success){
                factory.getUsers(reloadUsersInScope);
            }
        })
    }


    return factory;
})

