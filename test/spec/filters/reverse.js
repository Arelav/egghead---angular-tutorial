'use strict';

describe('Filter: reverse', function () {

  // load the filter's module
  beforeEach(module('eggheadApp'));

  // initialize a new instance of the filter before each test
  var reverse;
  beforeEach(inject(function ($filter) {
    reverse = $filter('reverse');
  }));

  it('should return reverced string', function () {
    var text = 'angularjs';
    expect(reverse(text)).toBe('sjralugna');
  });

});
