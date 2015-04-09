// Code goes here

angular.module('myApp', [])

.controller('myCtrl', function($scope,$log) {
   
   	

   	$scope.meal={};
   	$scope.meal.base = 0;
   	$scope.meal.tax = 8.5;
   	$scope.meal.tip = 0; 
	$scope.meal.subtotal = 0; 
	$scope.meal.total = 0; 
	$scope.meal.myEarnings=0;
	$scope.meal.meals=0;
	$scope.meal.avgTip=0;

	var initial = angular.copy($scope.meal);

    $scope.calculate=function(form){
    	
    	if (form.$valid) {
 		$scope.meal.subtotal = $scope.meal.base * $scope.meal.tax * 0.01 + $scope.meal.base;  
 		$scope.meal.tip = $scope.meal.base * $scope.meal.tip * 0.01; 
		$scope.meal.total = $scope.meal.tip + $scope.meal.subtotal; 

		$scope.meal.myEarnings=$scope.meal.myEarnings+$scope.meal.tip;

		$scope.meal.meals++;

		$scope.meal.avgTip=$scope.meal.myEarnings/$scope.meal.meals;
		$log.info('Form is valid - do calculation!');
		} else {
			// form not valid
			$log.info('Form not valid');
			$log.info(form);
		}
    	
    };

    $scope.reset=function() {
    	$log.info('Reseting Form');
    	$scope.meal = angular.copy(initial);
    };




 


      
});