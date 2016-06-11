angular
    .module('myApp', ['firebase'])
    .controller('MainCtrl', MainCtrl);

function MainCtrl($firebaseArray) {

    var ref = new Firebase('https://todo25.firebaseio.com/todos').orderByChild('completed');
    // console.log(ref);

    this.todos = $firebaseArray(ref);
    console.log(this.todos);

    this.showAll = false;

    this.showCompleted = function(todo) {
        return this.showAll || todo.completed === false;
    };

    this.toggleCompleted = function(todo) {
        this.todos.$save(todo);
    };

}