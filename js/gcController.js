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
		$scope.editResident = false;
		$scope.editedResident = {};

		$scope.loadResidents = function(){
        	gcFactory.getResidents().then(success, $scope.error);

            function success(data){            	
                $scope.residents = data;
            }	
        }

        $scope.success = function(){
        	$scope.loadResidents();
        }

        $scope.error = function(errMsg){
        	console.log("Loading error : ", errMsg);
        }
        
        $scope.applyAgeFilter = function(limit){        	
        	$scope.ageLimit = limit;
        }
        $scope.applyProfessionFilter = function(prof){
        	$scope.profession = prof;
        }

        $scope.addResident = function(){
            $scope.newResident.imageUrl = "https://dl.dropboxusercontent.com/s/4n40s52m59uqd5f/defaultImage.jpg?dl=0";  
        	gcFactory.addResident($scope.newResident).then($scope.success, $scope.error);        	
        	$scope.newResident = {};
        }

        $scope.showEditResident = function(resident){        	
        	$scope.editedResident = resident;
            if(!$scope.editResident){
                $scope.toggleEditResidentForm();
            }        	
            window.location.href = "#navBar";
        }

        $scope.updateResident = function(){        	
        	gcFactory.editResident($scope.editedResident).then($scope.success, $scope.error);
        	$scope.editedResident = {};
        }

        /*$scope.deleteResident = function(resident){
        	gcFactory.deleteResident(resident).then(function(){
        		console.log("Delete Success");
        	}, $scope.error);
        }*/

        $scope.toggleAddResidentForm = function(){        	
        	$scope.addNewResident = !$scope.addNewResident;        	
        }

        $scope.toggleEditResidentForm = function(){        	
        	$scope.editResident = !$scope.editResident;
        }


        $scope.loadResidents();

	});