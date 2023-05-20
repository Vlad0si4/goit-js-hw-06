
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const newArr = [] 

ingredients.forEach(ingredient => {
  const addElement = document.createElement('li');
  addElement.classList.add('item');
  addElement.textContent = ingredient;
 newArr.push(addElement)
})

ingredientsList.append(...newArr);
 
