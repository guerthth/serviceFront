/**
 * Created by thomas on 02.09.16.
 */
angular.module('bookApp').controller('BookDetailsCtrl',function($scope){
    $scope.book = {
        title: 'testTitle',
        subtitle: 'testSubtitle',
        isbn: 'testISBN',
        abstract: 'testAbstract',
        numPages: 999,
        author: 'Mr. Test',
        publisher: {
            name: 'testPublisher',
            url: 'http://test@test.at'
        }
    };
});