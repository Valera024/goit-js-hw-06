const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const newLi = document.createElement('li');
newLi.classList.add("item");
  newLi.textContent = ingredient;
  ul.appendChild(newLi);
});