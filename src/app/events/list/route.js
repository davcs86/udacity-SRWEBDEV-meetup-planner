(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.events.list')
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
        state: 'events.list',
        config: {
          url: '/',
          //parent: 'davcs86_meetupPlanner',
          title: 'Events',
          //containerClass: 'about-container',
          views: {
            'content@': {
              templateUrl: 'app/events/list/index.html',
              controller: 'ListController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }
})();
