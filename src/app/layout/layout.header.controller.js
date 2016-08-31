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
    vm.user = {};

    /**
     * Method to get provider class for currently authenticated user.
     *
     * @param   {string}  provider
     * @returns {string}
     */
    vm.getProviderClass = function getProviderClass(provider) {
      var output = '';

      switch (provider) {
        case 'facebook':
          output = 'mdi-facebook-box';
          break;
        case 'github':
          output = 'mdi-github-box';
          break;
        case 'google':
          output = 'mdi-google-plus-box';
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

      Auth.$signOut();

      $state.go('events');
    };

    // Watcher for auth status
    Auth.$onAuthStateChanged(function onAuth(user) {
      vm.user = user;
    });
  }
})();
