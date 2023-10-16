const ul = document.querySelector("#categories");
const liInUl = ul.querySelectorAll(".item");
let totalCategories = 0;
liInUl.forEach(item => {
    if(item.classList.contains("item")) {
        totalCategories += 1;
    }
})
console.log(`Number of categories: ${totalCategories}`);
    liInUl.forEach(item => {
    const header = item.querySelectorAll("h2");
    header.forEach(head => {
        console.log(`Category: ${head.textContent}`);
    });
    const ulInli = item.querySelectorAll("ul");
    ulInli.forEach(elem => {
        const liinul = elem.querySelectorAll("li");
        console.log(`Elements: ${liinul.length}`);
    })
})


