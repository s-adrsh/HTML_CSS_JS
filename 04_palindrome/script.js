const language = "Go hang a salami, I'm a lasagna hog";

function checkPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]+/gi, "").toLowerCase();
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  reverseStr === str
    ? console.log("It is Palindrome")
    : console.log("It isn't a Palindrome");
}

checkPalindrome(language);
