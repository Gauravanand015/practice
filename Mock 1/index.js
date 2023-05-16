let hamburger = document.getElementById("bars")
let navMenu = document.getElementById("menu")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("activeOnClick")
    navMenu.classList.toggle("activeOnClick")
})

document.querySelectorAll(".menu_links").forEach( n => n.addEventListener("click",()=>{
    hamburger.classList.remove("activeOnClick")
    navMenu.classList.remove("activeOnClick")
}))