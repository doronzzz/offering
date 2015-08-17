'use strict';

/**
 * @ngdoc function
 * @name nuregoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nuregoApp
 */
angular.module('nuregoApp')
  .controller('SelectProductCtrl', function ($scope, $filter, ngTableParams) {
    var NgTable = ngTableParams;
    var tableData = [{name: "PhotoShop"},
            {name: "Illustrator"},
            {name: "GIMP"},
            {name: "FireFox"},
            {name: "Chrome"},
            {name: "Android"},
            {name: "Ebay"},
            {name: "GIMP"},
            {name: "FireFox"},
            {name: "Chrome"},
            {name: "Android"},
            {name: "Ebay"},
            {name: "GIMP"},
            {name: "FireFox"},
            {name: "Chrome"},
            {name: "Android"},
            {name: "Ebay"},
            {name: "Amazon"}];

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






});

