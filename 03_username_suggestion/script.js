let email = "barryallen@gmail.com";

// Taking value upto @
let i = email.indexOf("@");
const result = email.slice(0, i);
console.log(result);

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

// suggestion for 4 random characters..
let randomUserId1 = Math.floor(Math.random() * characters.length);
let randomUserId2 = Math.floor(Math.random() * characters.length);
let randomUserId3 = Math.floor(Math.random() * characters.length);
let randomUserId4 = Math.floor(Math.random() * characters.length);

const suggestionTwo =
  result +
  characters[randomUserId1] +
  characters[randomUserId2] +
  characters[randomUserId3] +
  characters[randomUserId4];

console.log(suggestionTwo);

// Suggestion for 5 random characters..
let randomUserId5 = Math.floor(Math.random() * characters.length);
const suggestionThree = suggestionTwo + characters[randomUserId5];
console.log(suggestionThree);

// Suggesion for 6 random characters...
let randomUserId6 = Math.floor(Math.random() * characters.length);
const suggestionFour = suggestionThree + characters[randomUserId6];
console.log(suggestionFour);
