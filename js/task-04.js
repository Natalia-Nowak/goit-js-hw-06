const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector("#value");

let counterValue = 0;

function updateCounterView() {
  counterValueSpan.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterView();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterView();
});

updateCounterView();
