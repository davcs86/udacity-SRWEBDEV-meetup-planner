'use strict';

export default function (app) {
  app
    .service('Auth', AuthService);

  function AuthService($firebaseAuth, $state, toaster, $rootScope) {
    'ngInject';
    var that = this;

    angular.extend(this,
      {
        authObj: $firebaseAuth(),
        currentUser: null
      }
    );

    this.authObj.$onAuthStateChanged(function (user) {
      if (user) {
        that.callbackSuccess(user);
      } else {
        that.callbackError();
      }
    });

    this.callbackSuccess = function (user) {
      that.currentUser = user;
      $rootScope.$emit('authChanged');
      $state.go('events', {}, {reload: true});
    };

    this.callbackError = function (error) {
      if (error) {
        if (error.code === 'auth/account-exists-with-different-credential') {
          toaster.error('Login Failed!', 'You have already signed up with a different auth provider for that email. Login with that provider, then link the account from the profile page.');
        } else {
          toaster.error('Login Failed!', error);
        }
      }
      that.currentUser = null;
      $rootScope.$emit('authChanged');
      //$state.go('events', {}, {reload: true});
    };

    this.signInWithProvider = function (provider) {
      var that2 = that;
      that.authObj.$signInWithPopup(provider)
        .then(
          function (user) {
            that2.callbackSuccess(user.user);
          },
          function (error) {
            that2.callbackError(error);
          }
        );
    };

    this.createUserWithPassword = function(name, email, password){
      var that = this;
      this.authObj.$createUserWithEmailAndPassword(email, password).then(
        function () {
          toaster.success('Success', 'User was created successful');
          // save display name
          that.authObj.$getAuth()
            .updateProfile({
              displayName: name
            }).then(function () {
              $state.go('events', {}, {reload: true});
            },
            function () {
              $state.go('events', {}, {reload: true});
            });
        },
        function (error) {
          var errorMsg = '';
          switch (error.code) {
            case 'auth/invalid-email':
              errorMsg = 'E-mail address is not valid';
              break;
            case 'auth/email-already-in-use':
              errorMsg = 'There is already an user with that e-mail';
              break;
            case 'auth/weak-password':
              errorMsg = 'Weak password';
              break;
            default:
              errorMsg = 'Error contacting server';
              break;
          }
          toaster.error('Error', errorMsg);
        }
      );
    };

    this.signInWithPassword = function(email, password){
      return this.authObj.$signInWithEmailAndPassword(email, password).then(
        function(){
          toaster.success('Welcome back!', null);
          $state.go('events', {}, {reload: true});
        },
        function(error){
          let errorMsg = '';
          switch(error.code){
            case 'auth/invalid-email':
              errorMsg = 'E-mail address is not valid';
              break;
            case 'auth/user-disabled':
              errorMsg = 'User blocked';
              break;
            case 'auth/user-not-found':
              errorMsg = 'There is no user with that e-mail';
              break;
            case 'auth/wrong-password':
              errorMsg = 'Invalid password (or empty)';
              break;
            default:
              errorMsg = 'Error contacting server';
              break;
          }
          toaster.error('Error', errorMsg);
        }
      );
    }
  }

}
