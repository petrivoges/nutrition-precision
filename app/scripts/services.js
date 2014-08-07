'use strict';
angular.module('NutritionPrecision.services', [])

.factory('Nutrients', function($http) {
  return {
      getNutrients: function() {
          return $http.get('/static/nutrients.json',{cache: true});
        }
    };
})

.factory('FoodGroups', function($http) {
  return {
      getAllFoodGroups: function() {
          // var url = 'https://api.mongolab.com/api/1/databases/np/collections/foodGroup?apiKey=IzEKVlT6yv9SJL_4yiOyIm7zswfZ-V1o&s={"name":1}';
          return $http.get('/static/foodgroups.json',{cache: true});
        }
    };
})

.factory('Nutrition', function($http) {
  return {
      getAllFoods: function(groupId) {
          console.log(groupId);
          // var url = 'https://api.mongolab.com/api/1/databases/np/collections/food?apiKey=IzEKVlT6yv9SJL_4yiOyIm7zswfZ-V1o&f={"nutrients":0,"weights":0,"manufacturer":0,"survey":0}&q={"foodGroup":"'+groupId+'"}&s={"name":1}';
          return $http.get('/static/foodgroup_'+groupId+'.json',{cache: true});
        },
      getFoodDetail: function(id) {
          console.log(id);
          var url = 'https://api.mongolab.com/api/1/databases/np/collections/food?apiKey=IzEKVlT6yv9SJL_4yiOyIm7zswfZ-V1o&f={"manufacturer":0,"survey":0}&q={"_id":"'+id+'"}';
          // return $http.get('/static/fooddetail_'+id+'.json',{cache: true});
          return $http.get(url,{cache: true});
        }
    };
});
