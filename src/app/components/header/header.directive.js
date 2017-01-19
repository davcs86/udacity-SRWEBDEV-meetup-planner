'use strict';

import headerTpl from './header.html';

function headerComponent() {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: headerTpl,
    controller: HeaderController,
    controllerAs: 'header',
    bindToController: true
  };

  return directive;

  function HeaderController (
    $state,
    $scope,
    Auth,
    $rootScope
  ) {
    "ngInject";

    $scope.isCollapsed = false;

    $rootScope.$on('authChanged', function(){
      $scope.user = Auth.currentUser;
    });

    /**
     * Method to make logout action.
     */
    $scope.logout = function logout() {
      Auth.authObj.$signOut();
      $state.go('events', {}, {reload: true});
    };
  }

}

export default headerComponent;
