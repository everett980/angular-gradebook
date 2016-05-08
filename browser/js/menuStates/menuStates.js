app.config(function ($stateProvider) {
  $stateProvider.state('gradebook', {
    url: '/gradebook',
    templateUrl: 'js/menuStates/gradebook.html',
    controller: function($scope) {
      $scope.data = [{
      }]
    }
  })


  $stateProvider.state('students', {
    url: '/students',
    templateUrl: 'js/menuStates/students.html',
    controller: function($scope, Auth, $http ) {

      $http.get('/api/teachers/uid/'+Auth.uid)
        .then(function (teacher) {
          // get the students
        })

      $scope.data = [{
      }]
    }
  })

});

