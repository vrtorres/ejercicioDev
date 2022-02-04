import {app} from "./../initialize.js";

app.controller('currentEmpPage', function($scope,$routeParams) {
  $scope.idf = $routeParams.identification;
});
