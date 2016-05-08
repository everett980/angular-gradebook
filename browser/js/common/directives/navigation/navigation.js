app.directive('navigation', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/navigation/navigation.html',
    controller: ctrl
  };
});

function ctrl($scope) {
  $scope.thing = "p.ueo";
  $scope.items = [
    {
      icon: "view_list",
      name: "Gradebook",
      sref: "gradebook"
    },
    // {
    //   icon: "timeline",
    //   name: "Stats"
    // },
    {
      icon: "face",
      name: "Students"
    },
    {
      icon: "people",
      name: "Classes"
    },
    {
      icon: "import_contacts",
      name: "Courses"
    },
    {
      icon: "description",
      name: "Assignments"
    },
  ]
}
