const myForm = document.querySelector(".frm");
const container = document.querySelector(".container");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let formValues = new FormData(e.target);

  // first way to convert form data
  let formValObj = Object.fromEntries(formValues);

  // second way
  //   formValues.forEach((val,key)=>{
  //     console.log(`${val}--${key}`)
  //   })

  for (let property in formValObj) {
    if (!formValObj[property]) {
      console.log("All fields are required");
    } else {
      property == "username"
        ? checkUsername(formValObj["username"])
        : property == "email"
        ? checkEmail(formValObj["email"])
        : property == "password"
        ? checkPassword(formValObj["password"])
        : property == "number" && checkNumber(formValObj["number"]);
    }
  }
  const jsonFormData = JSON.stringify(formValObj);
  console.log(jsonFormData);
});

// username validation
function checkUsername(username) {
  const usernameRegex = new RegExp("^[a-zA-Z0-9_]+$");

  if (!usernameRegex.test(username)) {
    let errorMessage = document.createElement("div");
    errorMessage.textContent = "Enter a valid username.";
    container.append(errorMessage);
  } else {
    console.log(username + " valid");
  }
}

// email validation
function checkEmail(email) {
  const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");

  emailRegex.test(email)
    ? console.log("valid email")
    : console.log("Invalid email");
}

// password validation
function checkPassword(password) {
  const passwordRegex = new RegExp(
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
  );

  passwordRegex.test(password)
    ? console.log("valid Password")
    : console.log("invalid password");
}

// phone number validation
function checkNumber(number) {
  num = parseInt(number);
  const numberRegex = new RegExp("^[0-9]{10}$");

  numberRegex.test(num)
    ? console.log("valid Number")
    : console.log("invalid Number");
}



