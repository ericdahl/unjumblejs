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
#### Development / Testing
1. Clone the repo
``` $ git clone git@github.com:ericdahl/unjumblejs.git```
2. Go into directory
``` $ cd unjumblejs ```
3. Install dependencies
``` $ npm install ```
4. If necessary, install grunt-cli
``` $ sudo npm install -g grunt-cli ```
5. Run tests (using node). This step will also run jshint against the code.
``` $ grunt # 'npm test' will also invoke grunt like this ```
6. Develop with live test updates. This uses grunt modules to watch the files and run tests with npm. It also stands up a local server on port 8000 that can be used to also view the test results.
``` $ grunt dev```
