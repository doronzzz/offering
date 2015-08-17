'use strict';

/**
 * @ngdoc function
 * @name nuregoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nuregoApp
 */
angular.module('nuregoApp')
  .controller('WizardCtrl', function ($scope, $filter, ngTableParams) {
    var NgTable = ngTableParams;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'treeController'
    ]; 

    $scope.radioModel = "Now";
    $scope.publishing = false;
    $scope.publishedDone = false;
    $scope.selectedPlans = [];
    $scope.dt;
    $scope.alerts = [
      { type: 'success', msg: 'Well done! You successfully published a plan' }
    ];


    $scope.select = function(time){
      $scope.dt = time
    }

    $scope.cancel = function(){
      for (var i = 0; i<$scope.selectedPlans.length; i++){
        $scope.selectedPlans[i].isSelected = false;
      }
      $scope.selectedPlans = [];
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.publish = function(){
      $scope.publishing = true;
    }

    $scope.cancelPublish = function(){
      $scope.publishing = false;
    }

    $scope.confirmPublish = function(){
      $scope.publishedDone = true;
    }

    
    $scope.planClicked = function(obj){
      console.log(obj);
      if(obj.isSelected){
        $scope.removeSelectedPlan(obj)
      }else{
        obj.isSelected = true;
        $scope.selectedPlans.push(obj);
      }      
    }

    $scope.removeSelectedPlan = function(obj){
      var arr = $scope.selectedPlans;
      obj.isSelected = false;
      for (var i = 0; i < $scope.selectedPlans.length; i++){
          if (arr[i].$$hashKey && arr[i].$$hashKey === obj.$$hashKey) { 
              arr.splice(i, 1);
              break;
          }
        }
    }

     var tableData = [{name: "Pro Plan"},
            {name: "Beta plan"},
            {name: "Segmen plan"},
            {name: "Segmen plan"},
            {name: "custom plan"},
            {name: "vegeterian plan"},
            {name: "Segmen plan"},
            {name: "custom plan"},
            {name: "vegeterian plan"},
            {name: "Segmen plan"},
            {name: "custom plan"},
            {name: "vegeterian plan"},
            {name: "Segmen plan"},
            {name: "custom plan"},
            {name: "vegeterian plan"},
            {name: "custom plan"},
            {name: "vegeterian plan"},
            {name: "my plan"},
          ];

        $scope.tableParams = new NgTable({
            page: 1,            // show first page
            count: tableData.length,          // count per page
            filter: {
                name: '',       // initial filter
            }
        }, {
            counts:[],
            total: tableData.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.filter() ?
                        $filter('filter')(tableData, params.filter()) :
                        tableData;

                $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                params.total(orderedData.length); // set total for recalc pagination
                $defer.resolve($scope.users);
            }
        });








        /*********** DATE PICKER ***********/



          $scope.today = function() {
            $scope.dt = new Date();
          };
          $scope.today();

          $scope.clear = function () {
            $scope.dt = null;
          };

          // Disable weekend selection
          $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
          };

          $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
          };
          $scope.toggleMin();

          $scope.open = function($event) {
            $scope.status.opened = true;
          };

          $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
          };

          $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
          $scope.format = $scope.formats[0];

          $scope.status = {
            opened: false
          };

          var tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          var afterTomorrow = new Date();
          afterTomorrow.setDate(tomorrow.getDate() + 2);
          $scope.events =
            [
              {
                date: tomorrow,
                status: 'full'
              },
              {
                date: afterTomorrow,
                status: 'partially'
              }
            ];

          $scope.getDayClass = function(date, mode) {
            if (mode === 'day') {
              var dayToCheck = new Date(date).setHours(0,0,0,0);

              for (var i=0;i<$scope.events.length;i++){
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                  return $scope.events[i].status;
                }
              }
            }

            return '';
          };


        /*********** DATE PICKER ***********/




});

