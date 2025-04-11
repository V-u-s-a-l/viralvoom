
const reviewsBox = document.querySelector(".reviews__box");
const reviewsBoxCard = document.querySelector(".reviews__box--card");
const prev = document.querySelector(".prev");
const next =document.querySelector(".next");

next.addEventListener("click", ()=>{
    reviewsBox.scrollLeft += reviewsBoxCard.offsetWidth;
});

prev.addEventListener("click", ()=>{
    reviewsBox.scrollLeft -= reviewsBoxCard.offsetWidth;
})