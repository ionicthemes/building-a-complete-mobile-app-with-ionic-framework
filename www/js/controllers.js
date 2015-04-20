angular.module('jsconfuy.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('SpeakersCtrl', function($scope, $http, Speakers) {
  $scope.speakers = [];

  Speakers.get()
  .then(function(speakers){
    $scope.speakers = speakers;
  },function(err){
  });
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


.controller('AgendaCtrl', function($scope, Agenda) {
  $scope.events = [];

  Agenda.get()
  .then(function(events){
    $scope.events = events;
  },function(err){
  });
})

.controller('EventCtrl', function($scope, Agenda, $stateParams) {
  var eventId = $stateParams.eventId;

  Agenda.getEvent(eventId)
  .then(function(event){
    $scope.event = event;
  },function(err){
  });

})
