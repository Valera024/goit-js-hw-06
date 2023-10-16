const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", login);

function login(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (email === "" || password === "") {
        alert("Fill in all fields!");
    }
    const user = { email, password };
    console.log(user)
    form.reset();
}