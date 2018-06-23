app.factory('UploadService', ['$http', '$q', function($http, $q) {

    var serviceFactory = {
    		uploadImage:uploadImage
    };

    return serviceFactory;

    function uploadImage(file) {
        var deferred = $q.defer();
        var fd = new FormData();
        fd.append('file', file);
        $http.post('http://localhost:8080/bucket/uploadFile', fd, {
           transformRequest: angular.identity,
           headers: {'Content-Type': undefined}
        })
        .then(function(responce) {
            deferred.resolve(responce.data);

        }, function(errResponse) {
            deferred.reject(errResponse);
        });

        return deferred.promise;


    }


}]);