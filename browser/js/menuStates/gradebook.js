app.config(function ($stateProvider) {
  $stateProvider.state('gradebook', {
    url: '/gradebook',
    templateUrl: 'js/menuStates/gradebook.html',
    controller: function($scope) {
      $scope.data = [{

      }]
    }
  })
});
