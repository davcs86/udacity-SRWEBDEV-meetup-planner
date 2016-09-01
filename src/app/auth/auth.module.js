(function() {
  'use strict';

  angular
    .module('davcs86.meetupPlanner.auth', [
      'davcs86.meetupPlanner.auth.login',
      'davcs86.meetupPlanner.auth.register',
      //'davcs86.meetupPlanner.auth.forgotpwd',
      'davcs86.meetupPlanner.auth.services'
    ])
  ;
})();
