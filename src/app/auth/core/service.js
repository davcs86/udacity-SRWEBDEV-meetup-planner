(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.auth')
    .service('Auth', Auth)
  ;

  /**
   * @ngInject
   */
  function Auth($window, config, $firebaseAuth, $state, $log, logger) {
    var that = this;
    $window.firebase.initializeApp(config);
    angular.extend(this,
      {
        $state : $state,
        $log : $log,
        logger : logger,
        authObj : $firebaseAuth(),
        currentUser : null
      }
    );

    this.authObj.$onAuthStateChanged(function(user){
      if (user){
        that.callbackSuccess(user);
      } else {
        that.callbackError();
      }
    });
  }

  Auth.prototype.callbackSuccess = function(user){
    this.currentUser = user;
    this.$state.go('events.list', {}, {reload: true});
  };

  Auth.prototype.callbackError = function(error){
    if (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        this.logger.error('You have already signed up with a different auth provider for that email. Login with that provider, then link the account from the profile page.');
      } else {
        this.logger.error('Login Failed!', error);
      }
    }
    this.currentUser = null;
    this.$state.go('events.list', {}, {reload: true});
  };

  Auth.prototype.signInWithProvider = function(provider){
    var that = this;
    this.authObj.$signInWithPopup(provider)
      .then(
        function(user){that.callbackSuccess(user.user);} ,
        function(error){that.callbackError(error);}
      )
    ;
  };

})();
