(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.events')
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
        state: 'events',
        config: {
          abstract: true,
          parent: 'davcs86_meetupPlanner'
        }
      }
    ];
  }
})();
