(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.auth.login')
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
        state: 'auth.login',
        config: {
          url: '/login',
          title: 'Login',
          //containerClass: 'login-container',
          views: {
            'content@': {
              templateUrl: 'app/auth/login/login.html',
              controller: 'LoginController',
              controllerAs: 'vm',
              resolve: {
                _user: _user
              }
            }
          }
        }
      }
    ];
  }

  /**
   * @ngInject
   */
  function _user(Auth) {
    return Auth.$waitForAuth();
  }
})();
