/* global moment:false, firebase: false */
(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.core')
    .constant('moment', moment)
    .constant('Firebase', firebase)
  ;
})();
