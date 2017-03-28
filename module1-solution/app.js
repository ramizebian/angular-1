(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.messageOutput = "";
  $scope.lunchItems = "";

  $scope.displayMessage = function () {
      if ($scope.lunchItems.length == 0) {
      		//Textbox is empty
	  		$scope.messageOutput = "Please enter data first";
	  } 
	  else{
	  		//Textbox contains data
	  		var arrLunchItems = $scope.lunchItems.split(",");
	  		if (arrLunchItems.length <= 3)
	  		{
	  			$scope.messageOutput = "Enjoy!";
	  		}
	  		else{
	  			$scope.messageOutput = "Too much!";
	  		}
	  }
  };
}

})();