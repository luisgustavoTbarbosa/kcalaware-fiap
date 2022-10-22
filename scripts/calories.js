const buttonsAddFood = document.querySelectorAll('.button-add');
const addFoodModal = document.querySelector('.addFoodModal');
const buttonCloseModal = document.querySelector('.range-closeModal');

buttonsAddFood.forEach(button => {
    button.addEventListener('click', openModalAddFood);
})

buttonCloseModal.addEventListener('click', closeModalFood)

function openModalAddFood() {
    addFoodModal.classList.add('open');
}

function closeModalFood() {
    addFoodModal.classList.remove('open')
}