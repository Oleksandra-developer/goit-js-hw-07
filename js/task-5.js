// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const InputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const onNameTelling = event => {

    const currentEl = event.target;
    currentEl.value !== '' ? spanRef.textContent = currentEl.value : spanRef.textContent = 'незнакомец';
}

InputRef.addEventListener('input', onNameTelling)