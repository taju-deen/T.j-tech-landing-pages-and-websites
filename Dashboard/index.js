const body=document.querySelector(".fa-arrow-up-short-wide");
const left=document.querySelector(".left");
const leftMenu=document.querySelector(".fa-bars");
const cancel=document.querySelector(".fa-xmark")


leftMenu.addEventListener("click",()=>{
    console.log("me");
    left.classList.add("showleft")
})

cancel.addEventListener("click",()=>{
left.classList.remove("showleft")
});
window.addEventListener("scroll",()=>{
left.classList.remove("showleft")
})



