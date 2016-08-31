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
    logger, Auth
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
      //var ref = dataservice.getReference();

      var callbackSuccess = function(authData) {
        logger.log('auth data', authData);
        logger.success('Login successfully!');
        $state.go('events');
      };


      var callbackError = function(error) {
        if (error.code === 'auth/account-exists-with-different-credential'){
          callbackSuccess(error.credential);
        } else {
          logger.error('Login Failed!', error);
        }
      };

      // Specify used options for Firebase auth
      // var options = {
      //   remember: 'sessionOnly',
      //   scope: (provider !== 'github') ? 'email' : 'user:email'
      // };

      // And make actual user authentication
      Auth.$signInWithPopup(provider).then(callbackSuccess).catch(callbackError);//, options);
    };
  }
}());
