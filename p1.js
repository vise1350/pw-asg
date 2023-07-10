function validatePassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password === confirmPassword) {
    console.log("Password Matched. Password validation Successful.");
  } else {
    console.log("Password didn't match. Password validation unsuccessful");
  }
}
