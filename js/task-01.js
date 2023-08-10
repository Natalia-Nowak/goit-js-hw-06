const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll(".item");

const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}\n`);

categoryItems.forEach((categoryItem) => {
  const categoryHeader = categoryItem.querySelector("h2");
  const categoryName = categoryHeader.textContent;

  const categoryElements = categoryItem.querySelectorAll("li");
  const numberOfElements = categoryElements.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}\n`);
});
