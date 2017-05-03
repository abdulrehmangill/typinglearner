'use strict';

describe('myApp.numbers module', function() {

  beforeEach(module('myApp.numbers'));

  describe('numbers controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var numbersCtrl = $controller('numbersCtrl');
      expect(numbersCtrl).toBeDefined();
    }));
  });
});