var assert = require('assert'),
    unjumble = require('../js/unjumble.js');

describe('unjumble', function () {
    'use strict';
    describe('#solve()', function () {

        var words = [
            'word',
            'apple',
            'dog',
            'god'
        ];

        it('already matches', function () {
            assert.deepEqual(unjumble.solve(words, 'word'), ['word']);
        });

        it('backwards', function () {
            assert.deepEqual(unjumble.solve(words, 'drow'), ['word']);
            assert.deepEqual(unjumble.solve(words, 'elppa'), ['apple']);
        });

        it('no match', function () {
            assert.deepEqual(unjumble.solve(words, 'zxya'), []);
        });

        it('multiple matches', function () {
            assert.deepEqual(unjumble.solve(words, 'ogd'), ['dog', 'god']);
        });

    });
});
