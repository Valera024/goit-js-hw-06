const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    const trimValue = event.currentTarget.value.trim();
    if (trimValue === "") {
        span.textContent = "Anonymous";
    }
    else {
        span.textContent = event.currentTarget.value;
    }
});