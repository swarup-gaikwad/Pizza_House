pizzaApp.controller('productsCtrl',function($scope, $location) {
    $scope.pizzaBase = [
        { id: 0, name: 'Normal', price: 300 },
        { id: 1, name: 'Thin Crust', price: 350}];
    $scope.toppings =[
        { name: "Anchovies", id: 0, price: 50 }, 
        { name: "Bacon", id: 1, price: 100 }, 
        { name: "Canadian Bacon", id: 2, price: 150 }, 
        { name: "Chicken", id: 3, price: 100 }, 
        { name: "Italian Sausage", id: 4, price: 175 }, 
        { name: "Sausage", id: 5, price: 125 }, 
        { name: "Pepperoni", id: 6, price: 90 }];
    $scope.veggies =[
        { name: "Green Peppers", id: 0, price: 50 }, 
        { name: "Mushrooms", id: 1, price: 25 }, 
        { name: "Onions", id: 2, price: 30 }, 
        { name: "Tomatoes", id: 3, price: 30 }, 
        { name: "Banana Peppers", id: 4, price: 70 }, 
        { name: "Pineapple Tidbits", id: 5, price: 65 }, 
        { name: "Ripe Olives", id: 6, price: 95 },
        { name: "Green Olives", id: 7, price: 90 },
        { name: "Jalapeno Peppers", id: 8, price: 75 }];
    $scope.cheese =[
        { name: "Parmesan/Romano", id: 0, price: 100 }, 
        { name: "Three Cheese Blend", id: 1, price: 150 }];
    $scope.sauces =[
        { name: "Chicken BBQ Pizza Sauce", id: 0, price: 80 }, 
        { name: "Ranch Sauce", id: 1, price: 70 }, 
        { name: "Spinach Alferdo Sauce", id: 2, price: 75 }];
    $scope.sidesAndDesserts =[
        { name: "Chicken Poppers", id: 0, price: 200 }, 
        { name: "Chicken Wings(Roasted)", id: 1, price: 250 }, 
        { name: "Chocolate Chip Cookie", id: 2, price: 150 },
        { name: "Double Chocolate Chip Brownie", id: 3, price: 200 }];
    $scope.extras =[
        { name: "Pepperoncini", id: 0, price: 25 }, 
        { name: "BBQ Dipping Sauce", id: 1, price: 25 }, 
        { name: "Blue Cheese Dipping Sauce", id: 2, price: 25 }, 
        { name: "Buffalo Dipping Sauce", id: 3, price: 25 }, 
        { name: "Cheese Dipping Sauce", id: 4, price: 25 }, 
        { name: "Garlic Sauce", id: 5, price: 25 }, 
        { name: "Garlic Parmesan Sauce", id: 6, price: 25 },
        { name: "Honey Chipotle Sauce", id: 7, price: 25 }];
        
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

});