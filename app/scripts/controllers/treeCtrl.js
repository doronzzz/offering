'use strict';

/**
 * @ngdoc function
 * @name nuregoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nuregoApp
 */
angular.module('nuregoApp')
  .controller('TreeCtrl', function ($scope) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'treeController'
    ]; 

  $scope.customClick = function(){
    	//alert(scope.title);
  };

	$scope.remove = function (scope) {
		scope.remove();
	};

	$scope.toggle = function (scope) {
		scope.toggle();
	};

	$scope.moveLastToTheBeginning = function () {
		var a = $scope.data.pop();
		$scope.data.splice(0, 0, a);
	};

	$scope.newSubItem = function (scope) {
		var nodeData = scope.$modelValue;
		nodeData.nodes.push({
			  id: nodeData.id * 10 + nodeData.nodes.length,
			  title: nodeData.title + '.' + (nodeData.nodes.length + 1),
			  nodes: []
			});
	};

	$scope.collapseAll = function () {
		$scope.$broadcast('collapseAll');
	};

	$scope.expandAll = function () {
		$scope.$broadcast('expandAll');
	};




      $scope.data = [{
        'id': 1,
        'icon':'glyphicon-superscript',
        'title': 'node1',
	        'nodes': [
          {
            'id': 11,
            'icon':'glyphicon-superscript', 
            'title': 'node1.1',
            'nodes': [
              {
                'id': 111,
                'icon':'glyphicon-superscript',
                'title': 'node1.1.1',
                'nodes': []
              }
            ]
          },
          {
            'id': 12,
            'icon':'glyphicon-superscript',
            'title': 'node1.2',
            'nodes': []
          }
        ]
      }, {
        'id': 2,
        'icon':'glyphicon-grain',
        'title': 'node2',
        'nodes': [
          {
            'id': 21,
            'icon':'glyphicon-grain',
            'title': 'node2.1',
            'nodes': []
          },
          { 
            'id': 22,
            'icon':'glyphicon-grain',
            'title': 'node2.2',
            'nodes': []
          }
        ]
      }, {
        'id': 3,
        'icon':'glyphicon-sunglasses',
        'title': 'node3',
        'nodes': [
          {
            'id': 31,
            'icon':'glyphicon-sunglasses',  
            'title': 'node3.1',
            'nodes': []
          }
        ]
      }];


});

