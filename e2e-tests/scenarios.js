'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /shop when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/shop");
  });


  describe('shop', function() {

    beforeEach(function() {
      browser.get('index.html#/shop');
    });


    it('should render shop when user navigates to /shop', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('item', function() {

    beforeEach(function() {
      browser.get('index.html#/item');
    });


    it('should render item when user navigates to /item', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
