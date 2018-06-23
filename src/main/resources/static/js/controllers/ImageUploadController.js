app.controller('imgUploadController', ['$scope', 'UploadService', 'Notification',function($scope, UploadService,Notification) {


    $scope.uploadImage = function() {

        if ($scope.selectedFile != undefined && $scope.selectedFile != null ) {
            UploadService.uploadImage($scope.selectedFile).then(function(resoponce) {

            	Notification.success("Photo uploaded successfully");
            	$scope.selectedFile={};

            }, function(errResponce) {
            	Notification.error("Error while uploading photo");
            })


        } else {

        	Notification.warning("Please select a photo to upload");
        }

    }

    $scope.fileNameChanged = function(selectedFile) {
        $scope.selectedFile = selectedFile.files[0];

    }

}]);