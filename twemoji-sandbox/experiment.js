//output
//<img class="emoji" draggable="false" alt="😺" src="https://twemoji.maxcdn.com/2/72x72/1f63a.png">
/*
var twemoji = require('twemoji');
console.log(twemoji.parse('😺'));
*/

// output
// <img class="emoji" draggable="false" alt="😺" src="https://twemoji.maxcdn.com/2/72x72/1f63a.png"><img class="emoji" draggable="false" alt="❤️" src="https://twemoji.maxcdn.com/2/72x72/2764.png">
/*
var twemoji = require('twemoji');
console.log(twemoji.parse('😺❤️'));
*/

//output
//This is <img class="emoji" draggable="false" alt="😺" src="https://twemoji.maxcdn.com/2/72x72/1f63a.png">
var twemoji = require('twemoji');
console.log(twemoji.parse('This is 😺'));
