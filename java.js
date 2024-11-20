let tablinks=document.querySelectorAll(".tab-links")
let tabcontents=document.querySelectorAll(".tab-contents")
let openMenu =document.querySelector(".fa-bars") 
let menuOpt =document.getElementById("menuOpt")
let closeMenu=document.querySelector(".fa-xmark")


tablinks.forEach((link)=>{
link.addEventListener("click",(event)=>{
    console.log("link is clicked")
    tablinks.forEach((link) => link.classList.remove("active-link"));
    tabcontents.forEach((content)=>{
        content.classList.remove("active-content")
    })
    event.currentTarget.classList.add("active-link")
    let tabId = event.currentTarget.getAttribute("data");

        let shempo = document.getElementById(tabId);
        if (shempo) {
            shempo.classList.add("active-content");
        }
})
})
openMenu.addEventListener('click',()=>{
    console.log("menu was clicked")
    menuOpt.style.right="0"
})
closeMenu.addEventListener('click',()=>{
    console.log("menu was clicked")
    menuOpt.style.right="-150px"
})