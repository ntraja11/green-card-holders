var url = "https://api.mongolab.com/api/1/databases/ntraja-db/collections/greencard-holders?",
    config = {params:{apiKey:"c7CC9G_bN_JohbYY9DKIi5__KBOYaVkr"}};

angular.module("gcApp")
	.factory("gcFactory", function($http, $q){
        return {                  
                  getResidents: function(){

                    var deferred = $q.defer();

                    $http.get(url, config)
                      .success(function(data){                        
                        deferred.resolve(data);
                      })
                      .error(function(error){                        
                        deferred.reject(error);
                      });
                      return deferred.promise;
                  },

                  addResident: function(resident){
                    var deferred = $q.defer();

                    $http.post(url, resident, config)
                      .success(function(data){
                        deferred.resolve(data);
                      })
                      .error(function(error){
                        deferred.reject(error);
                      });
                      return deferred.promise;
                  },

                  editResident: function(resident){
                    var deferred = $q.defer();                    

                    $http.put(url+"/"+resident._id.$oid, resident, config)
                      .success(function(data){
                        deferred.resolve(data);
                      })
                      .error(function(error){
                        deferred.reject(error);
                      });
                      return deferred.promise;
                  },

                  /*deleteResident: function(resident){
                    var deferred = $q.defer();
                    
                    $http.delete(url+"/"+resident._id.$oid, config, true, {headers: {
                        "Access-Control-Allow-Origin" : "*",
                        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
                    }})
                     .success(function(data){
                       deferred.resolve(data);
                     })
                     .error(function(error){
                       deferred.reject(error);
                     });
                     return deferred.promise;
                  }*/
                  
                }



            });