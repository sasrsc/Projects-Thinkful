// Code goes here

angular.module('myApp', [])

.controller('myCtrl', function($scope,$log) {
   
   	
	// var foo=1;
	// var bar=2;

	// console.log(foo);
	// console.log(bar);

	// foo=bar;

	// console.log(foo);
	// console.log(bar);

	// bar=3;

	// console.log(foo);
	// console.log(bar);

	// create initial default object with defaults 
	var initial ={};

 //   	$scope.meal={}; //new object
 //   	$scope.meal.base = 0;
 //   	$scope.meal.tax = 8.5;
 //   	$scope.meal.tip = 0; 
	// $scope.meal.subtotal = 0; 
	// $scope.meal.total = 0; 
	// $scope.meal.myEarnings=0;
	// $scope.meal.meals=0;
	// $scope.meal.avgTip=0;

	// default values 
	initial.base = 0;
   	initial.tax = 8.5;
   	initial.tip = 0; 
	initial.subtotal = 0; 
	initial.total = 0; 
	initial.myEarnings=0;
	initial.meals=0;
	initial.avgTip=0;

	// copy the initial value with defaults and make it the meal object
	$scope.meal = angular.copy(initial);
	// var initial = $scope.meal;
	//$scope.meal = initial;

    $scope.calculate=function(form){
    	
    	if (form.$valid) {
 		$scope.meal.subtotal = $scope.meal.base * $scope.meal.tax * 0.01 + $scope.meal.base;  
 		$scope.meal.tip = $scope.meal.base * $scope.meal.tip * 0.01; 
		$scope.meal.total = $scope.meal.tip + $scope.meal.subtotal; 

		$scope.meal.myEarnings=$scope.meal.myEarnings+$scope.meal.tip;

		$scope.meal.meals++;

		$scope.meal.avgTip=$scope.meal.myEarnings/$scope.meal.meals;
		$log.info('Form is valid - do calculation!');
		console.log('Initial Total='+initial.total);
		} else {
			// form not valid
			$log.info('Form not valid');
			$log.info(form);
		}
    	
    };

    // doing angular copy resets everything in one swoop 
    $scope.reset=function() {
    	$log.info('Reseting Form');
    	console.log('Initial Total='+initial.total);
    	// $scope.meal = angular.copy(initial);
    	//$scope.meal = initial;
    	
    	
 	$scope.meal.base = 0;
   	$scope.meal.tax = 8.5;
   	$scope.meal.tip = 0; 
	$scope.meal.subtotal = 0; 
	$scope.meal.total = 0; 
	$scope.meal.myEarnings=0;
	$scope.meal.meals=0;
	$scope.meal.avgTip=0;

console.log('Initial Total='+initial.total);
console.log('Scope Meal Total='+$scope.meal.total);
    };




 


      
});