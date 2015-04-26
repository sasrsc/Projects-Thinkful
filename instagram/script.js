


angular.module('myApp',['ngMessages','ngAnimate']).
controller('myController',function($scope,$log,$http) {

	$scope.search="";
	$scope.tag="";

	$scope.submit=function() {
   		$log.info('make http call for: ' + $scope.tag);
   		// blank out current search value
   		//angular.copy($scope.tag,$scope.search);
   		$scope.search=$scope.tag;

   		var clientId="df3f56060e7d457f94ac203e7246afab";
   		var url="https://api.instagram.com/v1/tags/" + $scope.search + "/media/recent";
   		var request = {
   			client_id: "df3f56060e7d457f94ac203e7246afab",
			callback: "JSON_CALLBACK"
		};
		
		$log.info('BEFORE: tag='+$scope.tag + ' search=' +$scope.search);
	    // angular.copy($scope.tag,$scope.search);
	    // $scope.tag="";
	    // $log.info('AFTER: tag='+$scope.tag + ' search=' +$scope.search);


   		$http({
	      	method: 'JSONP',
	      	url: url,
	      	params: request
	    })
	    .success(function(result) {
	      $scope.instagram = result.data;
	      // $scope.analysis = angular.callbacks._0;
	      $log.info($scope.instagram);
	      $scope.tag="";
 			$log.info('AFTER: tag='+$scope.tag + ' search=' +$scope.search);
 			$scope.error=false;
	    })
	    .error(function() {
	      alert('error');
	      $scope.error=true;
	    });	


   		


      	
	};



});