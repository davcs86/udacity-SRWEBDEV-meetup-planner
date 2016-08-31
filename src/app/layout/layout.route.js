(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.layout')
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
              templateUrl: 'app/layout/header.html',
              controller: 'HeaderController',
              controllerAs: 'vm'
            },
            footer: {
              templateUrl: 'app/layout/footer.html',
              controller: 'FooterController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }
})();
