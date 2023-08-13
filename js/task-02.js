const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const liElements = ingredients.map((ingredient) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = ingredient;
  return liElement;
});

ingredientsList.append(...liElements);
