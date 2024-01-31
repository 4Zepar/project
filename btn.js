let button = document.getElementById('toTop');

const onScroll = () => {
  const scroll = document.documentElement.scrollTop
  if (scroll > 0){
    button.classList.add('active');
  }else{
    button.classList.remove('active');
  }
}

window.addEventListener('scroll', onScroll)