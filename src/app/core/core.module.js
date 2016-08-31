(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.core', [
      'ngAnimate',
      //'ngTouch', // already implemented by ngMaterial
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ui.router',
      'ngMaterial',
      'toastr',
      'firebase',
      'davcs86.meetupPlanner.components.exception',
      'davcs86.meetupPlanner.components.logger',
      'davcs86.meetupPlanner.components.router'
    ])
  ;
})();
