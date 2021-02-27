const liItems = document.querySelectorAll(".item");
const numberLies = liItems.length;
console.log(`В списке ${numberLies} категории`);
const titleFromLiItem = liItems.forEach(liItem => {
    const titleEl = liItem.querySelector('h2');    
    console.log(`Категория: ${titleEl.textContent}, количество элементов ${liItem.querySelectorAll("li").length}.`)
})

