"use strict";


describe("Super Calculator Demo Test", function () {

    it('should have BookApp as title', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});

describe('Protractor Demo App', function () {
    it('should add one and two', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('3'); // This is wrong!
    });
});


describe('a quick test', function () {
    it('should be true', function () {
        expect(true).toBe(true);
    });
});

describe('E2E: book details view', function () {
    beforeEach(function () {
        browser.get('http://127.0.0.1:8081/app/#/books');
    });

    it('should have the correct element tags', function () {
        browser.get('http://127.0.0.1:8081/app/#/books/123');
        expect(browser.getTitle()).toEqual('BookApp');
        expect(element(by.className('bm-book-title')).getText()).toEqual('JavaScript für Enterprise-Entwickler');
        expect(element(by.className('bm-book-subtitle')).getText()).toEqual('Professionell programmieren im Browser und auf dem Server');
        expect(element(by.className('bm-book-isbn')).getText()).toEqual('ISBN: 978-3-89864-728-1');
        expect(element(by.className('bm-book-num-pages')).getText()).toEqual('Seiten: 302');
        expect(element(by.className('bm-book-author')).getText()).toEqual('Autor: Oliver Ochs');
        expect(element(by.className('bm-book-publisher-name')).getText()).toEqual('dpunkt.verlag');
        expect(element(by.className('bm-book-publisher-name')).getAttribute('href')).toEqual('http://dpunkt.de/');
        expect(element(by.className('bm-book-abstract')).getText()).toEqual('JavaScript ist längst nicht mehr nur für' +
            ' klassische Webprogrammierer interessant.');
    });
});