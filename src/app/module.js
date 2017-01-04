(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner', [
      'davcs86.meetupPlanner.profile',
      'davcs86.meetupPlanner.events',
      'davcs86.meetupPlanner.auth',
      'davcs86.meetupPlanner.core',
      'davcs86.meetupPlanner.layout'
    ])
  ;
})();
