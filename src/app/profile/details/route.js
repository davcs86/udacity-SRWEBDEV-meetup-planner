(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.profile.details')
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
        state: 'profile.details',
        config: {
          url: '/profile/{profileId}',
          //parent: 'davcs86_meetupPlanner',
          title: 'Profile',
          //containerClass: 'about-container',
          views: {
            'content@': {
              templateUrl: 'app/profile/details/index.html',
              controller: 'ProfileController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }
})();
