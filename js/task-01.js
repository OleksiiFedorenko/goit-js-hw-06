const categoriesRef = document.querySelectorAll('.item');

console.log('Number of categories: ', categoriesRef.length);

categoriesRef.forEach(cat => {
  console.log('Category: ', cat.firstElementChild.textContent);
  console.log('Elements: ', cat.lastElementChild.children.length);
});
