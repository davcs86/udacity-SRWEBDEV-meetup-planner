(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.auth.login')
    .controller('LoginController', LoginController)
  ;

  /**
   * @ngInject
   */
  function LoginController(
    $state,
    dataservice, logger
  ) {
    var vm = this;

    /**
     * Method to make actual login via specified provider to Firebase backend.
     *
     * @param {string}  provider  Name of the used provider, this is one of following:
     *                              - facebook
     *                              - github
     *                              - google
     */
    vm.login = function(provider) {
      var ref = dataservice.getReference();

      /**
       * Login callback function which handles possible login errors and redirection if all is ok.
       *
       * @param {object}  error
       * @param {object}  authData
       */
      var callback = function(error, authData) {
        if (error) {
          logger.error('Login Failed!', error);
        } else {
          logger.log('auth data', authData);
          logger.success('Login successfully!');

          $state.go('eventlist');
        }
      };

      // Specify used options for Firebase auth
      var options = {
        remember: 'sessionOnly',
        scope: (provider !== 'github') ? 'email' : 'user:email'
      };

      // And make actual user authentication
      ref.authWithOAuthPopup(provider, callback, options);
    };
  }
}());
