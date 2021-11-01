let barger = document.querySelector('.barger');
let mymenu = document.querySelector('.main-menu');
let rotate = document.querySelectorAll('.barger-item');

barger.addEventListener('click', () => {
    mymenu.classList.toggle('active');
    for (let i = 0; i < rotate.length; i++) {
        rotate[i].classList.toggle('after');
    }
});



console.log(rotate[0]);
