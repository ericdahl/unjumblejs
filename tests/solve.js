if (typeof(require) !== 'undefined') {
    var expect = require('chai').expect,
        unjumble = require('../js/unjumble.js');
} else {
    /* global chai */
    var expect = chai.expect;
}

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
            expect(unjumble.solve(words, 'word')).to.deep.equal(['word']);
        });

        it('backwards', function() {
            expect(unjumble.solve(words, 'drow')).to.deep.equal(['word']);
            expect(unjumble.solve(words, 'elppa')).to.deep.equal(['apple']);
        });

        it('no match', function() {
            expect(unjumble.solve(words, 'zxya')).to.have.length(0);
        });

        it('multiple matches', function() {
            expect(unjumble.solve(words, 'ogd')).to.deep.equal(['dog', 'god']);
        });
    });

    describe('#hints()', function() {
        it('generates basic hint', function() {
            var hints = unjumble.hints(words, 'dwor');
            expect(hints()).to.deep.equal(['w___']);
            expect(hints()).to.deep.equal(['wo__']);
            expect(hints()).to.deep.equal(['wor_']);
            expect(hints()).to.deep.equal(['word']);
            expect(hints()).to.deep.equal(['word']);
        });

        it('handles no match', function() {
            var hints = unjumble.hints(words, 'foobar');
            expect(hints()).to.have.length(0);
            expect(hints()).to.have.length(0);
        });

        it('handles multiple matches', function() {
            var hints = unjumble.hints(words, 'dgo');
            expect(hints()).to.deep.equal(['d__', 'g__']);
            expect(hints()).to.deep.equal(['do_', 'go_']);
            expect(hints()).to.deep.equal(['dog', 'god']);
            expect(hints()).to.deep.equal(['dog', 'god']);
        });
    });
});
