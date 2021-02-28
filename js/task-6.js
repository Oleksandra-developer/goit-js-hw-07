// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input');
const dataLengthValue = inputEl.getAttribute('data-length');

const validationAndCheckValues = event => {
  const currentEl = event.target;

  if (currentEl.value.length !== Number(dataLengthValue)) {
    currentEl.classList.add('invalid');
    currentEl.classList.remove('valid');
  }
  else {
    currentEl.classList.add('valid');
    currentEl.classList.remove('invalid');
  }
};

inputEl.addEventListener('blur', validationAndCheckValues);