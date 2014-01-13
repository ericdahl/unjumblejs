/* exported unjumble */

// Revealing Module namespace pattern
var unjumble = (function() {
    'use strict';

    var solve = function(wordlist, word) {
        var results = [];

        for (var i = 0, len = wordlist.length; i < len; ++i) {

            if (wordlist[i].length === word.length) {
                var candidateWord = wordlist[i],
                    copy = word;

                for (var j = 0; j < word.length; ++j) {
                    var currentCharacter = candidateWord[j];
                    var index = copy.indexOf(currentCharacter);
                    if (index !== -1) {
                        copy = copy.substring(0, index) + copy.substring(index + 1);
                        if (copy.length === 0) {
                            results.push(candidateWord);
                            break;
                        }
                    } else {
                        break;
                    }
                }
            }
        }
        return results;
    },
    hints = function(wordlist, word) {
        var answer,
            currentHints;
        return function() {
            if (!answer) {
                // only compute answer when needed (not on generation of function)
                answer = solve(wordlist, word);

                // initialize hints
                (function() {
                    currentHints = [];
                    for (var i = 0, len = answer.length; i < len; ++i) {
                        currentHints.push(new Array(answer[i].length + 1).join('_'));
                    }
                })();
            }
            // Loop through each hint, replacing the first '_' character with the correct letter
            for (var i = 0, len = currentHints.length; i < len; ++i) {
                var index = currentHints[i].indexOf('_');
                if (index !== -1) {
                    currentHints[i] = currentHints[i].replace(/_/, answer[i][index]);
                }
            }
            return currentHints;
        };
    };

    // public api
    return {
        solve: solve,
        hints: hints
    };
}());

if (typeof module === 'object' && typeof module.exports === 'object') {
    // Expose namespace for node
    module.exports = unjumble;
} else if (typeof define === 'function' && define.amd) {
    // Expose namespace for AMD
    define(unjumble);
}
