(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.auth.register')
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
        state: 'auth.register',
        config: {
          url: '/register',
          title: 'Register',
          //containerClass: 'login-container',
          views: {
            'content@': {
              templateUrl: 'app/auth/register/register.html',
              controller: 'RegisterController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }

})();
