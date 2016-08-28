angular.module("gcApp")
	.controller("gcControl", function($scope, gcFactory){
		$scope.titleMsg = "Green Card Holders";
		$scope.profession = "";
		$scope.minAge = 20;
		$scope.maxAge = 40;
		$scope.ageLimit = 'none';
		//$scope.ageLimit = {'min': '27', 'max': '36'};
		$scope.residents = [];
		$scope.newResident = {};
		$scope.addNewResident = false;

		$scope.loadResidents = function(){
        	gcFactory.getResidents().then(success, error);

            function success(data){            	
                $scope.residents = data;
                //$scope.toggleContactTable = true;
            }	
            function error(er){
            	console.log("Loading error : ", er);
            }                 
        }
        
        $scope.applyAgeFilter = function(limit){        	
        	$scope.ageLimit = limit;
        }
        $scope.applyProfessionFilter = function(prof){
        	$scope.profession = prof;
        }

        $scope.addResident = function(){   
        	gcFactory.addResident($scope.newResident).then(function(){
        		$scope.loadResidents();
        	}, function (){
        		console.log("Loading error : ", er);
        	});        	
        	$scope.newResident = {};
        }

        $scope.swapForm = function(){
        	$scope.addNewResident = !$scope.addNewResident;
        }


        $scope.loadResidents();

	});