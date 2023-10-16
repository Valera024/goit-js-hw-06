const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ul = document.querySelector('.gallery');

const listElement = images.map(img => 
  `<li class="item"><img src="${img.url}" alt="${img.alt}"></img></li>`).join("");

ul.insertAdjacentHTML("afterbegin", listElement);
const li = document.querySelectorAll(".item");
ul.style.display = "flex";
ul.style.gap = "10px";
li.forEach(item => {
  item.style.listStyle = "none";
})

const img = ul.querySelectorAll("img");
img.forEach(item => {
  item.style.width = "400px"
  item.style.height = "250px"
})
