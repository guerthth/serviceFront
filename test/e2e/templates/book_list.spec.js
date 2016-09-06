/**
 * Created by thomas on 06.09.16.
 */
describe('E2E: book list view', function(){

    // Define the array of books in the expected order.
    // Sorted by title.
    var expectedBooks = [
        {
            title: 'CoffeeScript',
            isbn: '978-3-86490-050-1',
            author: 'Andreas Schubert'
        },
        {
            title: 'JavaScript für Enterprise-Entwickler',
            isbn: '978-3-89864-728-1',
            author: 'Oliver Ochs'
        },
        {
            title: 'Node.js & Co.',
            isbn: '978-3-89864-829-5',
            author: 'Golo Roden'
        }
    ];

    // Derive an array that only contains titles
    // for easier expectation checks.
    var orderedTitles = expectedBooks.map(function(book) {
        return book.title;
    });

    beforeEach(function () {
        browser.get('http://127.0.0.1:8081/app/#/books');
        browser.refresh();
    });

    it('should show the correct number of books', function () {
        var foundBooks = element.all(by.repeater('book in books'));
        expect(foundBooks.count()).toEqual(3);
    });

    it('should show the books in the proper order', function() {
        // Are they in the expected order (ascending sorted by title)?
        var foundBooks = element.all(by.repeater('book in books').column('book.title')).map(function(elem){
            return elem.getText();
        });
        expect(foundBooks).toEqual(orderedTitles);
    });

    it('should show the correct book information', function() {
        // Do the other book details (isbn, author) match?
        for (var i = 0, n = expectedBooks.length; i < n; i++) {
            console.log(i);
            var foundBooks = element.all(by.repeater('book in books').row(i)).map(function(elem){
                return elem.getText();
            });
            expect(foundBooks).toEqual(expectedBooks);
            /*
            expect(element.all(by.repeater('book in books').row(i))).toEqual(
                [
                    expectedBooks[i].title,
                    expectedBooks[i].author,
                    expectedBooks[i].isbn
                ]
            );
            */
        }
    });
});