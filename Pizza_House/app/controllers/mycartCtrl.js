pizzaApp.controller('mycartCtrl',function($scope, $location, finalOrderService) {
    $scope.order = finalOrderService.get();
    $scope.finalTotal = 0;
    angular.forEach($scope.order, function(item){
            $scope.finalTotal += item.price;
    });
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    function validateCart(){
        if(Object.keys($scope.order).length  === 0){
            $scope.emptyCart = true; 
        }else{
            $scope.emptyCart = false;
        }
    }  
    validateCart();
    $scope.placeOrder = function(){
        alert("Order Placed Successfully");
        $scope.order ={};
        finalOrderService.set($scope.order);
       $location.path("/home");
    };
    $scope.cancel = function(){
        $scope.finalTotal = 0;
        $scope.order ={};
        finalOrderService.set($scope.order);
        validateCart();
    }
});