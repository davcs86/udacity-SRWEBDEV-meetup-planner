(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.auth.services')
    .factory('Auth', Auth)
  ;

  /**
   * @ngInject
   */
  function Auth($window, config, $firebaseAuth) {
    $window.firebase.initializeApp(config);
    return $firebaseAuth();
  }
})();
