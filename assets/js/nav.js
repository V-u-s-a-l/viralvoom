const navLoginButton = document.querySelector(".nav__login--button");

navLoginButton.addEventListener("click",()=>{
    document.querySelector(".popup").classList.add("open");
});

const navBar = document.querySelector(".nav__bar");
const navList = document.querySelector(".nav__list");
navBar.addEventListener("click",()=>{
    navBar.classList.toggle("active");
    navList.classList.toggle("active")
});


const instagramService = document.querySelector(".instagram__service");
const tiktokService = document.querySelector(".tiktok__service");
const facebookService = document.querySelector(".facebook__service");

instagramService.addEventListener("click",()=>{
    instagramService.classList.toggle("show")
})

tiktokService.addEventListener("click",()=>{
    tiktokService.classList.toggle("show")
})

facebookService.addEventListener("click",()=>{
    facebookService.classList.toggle("show")
})


