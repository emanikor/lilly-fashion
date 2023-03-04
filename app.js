let toggleButton = document.querySelector('.toggle-button')
let navbarlinks = document.querySelector('.navbar-links')
let navbar = document.querySelector('navBar')


toggleButton.addEventListener('click' , ()=>{
 navbarlinks.classList.toggle('active');
//  navbarlinks.style.backgroundColor = '#707070';


})

window.onscroll =()=>{
  navbarlinks.classList.remove('active')
 
}