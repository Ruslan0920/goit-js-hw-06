const formLogin = document.querySelector(".login-form");
console.log(formLogin);
formLogin.addEventListener('submit', confirmSubmit);

function confirmSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}