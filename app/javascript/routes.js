/**
 * Created by thomas on 02.09.16.
 */
angular.module('bookApp').config(function($routeProvider){
   $routeProvider.when('/books/:isbn', {
       templateUrl: 'templates/book_details.html',
       controller:'BookDetailsCtrl'
   });
});