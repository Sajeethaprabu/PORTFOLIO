let menu = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toogle('active');
 }
 window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    
}
const  typed = new Typed('.multiple-text', {
    strings: ['Student', 'UI/UX designer','Data analyst','Innovator','AI Wizard'],
    typeSpeed:80,
    backSpeed: 80,
    loop: true,
  });
