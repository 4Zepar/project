let aside = document.getElementById('behind');
let article = document.getElementById('front');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    behind.style.top = value * 0.3 + 'px';
    front.style.top = value * 0 + 'px';
})