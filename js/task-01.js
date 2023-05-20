
const itemCategories = document.querySelectorAll('.item');
const categoriesCount = `Number of categories: ${itemCategories.length}`;

itemCategories.forEach(category => {
  const categoriesTitle = `Category: ${category.querySelector('h2').textContent}`;
  const itemList = `Elements: ${category.querySelectorAll('li').length}`
  console.log(categoriesTitle)
  console.log(itemList)
});

