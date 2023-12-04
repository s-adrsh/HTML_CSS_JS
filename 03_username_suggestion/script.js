const submit = document.getElementById("submit");
const suggestions = document.querySelector(".suggestions");

submit.addEventListener("click", (e) => {
  const email = document.querySelector("#email").value;
  const names = document.querySelectorAll(".names");
  e.preventDefault();

  // To remove previous suggestions
  names && names.forEach((name) => name.remove());

  // Taking value upto @
  let i = email.indexOf("@");
  let result = email.slice(0, i);

  !email ? showSuggestion("Enter a valid Input") : userNameSuggestion();

  //suggestion for random characters
  function userNameSuggestion() {
    characters = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 6; i++) {
      result += characters[Math.floor(Math.random() * characters.length)];

      i == 3 && showSuggestion(result);
      i == 4 && showSuggestion(result);
    }
    showSuggestion(result);
  }
});

function showSuggestion(username) {
  const child = document.createElement("div");
  child.classList.add("names");
  child.textContent = username;
  suggestions.appendChild(child);
}
