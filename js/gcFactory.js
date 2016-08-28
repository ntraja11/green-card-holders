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
                  }

                  /*editContact: function(id){
                    var deferred = $q.defer();

                    $http.put(url+"/"+id, config)
                      .success(function(data){
                        deferred.resolve(data);
                      })
                      .error(function(error){
                        deferred.reject(error);
                      });
                      return deferred.promise;
                  },*/

                  /*deleteContact: function(id){
                    var deferred = $q.defer();
                    
                    $http.delete(url+"/"+id, config, true)
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