const input = document.querySelector("input[data-length='6']");
const inputById = document.querySelector("#validation-input");
input.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === parseInt(input.dataset.length)) {
        inputById.classList.remove("invalid");
        inputById.classList.add("valid");
    }
    else {
        inputById.classList.remove("valid");
        inputById.classList.add("invalid");
    }
})