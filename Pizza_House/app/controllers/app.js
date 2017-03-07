'use strict';

//Define an angular module for our app
var pizzaApp = angular.module('pizzaApp', ['ngRoute']);

//Define Routing for app
pizzaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
		templateUrl: 'products.html',
		controller: 'productsCtrl'
	}).
      when('/order', {
		templateUrl: 'order.html',
		controller: 'orderCtrl'
      }).
    when('/home', {
		templateUrl: 'home.html',
      }).
    when('/mycart', {
		templateUrl: 'mycart.html',
        controller: 'mycartCtrl'
      })
      .otherwise('/home');
}]);

pizzaApp.factory('finalOrderService', function() {
 var order = {}
 function set(data) {
   order = data;
 }
 function get() {
  return order;
 }

 return {
  set: set,
  get: get
 }

});
