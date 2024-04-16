const allCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(item => {
  const titleText = item.querySelector('h2').textContent;
  const numbersOfElements = item.querySelectorAll('li').length;
  console.log(`Category: ${titleText}`);
  console.log(`Elements: ${numbersOfElements}`);
});
