/* exported unjumble */
var unjumble = function(wordlist, word) {
    'use strict';
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
};
