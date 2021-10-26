/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

/*==================== COLLAPSES MENU WHEN LINK IS CLICKED 101021 ====================*/
const navLink = document.querySelectorAll(".nav_link")

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))




/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services_modal"),
    modalBtns = document.querySelectorAll(".filter"),
    modalCloses = document.querySelectorAll(".services_modal-close")

let modal = function (modalClick){
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click",() =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove("active-modal")
        })
    })
})
/*==================== YA BOI  ====================*/
const filterButton= document.getElementById("filter")
const servicesModal= document.getElementById("services_modal")
const modalCloseButton= document.getElementById("services_modal-close")

filterButton.addEventListener("click", () => {
    modalOpen(()=> {servicesModal.classList.add("active-modal")
    })
})

modalCloseButton.addEventListener("click",()=>{
    modalClose(()=> {servicesModal.classList.remove("active-modal")
    })
})







/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById("header")
    if(this.scrollY >= 80) nav.classList.add("scroll-header")
    else nav.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)
