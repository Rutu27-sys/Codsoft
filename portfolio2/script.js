
let textElements = document.getElementsByClassName('transparent');
let text = textElements.length > 0 ? textElements[0] : null;

let sun = document.getElementById('1');
let midcloud = document.getElementById('2');
let right = document.getElementById('3');
let left = document.getElementById('4');
let lastbuild = document.getElementById('5');
let thirdbuild = document.getElementById('6');
let secbuild = document.getElementById('7');
let topbuild = document.getElementById('8');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (text) {
        text.style.marginTop = (value * 2.5) + 'px';
    }
    if (left) {
        left.style.left = (value * -1.5) + 'px';
    }
     if (right) {
        right.style.left = (value * 1.5) + 'px';
    }
     if (sun) {
        sun.style.marginTop = (value * -2.5) + 'px';
    }
    

});
