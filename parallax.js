let behind = document.getElementById('behind');
let front = document.getElementById('front');
let text = document.getElementById('text');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    behind.style.top = value * 0.3 + 'px';
    front.style.top = value * 0 + 'px';
    text.style.left = value * 1.3 + 'px';
})