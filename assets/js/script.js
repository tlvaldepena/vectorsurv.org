var button = document.querySelector('.css-yx40kw');
var menu = document.querySelector('.sidebar .sidebar-wrap-outer');
var inner = document.querySelector('.sidebar .sidebar-wrap-inner');
var svg1 = document.querySelector('.css-sg9l1i');
var svg2 = document.querySelector('.css-o1zbu3');

menu.style.opacity = 0;
inner.style.transition = 'transform 0.5s ease 0s';
inner.style.transform = 'translate(0px, 40px)';

button.addEventListener('click', function(event) {
  if (menu.style.opacity == 0) {
    menu.style.opacity = 1;
    menu.style.pointerEvents = 'auto';
    menu.style.zIndex = 0;
    menu.style.transition = 'opacity 0.5s ease 0s';


    inner.style.transform = 'translate(0px, 0px)';

    svg1.classList.remove('css-sg9l1i');
    svg1.classList.add('css-cf8c4v');
    svg2.classList.remove('css-o1zbu3');
    svg2.classList.add('css-12wnq5i');
  } else {
    menu.style.opacity = 0;
    menu.style.pointerEvents = 'none';
    inner.style.transform = 'translate(0px, 40px)';

    svg1.classList.remove('css-cf8c4v');
    svg1.classList.add('css-sg9l1i');
    svg2.classList.remove('css-12wnq5i')
    svg2.classList.add('css-o1zbu3');
  }
});