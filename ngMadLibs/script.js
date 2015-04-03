// Code goes here

angular.module('myApp', [])

.controller('myCtrl', function($scope,$log) {
   
   	$scope.formData=[];


   	$scope.formData.gender="Male";
   	$scope.formData.name="Richard";
   	$scope.formData.hisher="his";
   	$scope.formData.tediousTask="Brushing Teeth";
   	$scope.formData.dirtyTask="Cleaning Toilets";
   	$scope.formData.celebrity="Freddie Mercury";
   	$scope.formData.uselessSkill="Speaking Latin";
   	$scope.formData.obnoxiousCelebrity="Too many to name";

   	$scope.genderAdjust=function() {

   		$log.info("Gender is " + $scope.formData.gender);
   	  	
   	  	if ($scope.formData.gender=="Male") {
   	   		$scope.formData.name="Richard";
   	   		$scope.formData.hisher="his";
   		} else {
   	   		$scope.formData.name="Valerie";
   	   		$scope.formData.hisher="her";
   		}
   	};

	$scope.submit=function() {

		$log.info("OK, let's play");
	};
 
});