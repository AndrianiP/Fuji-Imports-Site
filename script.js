const cherry = document.getElementById('CherryBlossom');
const leaves = document.getElementById('leaves');
const mountain = document.getElementById('mountain');
const sun = document.getElementById('sun');
const horizon = document.getElementById('horizon');
const backdrop = document.getElementById('backdrop');

const text = document.getElementById('text');

window.addEventListener('scroll', function () {
    let scrollDistance = window.scrollY;

    leaves.style.top = scrollDistance * 20 +'px';
} );