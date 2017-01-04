(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.layout.header')
    .controller('HeaderController', HeaderController)
  ;

  /**
   * @ngInject
   */
  function HeaderController(
    $state,
    $rootScope,
    $scope,
    $log,
    Auth
  ) {
    var vm = this;

    // Initialize user object
    vm.user = Auth.currentUser;

    /**
     * Method to get provider class for currently authenticated user.
     *
     * @returns {string}
     */
    vm.getProviderClass = function getProviderClass() {
      var output = '';
      console.log(vm.user);
      if (vm.user !== null && vm.user.providerData.length > 0) {
        var provider = vm.user.providerData[0].providerId;

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

      Auth.authObj.$signOut();

      $state.go('events.list');
    };

  }
})();
