// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const counterValueEl = document.querySelector('#value');
const buttonDecrEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrEl = document.querySelector('button[data-action="increment"]');

let counterValue = Number(counterValueEl.textContent);



function incrementFn() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
function decrementFn() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}
buttonDecrEl.addEventListener('click', decrementFn);
buttonIncrEl.addEventListener('click', incrementFn);
