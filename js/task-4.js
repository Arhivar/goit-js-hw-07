const justForm = document.querySelector(".login-form");
justForm.addEventListener("submit", formFunc);

function formFunc(event) {
  event.preventDefault();
  const form = event.target;
  const emailValue = form.elements.email.value;
  const passwordValue = form.elements.email.value;

  if (emailValue.length && passwordValue.length != 0) {
    const info = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(info);
    form.reset();
    return;
  } else alert("All form fields must be filled in");
}
