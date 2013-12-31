'use strict';

/* jasmine specs for controllers go here */
describe('Todo controllers', function() {
  beforeEach(module('todoApp'));

  describe('TodoCtrl', function(){
      var scope, ctrl;

      beforeEach(inject(function($rootScope, $controller) {
          scope = $rootScope.$new();
          ctrl = $controller('TodoCtrl', {$scope: scope});
      }));

      it('It should create todo model with 2 todos', function() {
        expect(scope.todos).toEqual([ {text:'learn angular', done:true}, {text:'build an angular app', done:false}]);
     });

     it('It should have 2 todos', function() {
          expect(scope.todos.length).toEqual(2);
     });

     it('It should add a new todo', function() {
         scope.todos.push([ {text:'Jenkins integration', done:false}])
          expect(scope.todos.length).toEqual(3);
     });

     it('It should one remaining todo', function() {
         console.log("It is ok")
          expect(scope.remaining()).toEqual(1);
     });
  });


});
