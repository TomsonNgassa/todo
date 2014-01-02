

describe('Todo App', function() {
    'use strict';

    describe('list view', function() {
        var phoneList, todoList ;

        beforeEach(function() {
            browser.get('http://localhost:63342/ANGULARJS/todo/app/index.html');
        });

        it('should add a todo', function() {

            //Get the todo input field element
            var todoInput = element(by.model('todoText'));
            todoInput.clear();
            todoInput.sendKeys('Integrate todo app in jenkins');

            //browser.debugger();
            var todoBtn = element(by.name('add'));
            todoBtn.click();

            //browser.debugger();

            //There should be 3 todos
            browser.findElements(by.repeater('todo in todos')).then(function(arr){
                expect(arr.length).toEqual(3);
            });

            //browser.debugger();
        });

        it('should check a todo', function() {
            //browser.debugger();
            //Get element by name
            var todoItem = element(by.name('build an angular app'));
            todoItem.click();

            /*

             element.all(by.repeater('todo in todos')).then(function(todoItems){
             todoItems[0].getAttribute('value').then(function(test){
             console.log("todoItems: " + test);
             });

             });

            element(by.model('todo.done')).then(function(model){
                model.getAttr
            })
            expect(todoList.count()).toEqual(2);



            Count all element with css class done-true
            browser.findElements(by.repeater('todo in todos')).then(function(todoItems){
                console.log("todoItems: " + todoItems.row('text'));
            });


          var all = browser.findElements(by.repeater('phone in phones'));
          browser.debugger();
          */
        });

        it('should archive todos', function() {

//            var all = browser.findElements(by.repeater('phone in phones'));
//            browser.debugger();
        });

    });

});
