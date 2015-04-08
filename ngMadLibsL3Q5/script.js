// Code goes here

angular.module('myApp', ['ngMessages']).
controller('myCtrl', function($scope,$log) {
   

$scope.visible=true;
$scope.initial={};
$scope.formData={};

 //   $scope.formData.femaleName='Valerie';
 //   $scope.formData.jobTitle='Travel Agent';
 //   $scope.formData.tediousTask='Reconciling the ARC Report';
	// $scope.formData.dirtyTask='Cleaning Fish';
	// 	$scope.formData.uselessSkill='Speaking Latin';

	// $scope.formData.celebrity='Freddie Mercury';

	// $scope.formData.adjective='colorful';

	// $scope.formData.obnoxiousCelebrity='any rapper';

	// $scope.formData.hugeNumber='32000';

   $scope.submit=function(formData) {
   		$log.info('show madLibs');
      // $scope.initial= angular.copy(formData);
   };

   $scope.reset=function() {
   		$log.info('ShowWords');
      angular.copy($scope.initial,$scope.formData);
   		
   };
 
   	$scope.toggle = function() {
    	$scope.visible = !$scope.visible;
  	};



});