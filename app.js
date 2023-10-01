const nav_menu = document.getElementById('nav-menu');
const nav_mobile_menu = document.getElementById('nav-mobile-route');
const nav = document.getElementById('nav');
const nav_title = document.querySelector('.nav-title');
const nav_route = document.querySelectorAll('.nav-route-btn');

// initialization
nav_mobile_menu.classList.add('show-item');
let width = window.innerWidth;

nav_menu.addEventListener('click', () => {
    nav_mobile_menu.classList.toggle('show-item');
});

const watchScreenWidth = () => {
    if(width > 430) {
        nav_mobile_menu.style.display = 'none';
    }
}


window.addEventListener('resize', watchScreenWidth);

window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;

    if(scrollHeight > 100) {
        nav.classList.add('position');
        nav_title.children[0].style.color = 'black';
        nav_mobile_menu.classList.add('position-mobile');
        nav_menu.style.color = 'black';
        for(let route of nav_route) {
            route.style.color = 'black';
        }

    } else {
        nav.classList.remove('position');
        nav_title.children[0].style.color = 'white';
        nav_mobile_menu.classList.remove('position-mobile');
        nav_menu.style.color = 'white';

        for(let route of nav_route) {
            route.style.color = 'white';
        }

    }
});