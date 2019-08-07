// Your code goes here

// dblclick

let busImg = document.querySelector('.intro img');

busImg.addEventListener('dblclick', evt => {
    evt.target.style.border = '2px solid gold';
});


// click, mouseover, mouseout

let images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('click', evt => {
        evt.target.style.maxWidth = '200%';
    });

    image.addEventListener('mouseover', evt => {
        evt.target.style.cursor = 'zoom-in';
    });

    image.addEventListener('mouseout', evt => {
        evt.target.style.maxWidth = '100%';
    });
});

// focus, blur, keydown, keyup

let destination = document.querySelector('.content-destination p');

destination.addEventListener('focus', evt => {
    evt.target.style.background = 'pink';
});

destination.addEventListener('blur', evt => {
    evt.target.style.background = 'inherit';
});

destination.addEventListener('keydown', evt => {
    evt.target.style.background = 'black';
});

destination.addEventListener('keyup', evt => {
    evt.target.style.background = 'yellow';
});

// wheel

let disappear = document.querySelectorAll('.content-section .text-content p');

disappear.forEach(p => {
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
        evt.preventDefault();
    })
});

// stretch animation

TweenMax.to('img', 8, {opacity:1, ease: Power4.easeOut});

// preventDefault

let stopNav = document.querySelectorAll('a.nav-link');

stopNav.forEach(link => {
    link.addEventListener('click', evt => {
        evt.preventDefault();
    })
});

// stopPropagation

let stopProp = document.querySelector('.inverse-content');

stopProp.addEventListener('click', evt => {
    evt.target.style.background = 'green';
})

let stopPropTwo = document.querySelector('.inverse-content .text-content');

stopPropTwo.addEventListener('click', evt => {
    evt.stopPropagation();
    alert('Clicked! Not green!');
})

