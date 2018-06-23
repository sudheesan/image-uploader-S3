/**
 * 
 */

var app = angular.module('ImageUploadApp',['ui-notification']).config(['NotificationProvider', function (NotificationProvider) {
    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 10,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'center',
        positionY: 'top'
    });
   
}]);