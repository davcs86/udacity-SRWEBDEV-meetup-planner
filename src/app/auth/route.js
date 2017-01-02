(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.auth')
    .run(moduleRun)
  ;

  /**
   * @ngInject
   */
  function moduleRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'auth',
        config: {
          abstract: true,
          parent: 'davcs86_meetupPlanner'
        }
      }
    ];
  }
})();
