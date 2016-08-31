(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.core')
    .factory('dataservice', dataservice)
  ;

  /**
   * @ngInject
   */
  function dataservice(Firebase, config) {
    return {
      getReference: getReference
    };

    ////////////////////

    function getReference(identifier) {
      identifier = identifier || '';

      return new Firebase(config.firebaseUrl + identifier);
    }
  }
})();
