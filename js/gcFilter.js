angular.module("gcApp")
	.filter("gcFilter", function(){

		return function(residentList, ageLimit){
			var filtered = [];
			//console.log("From Filter : " + ageLimit);
			angular.forEach(residentList, function(resident){
				if(ageLimit == '1'){
					(parseInt(resident.age) < 25) ? filtered.push(resident) : filtered;
				}else if(ageLimit == '2'){
				 	(parseInt(resident.age) >= 25 && parseInt(resident.age) <= 35) ? filtered.push(resident) : filtered;
				}else{
					(parseInt(resident.age) > 35) ? filtered.push(resident) : filtered;
				}
			});
			if(ageLimit == 'none'){
				return residentList;
			}else{
				return filtered;
			}
		}
	});