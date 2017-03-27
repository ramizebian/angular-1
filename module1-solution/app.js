(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.messageOutput = "";
  $scope.lunchItems = "";

  $scope.displayMessage = function () {
      if ($scope.lunchItems.length === 0) {
		  		$scope.messageOutput = "Enter lunch items first!";
		  } 
		  else if ($scope.lunchItems.length <= 3) {
		  		$scope.messageOutput = "Enjoy!";
	  	} 
	  	else {
		  		$scope.messageOutput = "Too much!";
	  	}

  };
}

})();