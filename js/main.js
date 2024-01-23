const arrowUp = document.querySelector('.arr-up');
const arrowDown = document.querySelector('.arr-down');
const slidesContainer = document.getElementById('slidesContainer');

//img array
const slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
console.log(slides);
let photoView = 0;
let slideHtml = '';


for (i = 0; i < slides.length; i++) {
    const slide = slides[i];

    let attivaClass;

    if (i == photoView) {
        attivaClass = 'attiva';

    } else {
        attivaClass = '';
    }
    slideHtml += ` <img class="slide ${attivaClass}" src="./img/${slides}" alt="">`;
    console.log(slideHtml);
};
// slidesContainer.innerHTML = slideHtml;

// setInterval(function () {
//     const currentFoto = document.querySelector('.slide.attiva');
//     currentFoto.classList.remove('attiva');

//     if (photoView >= slides.length - 1) {
//         photoView = 0;

//     } else {
//         photoView++;
//     }

//     const altraFoto = document.getElementsByClassName('slide');
//     const newFoto = altraFoto[photoView];
//     newFoto.classList.add('attiva');

// }, 4000);


function avanti() {
    const currentFoto = document.querySelector('.slide.attiva');
    currentFoto.classList.remove('attiva');

    if (photoView >= slides.length - 1) {
        photoView = 0;

    } else {
        photoView++;
    }

    const altraFoto = document.getElementsByClassName('slide');
    const newFoto = altraFoto[photoView];
    newFoto.classList.add('attiva');
};


function indietro() {
    const currentFoto = document.querySelector('.slide.attiva');
    currentFoto.classList.remove('attiva');

    if (photoView <= 0) {
        photoView = slides.length - 1;

    } else {
        photoView--;
    }

    const altraFoto = document.getElementsByClassName('slide');
    const newFoto = altraFoto[photoView];
    newFoto.classList.add('attiva');
};

arrowUp.addEventListener('click', function () {
    avanti();
});
arrowDown.addEventListener('click', function () {
    indietro();
});


let scroll = setInterval(avanti, 4000);

slidesContainer.addEventListener('mouseover', function () {
    clearInterval(scroll);
});

slidesContainer.addEventListener('mouseout', function () {
    scroll = setInterval(avanti, 4000);
});