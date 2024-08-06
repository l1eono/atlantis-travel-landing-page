/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

let navProfile = document.getElementById('nav-profile')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        navClose.style.display = "block"
    })
}
/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navClose.style.display = "none"
    })
}

function getYear() {
    let dateNow = new Date()
    let yearNow = dateNow.getFullYear()
    return yearNow;
}