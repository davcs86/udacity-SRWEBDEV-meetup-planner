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
          url: '/profile',
          parent: 'davcs86_meetupPlanner',
          title: 'Profile',
          //containerClass: 'about-container',
          views: {
            'content@': {
              templateUrl: 'app/profile/profile.html',
              controller: 'ProfileController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }
})();
