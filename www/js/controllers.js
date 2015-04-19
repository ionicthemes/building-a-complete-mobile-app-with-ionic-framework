angular.module('jsconfuy.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('SpeakersCtrl', function($scope) {

})

.controller('VenueCtrl', function($scope) {

})

.controller('AgendaCtrl', function($scope) {

})

.controller('EventCtrl', function($scope, $stateParams) {
  $scope.eventId = $stateParams.eventId;
})

;
