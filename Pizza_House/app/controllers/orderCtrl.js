
pizzaApp.controller('orderCtrl',function($scope, $location, $interval, finalOrderService) {
    $scope.finalTotal = 0;
    $scope.finalOrder = [];
    $scope.pizzaBase = [
        { id: 0, name: 'Normal', price: 300 },
        { id: 1, name: 'Thin Crust', price: 350}];
    $scope.selectedPizzaBase = {};
    $scope.toppings =[
        { name: "Anchovies", id: 0, price: 50 }, 
        { name: "Bacon", id: 1, price: 100 }, 
        { name: "Canadian Bacon", id: 2, price: 150 }, 
        { name: "Chicken", id: 3, price: 100 }, 
        { name: "Italian Sausage", id: 4, price: 175 }, 
        { name: "Sausage", id: 5, price: 125 }, 
        { name: "Pepperoni", id: 6, price: 90 }];
    $scope.selectedTopping = [];
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
    $scope.selectedVeggies = [];
    $scope.cheese =[
        { name: "Parmesan/Romano", id: 0, price: 100 }, 
        { name: "Three Cheese Blend", id: 1, price: 150 }];
    $scope.selectedcheese = {};
    $scope.cheeseRadio = false;
    $scope.sauces =[
        { name: "Chicken BBQ Pizza Sauce", id: 0, price: 80 }, 
        { name: "Ranch Sauce", id: 1, price: 70 }, 
        { name: "Spinach Alferdo Sauce", id: 2, price: 75 }];
    $scope.selectedSauces = [];
    $scope.sidesAndDesserts =[
        { name: "Chicken Poppers", id: 0, price: 200 }, 
        { name: "Chicken Wings(Roasted)", id: 1, price: 250 }, 
        { name: "Chocolate Chip Cookie", id: 2, price: 150 },
        { name: "Double Chocolate Chip Brownie", id: 3, price: 200 }];
    $scope.selectedSidesAndDesserts = [];
    $scope.extras =[
        { name: "Pepperoncini", id: 0, price: 25 }, 
        { name: "BBQ Dipping Sauce", id: 1, price: 25 }, 
        { name: "Blue Cheese Dipping Sauce", id: 2, price: 25 }, 
        { name: "Buffalo Dipping Sauce", id: 3, price: 25 }, 
        { name: "Cheese Dipping Sauce", id: 4, price: 25 }, 
        { name: "Garlic Sauce", id: 5, price: 25 }, 
        { name: "Garlic Parmesan Sauce", id: 6, price: 25 },
        { name: "Honey Chipotle Sauce", id: 7, price: 25 }];
    $scope.selectedExtras = [];
    $scope.pizzaBaseValidation = false;
    $scope.toppingValidationMax = false;
    $scope.toppingValidation = false;
    $scope.veggiesValidationMax = false;
    $scope.veggiesValidation = false;
    $scope.cheeseValidation = false;
    $scope.sauceValidation = false;
    
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.togglePizzaBase = function(){
        var index;
        for(var i=0; i<$scope.finalOrder.length; i++){
            if($scope.finalOrder[i].name === "Normal"){
                index = i;
            }else if($scope.finalOrder[i].name === "Thin Crust"){
                index = i;
            }
        }
        if(index>-1){
            $scope.finalOrder.splice(index, 1);
             $scope.finalOrder.push($scope.selectedPizzaBase); 
        }else{
            $scope.finalOrder.push($scope.selectedPizzaBase);    
        }
        validatePizzaBase();
    };
    
    $scope.toggleTopping = function(topping){
        var push = true;
        var index;
        for(var i=0; i<$scope.selectedTopping.length; i++) {
            if($scope.selectedTopping.length>0 && $scope.selectedTopping[i].id === topping.id){
                push = false;
                index = i;
            }
        }
        if(push){
            $scope.selectedTopping.push(topping);
            $scope.finalOrder.push(topping);
        }else{
            $scope.selectedTopping.splice(index, 1);
            removeFromFinalOrder(topping);
        }
        validateTopping();
    };
    
    $scope.toggleVeggies = function(veggie){
        var push = true;
        var index;
        for(var i=0; i<$scope.selectedVeggies.length; i++) {
            if($scope.selectedVeggies.length>0 && $scope.selectedVeggies[i].id === veggie.id){
                push = false;
                index = i;
            }
        }
        if(push){
            $scope.selectedVeggies.push(veggie);
            $scope.finalOrder.push(veggie);
        }else{
            $scope.selectedVeggies.splice(index, 1);
            removeFromFinalOrder(veggie);
        }
        validateVeggie();
    };
    
    $scope.toggleCheese = function(cheese){
        var index;
        for(var i=0; i<$scope.finalOrder.length; i++){
            if($scope.finalOrder[i].name === "Parmesan/Romano"){
                index = i;
            }else if($scope.finalOrder[i].name === "Three Cheese Blend"){
                index = i;
            }
        }
        if(index>-1){
            $scope.finalOrder.splice(index, 1);
             $scope.finalOrder.push(cheese); 
        }else{
            $scope.finalOrder.push(cheese);    
        }
        $scope.selectedcheese = cheese;
        validateCheese();
    };
    
   $scope.toggleSauce = function (sauce){
        var push = true;
        var index;
        for(var i=0; i<$scope.selectedSauces.length; i++) {
            if($scope.selectedSauces.length>0 && $scope.selectedSauces[i].id === sauce.id){
                push = false;
                index = i;
            }
        }
        if(push){
            $scope.selectedSauces.push(sauce);
            $scope.finalOrder.push(sauce);
        }else{
            $scope.selectedSauces.splice(index, 1);
            removeFromFinalOrder(sauce);
        }
        validateSauces();
    };  
    
   $scope.toggleSidesAndDesserts = function (sidesAndDessert){
        var push = true;
        var index;
        for(var i=0; i<$scope.selectedSidesAndDesserts.length; i++) {
            if($scope.selectedSidesAndDesserts.length>0 && $scope.selectedSidesAndDesserts[i].id === sidesAndDessert.id){
                push = false;
                index = i;
            }
        }
        if(push){
            $scope.selectedSidesAndDesserts.push(sidesAndDessert);
            $scope.finalOrder.push(sidesAndDessert);
        }else{
            $scope.selectedSidesAndDesserts.splice(index, 1);
            removeFromFinalOrder(sidesAndDessert);
        }
    };
    
    $scope.toggleExtras = function (extra){
        var push = true;
        var index;
        for(var i=0; i<$scope.selectedExtras.length; i++) {
            if($scope.selectedExtras.length>0 && $scope.selectedExtras[i].id === extra.id){
                push = false;
                index = i;
            }
        }
        if(push){
            $scope.selectedExtras.push(extra);
            $scope.finalOrder.push(extra);
        }else{
            $scope.selectedExtras.splice(index, 1);
            removeFromFinalOrder(extra);
        }
    };
    
    $scope.validateOrder = function(){
        validatePizzaBase();
        validateTopping();
        validateVeggie();
        validateCheese();
        validateSauces();
        if(!$scope.pizzaBaseValidation && !$scope.toppingValidationMax && !$scope.toppingValidation && !$scope.veggiesValidationMax && !$scope.veggiesValidation && !$scope.cheeseValidation && !$scope.sauceValidation ){
            finalOrderService.set($scope.finalOrder);
            $location.path('/mycart')
        }
    };
    
    function validatePizzaBase(){
        $scope.pizzaBaseValidation = false;
        if(!$scope.selectedPizzaBase.name){
            $scope.pizzaBaseValidation = true;
        }
    }
    
    function validateTopping (){
        $scope.toppingValidationMax = false;
        $scope.toppingValidation = false;
        if($scope.selectedTopping.length === 0 ){
            $scope.toppingValidation = true;
        }else if($scope.selectedTopping.length > 3){
            $scope.toppingValidationMax = true;
        }
    }
    
    function validateVeggie (){
        $scope.veggiesValidationMax = false;
        $scope.veggiesValidation = false;
        if($scope.selectedVeggies.length === 0 ){
            $scope.veggiesValidation = true;
        }else if($scope.selectedVeggies.length > 5){
            $scope.veggiesValidationMax = true;
        }
    }

    function validateCheese (){
       $scope.cheeseValidation = false;
        if(!$scope.selectedcheese.name){
            $scope.cheeseValidation = true;
        }
    }
    
    function validateSauces (){
        $scope.sauceValidation = false;
        if($scope.selectedSauces.length === 0 ){
            $scope.sauceValidation = true;
        }
    }
    
    function removeFromFinalOrder(item){
        var index;
        for(var i=0; i<$scope.finalOrder.length; i++){
            if($scope.finalOrder[i].name === item.name){
                index = i;
            }
        }
        $scope.finalOrder.splice(index, 1);
    }
    
    $scope.cancelOrder = function(){
        $scope.selectedPizzaBase = {};
        $scope.selectedTopping = [];
        $scope.selectedVeggies = [];
        $scope.selectedcheese = {};
        $scope.selectedSauces = [];
        $scope.selectedSidesAndDesserts = [];
        $scope.selectedExtras = [];
        $scope.finalOrder = [];
        $scope.pizzaBaseValidation = false;
        $scope.toppingValidationMax = false;
        $scope.toppingValidation = false;
        $scope.veggiesValidationMax = false;
        $scope.veggiesValidation = false;
        $scope.cheeseValidation = false;
        $scope.sauceValidation = false;
        angular.forEach($scope.toppings , function(topping){
            topping.selected = false;
        });
        angular.forEach($scope.veggies , function(veggies){
            veggies.selected = false;
        });
        $scope.cheeseRadio = false;
        angular.forEach($scope.sauces , function(sauces){
            sauces.selected = false;
        });
        angular.forEach($scope.sidesAndDesserts , function(sidesAndDesserts){
            sidesAndDesserts.selected = false;
        });
        angular.forEach($scope.extras , function(extras){
            extras.selected = false;
        });
    };
    
    $interval(function(){
        $scope.finalTotal = 0;
       angular.forEach($scope.finalOrder, function(item){
            $scope.finalTotal += item.price;
        });
    },10);
});