

var assert = require('assert');
var unjumble = require('../js/unjumble');

describe('Array', function () {
    'use strict';
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(44));
            assert.equal(-1, [1, 2, 3].indexOf(0));
//            assert.equal(unjumble(['foo'], 'foo'), 'foo');
        });
    });
});
