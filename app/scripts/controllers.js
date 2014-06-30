'use strict';
angular.module('NutritionPrecision.controllers', [])

.controller('DashCtrl', function($scope,$http) {
  $http.get('/static/nutrients.json',{ cache: true})
    .success(function(res){
      $scope.Nutrients = res.data;
    });
  // $http.get('nutrition.json',{ cache: true})
  //   .then(function(res){
  //     $scope.Nutrients = res.data;
  //   });

})

.controller('FoodGroupsCtrl', function($scope, $ionicLoading, FoodGroups) {
  // $scope.friends = Friends.all();
  $scope.loadingIndicator = $ionicLoading.show({
    content: 'Loading Data',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 200,
    showDelay: 500
  });
  FoodGroups.getAllFoodGroups().success(function(foodGroups) {
    $scope.foodGroups = foodGroups; 
    $ionicLoading.hide();
  });
})

.controller('FoodCtrl', function($scope, $stateParams, $ionicLoading, Nutrition) {
  $scope.data = {
    showDelete: false
  };
  $scope.loadingIndicator = $ionicLoading.show({
    content: 'Loading Data',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 200,
    showDelay: 500
  });
  Nutrition.getAllFoods($stateParams.groupId).success(function(foods) {
    $scope.foods = foods;
    $ionicLoading.hide();
  });
  $scope.clearSearch = function() {
    $scope.food.description = '';
  };
})

.controller('FoodDetailCtrl', function($scope, $stateParams, $ionicLoading, Nutrition) {
  // $scope.friend = Friends.get($stateParams.friendId);
  $scope.loadingIndicator = $ionicLoading.show({
    content: 'Loading Data',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 200,
    showDelay: 500
  });
  Nutrition.getFoodDetail($stateParams.id).success(function(details) {
  	// console.log(details[0]);
    $scope.description = details[0].description;
  	$scope.weights = details[0].weights;
  	$scope.nutrients = details[0].nutrients;
    var log = [];
    var logObj = {};
    var test = [];
    angular.forEach(details[0].nutrients, function(value, key){
      if(value.units === 'g' && value.amountPer100G > 0){
        test.push( value.description );
        test.push( value.amountPer100G );
        log.push(test);
        test = [];
        logObj[value.description] = "bar";
      }
    });
    // console.log(logObj);
    var detail = c3.generate({
      data: {
          columns: log,
            types: logObj
      },
      color: {
          pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
      }
    });
    $ionicLoading.hide();
  });

  $scope.topTen = function(item){
    return (item.units === 'g' && item.amountPer100G > 0);
  };
})

.controller('AccountCtrl', function($scope) {
});