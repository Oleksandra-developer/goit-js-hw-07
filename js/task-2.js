const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, после чего вставит
// все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const createLies = ingredients.map((ingredient) => {
    const liEl = document.createElement('li');
    liEl.textContent = String(ingredient);
return liEl
});
const ingredientsList = document.querySelector('#ingredients');
   ingredientsList.append(...createLies);
