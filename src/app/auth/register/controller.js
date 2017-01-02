(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.auth.register')
    .controller('RegisterController', RegisterController)
  ;

  /**
   * @ngInject
   */
  function RegisterController(
    Auth, $state, logger, $scope
  ) {
    var vm = this;
    vm.registerForm = {
      name: '',
      email: '',
      pwd: '',
      pwd1: ''
    };

    if (Auth._._._auth.currentUser!=null){
      logger.log(Auth._.$getAuth());
      $state.go('events');
    }

    vm.createUserWithPassword = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      // trigger messages in UI
      $scope.registerForm.$setSubmitted();
      if ($scope.registerForm.$valid){
        Auth._.$createUserWithEmailAndPassword(vm.registerForm.email, vm.registerForm.pwd).then(
          function(){
            logger.success('User was created successful');
            // save display name
            Auth._.$getAuth()
              .updateProfile({
                displayName: vm.registerForm.name
              }).then(function(){
                logger.log('+');
                $state.go('events');
              },
              function(){
                logger.log('-');
                $state.go('events');
              });
          },
          function(error){
            var errorMsg = '';
            switch(error.code){
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
            logger.error(errorMsg);
          }
        );
      }
    };

    vm.register = function(provider) {
      // Register with social media
      Auth.signInWithProvider(provider);
    };
  }
}());
