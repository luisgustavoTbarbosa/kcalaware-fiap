import api from './api.js';

console.log(api)

const buttonsAddFood = document.querySelectorAll('.button-add');
const addFoodModal = document.querySelector('.addFoodModal');
const buttonCloseModal = document.querySelector('.range-closeModal');
const inputSearchFood = document.querySelector('.searchFood');

buttonsAddFood.forEach(button => {
    button.addEventListener('click', openModalAddFood);
})

buttonCloseModal.addEventListener('click', closeModalFood)

function openModalAddFood() {
    addFoodModal.classList.add('open');
}

function closeModalFood() {
    addFoodModal.classList.remove('open');
}


inputSearchFood.addEventListener('keyup', getSearchFood)
function getSearchFood() {
    const listFoodsDom = document.querySelector('.list-foods ul');
    const foodSearch = api.filter(food => food.description.toLowerCase().startsWith(inputSearchFood.value));
    console.log(foodSearch)
    listFoodsDom.innerHTML = ` `

    if(inputSearchFood.value === '') {
        listFoodsDom.innerHTML = `<li class="item-loading">
                                    <div class="checkbox"></div>
                                    <div>
                                        <p>xxxxx kcal</p>
                                        <p class="nameFood">xxxxx</p>
                                        <p>1 peito (172g)</p>
                                    </div>
                                </li>`
    } else {
        foodSearch.forEach(food => {
        listFoodsDom.innerHTML += `<li>
                                        <div class="checkbox"></div>
                                        <div>
                                            <p>${String(food.attributes.energy.kcal).substr(1, 4)} kcal</p>
                                            <p class="nameFood">${food.description}</p>
                                            <p>100g</p>
                                        </div>
                                    </li>`
    })
    }
}