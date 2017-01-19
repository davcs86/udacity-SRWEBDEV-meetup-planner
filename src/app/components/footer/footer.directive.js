'use strict';

import footerTpl from './footer.html';

function footerComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: footerTpl,
    controller: FooterController,
    controllerAs: 'footer',
    bindToController: true
  };

  return directive;

  function FooterController () {
	  $log.debug('Hello from footer controller!');
  }

}

export default footerComponent;
