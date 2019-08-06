// Your code goes here

// dblclick

let busImg = document.querySelector('.intro img');

busImg.addEventListener('dblclick', evt => {
    evt.target.style.border = '2px solid gold';
});


// click, mouseover, mouseout

let images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('click', event => {
        event.target.style.maxWidth = '200%';
    });

    image.addEventListener('mouseover', event => {
        event.target.style.cursor = 'zoom-in';
    });

    image.addEventListener('mouseout', event => {
        event.target.style.maxWidth = '100%';
    });
});

// focus, blur, keydown, keyup

let destination = document.querySelector('.content-destination');

destination.addEventListener('focus', evt => {
    event.target.style.background = 'pink';
});

destination.addEventListener('blur', evt => {
    event.target.style.background = 'inherit';
});

destination.addEventListener('keydown', evt => {
    event.target.style.background = 'black';
});

destination.addEventListener('keyup', evt => {
    event.target.style.background = 'yellow';
});

// wheel

let nav = document.querySelectorAll('.content-section .text-content p');

nav.forEach(p => {
    p.addEventListener('wheel', evt => {
        evt.target.style.display = 'none';
        setTimeout(function() {
            evt.target.style.display = 'block';
        }, 2000);
    }, false)
});

// contextmenu

let noContext = document.querySelectorAll('.destination p');

noContext.forEach(p => {
    p.addEventListener('contextmenu', evt => {
        event.preventDefault();
    })
});


TweenMax.to('img', 8, {opacity:1, ease: Power4.easeOut});
