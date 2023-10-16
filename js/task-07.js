const size = document.querySelector("#font-size-control");
const text = document.getElementById("text");

size.addEventListener("input", () => {
    text.style.fontSize = `${size.value}px`;    
})