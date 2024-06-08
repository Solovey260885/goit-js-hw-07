const registerform = document.querySelector(".login-form");
registerform.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  let common = {};

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  common.email = email;
  common.password = password;
  console.log(common);
  form.reset();
}
