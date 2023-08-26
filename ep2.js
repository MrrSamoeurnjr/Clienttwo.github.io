const images = ['pg1.jpg','pg2.jpg','pg3.jpg','pg4.jpg','pg5.jpg'];
const time = 1000;
let i = 0 ;
const img = document.querySelector(".bunrong");
console.log(img)
const changeImage = () => {
    img.src = images[i]; 
    if( i < images.length-1 ) {
        i++;
    }
    else {
        i = 0 ;
    }
    setTimeout("changeImage()",time)
}
window.onload = changeImage;
const filterbuttons = document.querySelectorAll(".filterButtons button");
const filterableCards = document.querySelectorAll(".filter_cards .card");
console.log( filterbuttons , filterableCards );
const filtercards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    console.log(e.target)
    filterableCards.forEach(card => {
        card.classList.add("hide");
        if ( card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all" ) {
            card.classList.remove("hide");
        }
    })
}
filterbuttons.forEach(button => button.addEventListener('click' ,filtercards ))