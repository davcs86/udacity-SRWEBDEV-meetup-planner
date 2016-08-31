(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.core')
    .run(appRun)
  ;

  /**
   * @ngInject
   */
  function appRun(
    $rootScope,
    routerHelper
  ) {
    // Set default state to be 404 page
    routerHelper.configureStates(getStates(), '/404');

    // Add success handler for route change
    $rootScope.$on('$destroy', $rootScope.$on('$stateChangeSuccess', stateChangeSuccess));

    function stateChangeSuccess(event, toState) {
      $rootScope.containerClass = toState.containerClass;
    }
  }

  function getStates() {
    return [
      {
        state: '404',
        config: {
          url: '/404',
          title: '404',
          parent: 'davcs86_meetupPlanner',
          views: {
            'content@': {
              templateUrl: 'app/core/404.html'
            }
          }
        }
      }
    ];
  }
})();
