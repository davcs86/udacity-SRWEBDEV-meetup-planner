(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.profile')
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
        state: 'profile',
        config: {
          abstract: true,
          parent: 'davcs86_meetupPlanner'
        }
      }
    ];
  }
})();
