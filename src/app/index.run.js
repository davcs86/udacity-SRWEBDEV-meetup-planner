(function() {
  'use strict';

  angular
    .module('udacitySrwebdevMeetupPlanner')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
