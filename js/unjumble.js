/* exported unjumble */
var unjumble = (function() {
    'use strict';

    // public api
    return {
        solve: function(wordlist, word) {
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
        }
    };
}());

if (typeof module === 'object' && typeof module.exports === 'object') {
    // Expose namespace for node
    module.exports = unjumble;
} else if (typeof define === 'function' && define.amd) {
    // Expose namespace for AMD
    define(unjumble);
}
