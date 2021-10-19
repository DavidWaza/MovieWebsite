
const arrow = document.querySelectorAll(".arrow-right");
const movielist = document.querySelectorAll(".movie-list");

arrow.forEach((arrow,i) => {
    const itemNumber = movielist[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if(itemNumber - (4 + clickCounter) >= 0) {

        movielist[i].style.transform = `translateX(${
            movielist[i].computedStyleMap().get("transform")[0].x.value
        -300}px)`;
    } else{
        movielist[i].style.transform = "translateX(0)";
        clickCounter = 0; 
    }
    });
   
});
