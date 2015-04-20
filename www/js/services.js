angular.module('jsconfuy.services', [])

.service('Speakers', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('speakers.json')
    .success(function(data) {
      dfd.resolve(data);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
})

.service('Agenda', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('agenda.json')
    .success(function(data) {

      var day1 = _.filter(data, function(event){ return event.date =="day1" }),
          day2 = _.filter(data, function(event){ return event.date =="day2" });

      dfd.resolve({
        "day1": day1,
        "day2": day2
      });
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };

  this.getEvent = function(eventId){
    var dfd = $q.defer();

    $http.get('agenda.json')
    .success(function(data) {
      var event = _.find(data, {id: eventId});
      dfd.resolve(event);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
})

;
