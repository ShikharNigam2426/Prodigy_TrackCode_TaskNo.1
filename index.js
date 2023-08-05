const button = document.querySelector('.buy-product');
const link = document.querySelector('.buy-button'); 

button.addEventListener('mouseover' , () => {
    link.classList.remove('text-light');
    link.classList.add('text-dark');
})
button.addEventListener('mouseout' , () => {
    link.classList.remove('text-dark');
    link.classList.add('text-light');
})




