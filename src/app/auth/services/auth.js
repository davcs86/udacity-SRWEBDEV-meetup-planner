(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.auth.services')
    .factory('Auth', Auth)
  ;

  /**
   * @ngInject
   */
  function Auth(dataservice, $firebaseAuth) {
    return $firebaseAuth(dataservice.getReference());
  }
})();
