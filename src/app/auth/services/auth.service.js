(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.auth.services')
    .service('Auth', Auth)
  ;

  /**
   * @ngInject
   */
  function Auth($window, config, $firebaseAuth, $state, $log, logger) {
    $window.firebase.initializeApp(config);
    this.$state = $state;
    this.$log = $log;
    this.logger = logger;
    this._ = $firebaseAuth();
    this._.$onAuthStateChanged(function(){
      $state.go('events');
    });
  }

  Auth.prototype.callbackSuccess = function(){
    this.logger.success('Login successful!');
    this.$state.go('events');
  };

  Auth.prototype.callbackError = function(error){
    if (error.code === 'auth/account-exists-with-different-credential'){
      this.logger.error('You have already signed up with a different auth provider for that email. Login with that provider, then link the account from the profile page.');
    } else {
      this.logger.error('Login Failed!', error);
    }
  };

  Auth.prototype.signInWithProvider = function(provider){
    var that = this;
    this._.$signInWithPopup(provider)
      .then(
        function(){that.callbackSuccess();} ,
        function(error){that.callbackError(error);}
      )
    ;
  };

})();
