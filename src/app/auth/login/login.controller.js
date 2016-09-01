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
    Auth, $state, logger, $scope
  ) {
    var vm = this;
    vm.loginForm = {
      email: '',
      pwd: ''
    };

    if (Auth._._._auth.currentUser!=null){
      $state.go('events');
    }

    vm.loginWithPassword = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      // trigger messages in UI
      $scope.loginForm.$setSubmitted();
      if ($scope.loginForm.$valid){
        Auth._.$signInWithEmailAndPassword(vm.loginForm.email, vm.loginForm.pwd).then(
          function(){
            logger.success('Login successful');
            $state.go('events');
          },
          function(error){
            var errorMsg = '';
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
            logger.error(errorMsg);
          }
        );
      }
    };

    vm.login = function(provider) {
      // And make actual user authentication
      Auth.signInWithProvider(provider);
    };
  }
}());
