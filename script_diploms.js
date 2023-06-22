const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNamber = movieLists[i].querySelectorAll("img").length
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth / 210);
        clickCounter++;
        if(itemNamber - (3 + clickCounter) + (4-ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value -240
            }px)`;
        } else{
            movieLists[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
    });

    console.log(movieLists[i].querySelectorAll("img").length)
});