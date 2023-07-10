const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const validateEmail = (email) => {
  const atSymbol = email.indexOf("@");

  return atSymbol !== -1;
};

const validatePassword = (password) => {
  return password.length >= 8;
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const email = emailInput.value;s
  const password = passwordInput.value;

  if (!validateEmail(email)) {
    alert("Invalid email!");
    return;
  }

  if (!validatePassword(password)) {
    alert("Invalid password!");
    return;
  }

  alert("Valid email and password!");
});
