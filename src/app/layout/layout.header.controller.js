(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.layout')
    .controller('HeaderController', HeaderController)
  ;

  /**
   * @ngInject
   */
  function HeaderController(
    $state,
    Auth
  ) {
    var vm = this;

    // Initialize user object
    vm.user = Auth._._._auth;

    /**
     * Method to get provider class for currently authenticated user.
     *
     * @param   {string}  provider
     * @returns {string}
     */
    vm.getProviderClass = function getProviderClass(user) {
      var output = '';

      if (user==null){return;}
      if (user.providerData.length>0){
        var provider = user.providerData[0].providerId;
      }

      switch (provider) {
        case 'facebook.com':
          output = 'mdi-facebook-box';
          break;
        case 'github.com':
          output = 'mdi-github-box';
          break;
        case 'google.com':
          output = 'mdi-google-plus-box';
          break;
        default:
          output = 'mdi-email-outline';
          break;
      }

      return output;
    };

    /**
     * Method to make logout action.
     *
     * @param {Event} $event
     */
    vm.logout = function logout($event) {
      $event.preventDefault();
      $event.stopPropagation();

      Auth._.$signOut();
      //vm.user = false;

      $state.go('events');
    };

    // Watcher for auth status
    // $rootScope.$on('$destroy', $rootScope.$on('userLoggedIn', function (evt, user) {
    //   //vm.user = user;
    // }));
  }
})();
