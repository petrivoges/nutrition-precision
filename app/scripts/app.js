'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('NutritionPrecision', ['ionic', 'UserApp', 'NutritionPrecision.controllers', 'NutritionPrecision.services'])

.run(function($ionicPlatform, user) {
  user.init({ appId: '534da3fc24110' });
  // console.log(user);
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // the login with facebook route
    .state('login-facebook', {
      url: '/login-facebook',
      templateUrl: 'templates/login-facebook.html',
      data: {
        login: true
      }
    })

    // the login route
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      data: {
        public: true
      }
    })

    // the signup route
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      data: {
        public: true
      }
    })
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:
    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('tab.foodgroups', {
      url: '/foodgroups',
      views: {
        'tab-foodgroups': {
          templateUrl: 'templates/tab-foodgroups.html',
          controller: 'FoodGroupsCtrl'
        }
      }
    })
    .state('tab.foods', {
      url: '/foodgroup/:groupId',
      views: {
        'tab-foodgroups': {
          templateUrl: 'templates/foods.html',
          controller: 'FoodCtrl'
        }
      }
    })
    .state('tab.food-detail', {
      url: '/fooddetail/:id',
      views: {
        'tab-foodgroups': {
          templateUrl: 'templates/food-detail.html',
          controller: 'FoodDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

