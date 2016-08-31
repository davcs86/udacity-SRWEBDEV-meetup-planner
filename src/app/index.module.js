(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner', [
      'davcs86.meetupPlanner.eventlist',
      'davcs86.meetupPlanner.auth',
      'davcs86.meetupPlanner.core',
      'davcs86.meetupPlanner.layout'
    ])
  ;
})();
