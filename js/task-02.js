const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingElements = ingredients.map(ing => {
  const newListItem = document.createElement('li');
  newListItem.textContent = ing;
  newListItem.classList.add('item');
  return newListItem;
});

document.querySelector('#ingredients').append(...ingElements);
