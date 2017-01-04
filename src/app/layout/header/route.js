(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.layout.header')
    .run(moduleRun)
  ;

  /** @ngInject */
  function moduleRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'davcs86_meetupPlanner',
        config: {
          abstract: true,
          views: {
            header: {
              templateUrl: 'app/layout/header/index.html',
              controller: 'HeaderController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }
})();
