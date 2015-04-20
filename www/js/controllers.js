angular.module('jsconfuy.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('SpeakersCtrl', function($scope) {

})

.controller('VenueCtrl', function($scope) {
  //map with venue position
  $scope.position = {
    lat: -34.892589,
    lng: -56.194638
  };

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });
})

.controller('AgendaCtrl', function($scope) {

})

.controller('EventCtrl', function($scope, $stateParams) {
  $scope.eventId = $stateParams.eventId;
})

;
