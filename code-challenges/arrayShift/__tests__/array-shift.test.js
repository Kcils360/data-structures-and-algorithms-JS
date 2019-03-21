'use strict';

const Shift = require('../array-shift.js');

describe('Array-Shift', () => {

    it('works with even length array', () => {
      let array = [1,2,3,4];
      let array2 = Shift.arrayShift3(array, 5);
      let expectedArray = [1,2,5,3,4];
      expect(array2).toEqual(expectedArray);
    });
)};