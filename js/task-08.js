const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue === "" || passwordValue === "") {
    alert("All fields must be filled out.");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
});
