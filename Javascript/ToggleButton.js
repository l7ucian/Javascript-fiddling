angular.module('ModuleName',[]).controller('controllerName',function($scope){
$scope.init = function(){
$scope.status = true;
}
$scope.changeStatus = function(){
$scope.status = !$scope.status;
}
})
