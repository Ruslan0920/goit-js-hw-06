const formLogin = document.querySelector(".login-form");
formLogin.addEventListener('submit', confirmSubmit);

function confirmSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
  // console.log(event.currentTarget);
    if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
    }
  const objectForm = {
    email: email.value,
    password: password.value,
  }
  console.log(objectForm);
  // console.log(email.value);
  // console.log(password.value);
  // console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}