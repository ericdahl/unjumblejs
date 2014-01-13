var assert = require('assert'),
    unjumble = require('../js/unjumble.js');

describe('unjumble', function() {
    'use strict';

    var words = [
        'word',
        'apple',
        'dog',
        'god'
    ];

    describe('#solve()', function() {
        it('already matches', function() {
            assert.deepEqual(unjumble.solve(words, 'word'), ['word']);
        });

        it('backwards', function() {
            assert.deepEqual(unjumble.solve(words, 'drow'), ['word']);
            assert.deepEqual(unjumble.solve(words, 'elppa'), ['apple']);
        });

        it('no match', function() {
            assert.deepEqual(unjumble.solve(words, 'zxya'), []);
        });

        it('multiple matches', function() {
            assert.deepEqual(unjumble.solve(words, 'ogd'), ['dog', 'god']);
        });
    });

    describe('#hints()', function() {
        it('generates basic hint', function() {
            var hints = unjumble.hints(words, 'dwor');
            assert.deepEqual(hints(), ['w___']);
            assert.deepEqual(hints(), ['wo__']);
            assert.deepEqual(hints(), ['wor_']);
            assert.deepEqual(hints(), ['word']);
            assert.deepEqual(hints(), ['word']);
        });

        it('handles no match', function() {
            var hints = unjumble.hints(words, 'foobar');
            assert.deepEqual(hints(), []);
            assert.deepEqual(hints(), []);
        });

        it('handles multiple matches', function() {
            var hints = unjumble.hints(words, 'dgo');
            assert.deepEqual(hints(), ['d__', 'g__']);
            assert.deepEqual(hints(), ['do_', 'go_']);
            assert.deepEqual(hints(), ['dog', 'god']);
            assert.deepEqual(hints(), ['dog', 'god']);
        });
    });
});
