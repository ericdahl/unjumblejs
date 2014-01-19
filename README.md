unjumblejs
==========
[![Build Status](https://travis-ci.org/ericdahl/unjumblejs.png?branch=master)](https://travis-ci.org/ericdahl/unjumblejs)
[![Sauce Labs Test Status](https://saucelabs.com/buildstatus/unjumblejs)](https://saucelabs.com/u/unjumblejs)

[unjumblejs](http://ericdahl.github.io/unjumblejs/)

Unjumble words with javascript (experiment)

This is an experimental project, with the goals of:
- setting up Sauce Labs / selenium integration

It also should unjumble words, client-side in javascript.

#### Usage
Each function takes a ```wordlist``` argument, which is an array of words. A list of English words can be found in this repo named [words.json](https://raw.github.com/ericdahl/unjumblejs/master/words.json). Load this file with ajax or however first, and then pass it.
##### unjumbling words
```JavaScript
var wordlist = /* load with ajax.. */
unjumble.solve(wordlist, 'pplea')
// → ['apple']
```
##### unjumbling words, gradually with hints
```JavaScript
var wordlist = /* load with ajax.. */
var hints = unjumble.hints(wordlist, 'pplea')
hints()
// → ['a____']
hints()
// → ['ap___']
hints()
// → ['app__']
hints()
// → ['appl_']
hints()
// → ['apple']
```
