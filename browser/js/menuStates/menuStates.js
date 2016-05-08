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

  $stateProvider.state('student', {
    url: '/students/:studentId',
    templateUrl: 'js/menuStates/student.html',
    controller: function($scope, Auth, $http, $stateParams ) {
      $scope.data = [];
      $scope.currentSection = "Overview";
      $scope.tags = ["visual", "free response", "multiple choice", "source criticism"];
      $scope.types = ["quiz", "homework", "essay", "test"];
      $scope.average = 0;
      $scope.vizByType = function(type){
        $scope.current = $scope.data.filter(function(datum){
          return datum.type === type;
        })
        let seen = {};
        let unique = [];
        $scope.current.forEach(function(datum){
          if (seen[datum.assignmentId]){
            return;
          }
          else {
            seen[datum.assignmentId] = true;
            unique.push(datum);
          }
        })
        $scope.current = unique;
        $scope.currentSection = type;
        $scope.visualize();
      }
      $scope.vizByTag = function(tag){
        $scope.current = $scope.data.filter(function(datum){
          return datum.tag === tag;
        })
        let seen = {};
        let unique = [];
        $scope.current.forEach(function(datum){
          if (seen[datum.assignmentId]){
            return;
          }
          else {
            seen[datum.assignmentId] = true;
            unique.push(datum);
          }
        })
        $scope.current = unique;
        $scope.currentSection = tag;
        $scope.visualize();
      }
      $scope.uniqueAssignments = (function(){
        let seen = {};
        let unique = [];
        $scope.data.forEach(function(datum){
          if (seen[datum.assignmentId]){
            return;
          }
          else {
            seen[datum.assignmentId] = true;
            unique.push(datum);
          }
        })
        return unique;
      });
      $http.get('/api/assignments/student/' + $stateParams.studentId)
        .then(function (assignments) {
          $scope.data = assignments.data;
          $scope.current = $scope.uniqueAssignments();
          // d3.select("svg").selectAll("circle").data($scope.uniqueAssignments()).enter().append("circle")
          //   .attr("cx", function(data, i){
          //     return (width / individuals) * i;
          //   })
          //   .attr("cy", function(data, i){
          //     return 300 - 3 * data.score;
          //   })
          //   .attr("r", 5)
          //   .attr("fill", '#0097A7')
          //   .style("opacity", ".70")
          $scope.visualize();
          // d3.select("svg").selectAll("line").data($scope.current).enter().append("line")
          //   .attr("x1", function(data, i){
          //     return (width / individuals) * i;
          //   })
          //   .attr("y1", function(data, i){
          //     return 300 - (2 * data.score);
          //   })
          //   .attr("x2", function(data, i){
          //     if($scope.current[i+1]){
          //       var dummy = $scope.current[i+1];
          //       return (width/$scope.current.length) * (i + 1);
          //     }
          //     else {
          //       return (width/$scope.current.length) * i;
          //     }
          //   })
          //   .attr("y2", function(data, i){
          //     if($scope.current[i+1]){
          //       var dummy = $scope.current[i+1]
          //       return 300 - (2 * dummy.score);
          //     }
          //     else return 300 - (2 * data.score);
          //   })
          //   .attr('stroke', "#FFAB00")
          //   .attr('stroke-width', '3px');
      });
$scope.visualize = function(){
  d3.selectAll("line").remove();
  $scope.average = $scope.current.reduce(function(previousValue, currentValue, idx, array){
        return previousValue + (currentValue.score / array.length);
      }, 0);
  $scope.average = $scope.average.toString().slice(0,5);
  let width = 1200;
  let individuals = $scope.current.length;
  d3.select("svg").selectAll("line").data($scope.current).enter().append("line")
    .attr("x1", function(data, i){
      return (width / individuals) * i;
    })
    .attr("y1", function(data, i){
      return 300 - (3 * data.score);
    })
    .attr("x2", function(data, i){
      if($scope.current[i+1]){
        var dummy = $scope.current[i+1];
        return (width/$scope.current.length) * (i + 1);
      }
      else {
        return (width/$scope.current.length) * i;
      }
    })
    .attr("y2", function(data, i){
      if($scope.current[i+1]){
        var dummy = $scope.current[i+1]
        return 300 - (3 * dummy.score);
      }
      else return 300 - (3 * data.score);
    })
    .attr('stroke', "#FFAB00")
    .attr('stroke-width', '3px');
  d3.select("svg").append("line")
  .attr('x1', '0')
  .attr('x2', '0')
  .attr('y1','0')
  .attr('y2', '300')
  .attr('stroke', '#0097A7')
  .attr('stroke-width', '6px');
  d3.select("svg").append("line")
  .attr('x1', '0')
  .attr('x2', '1200')
  .attr('y1','300')
  .attr('y2', '300')
  .attr('stroke', '#0097A7')
  .attr('stroke-width', '6px');
}
    }
  })
});

