(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.eventlist')
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
          url: '/',
          parent: 'davcs86_meetupPlanner',
          title: 'Events',
          //containerClass: 'about-container',
          views: {
            'content@': {
              templateUrl: 'app/eventlist/eventlist.html',
              controller: 'EventListController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }
})();
