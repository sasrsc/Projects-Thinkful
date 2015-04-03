// Code goes here

angular.module('myApp', [])

.controller('myCtrl', function($scope,$log) {
   
   	$scope.formData=[];
   	$scope.formData.femaleName="Valerie";
   	$scope.formData.tediousTask="Brushing Teeth";
   	$scope.formData.dirtyTask="Cleaning Toilets";
   	$scope.formData.celebrity="Freddie Mercury";
   	$scope.formData.uselessSkill="Speaking Latin";
   	$scope.formData.obnoxiousCelebrity="Too many to name";


	$scope.submit=function() {

		$log.info("OK, let's play");
	};
 
});