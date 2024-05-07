
function pageScroll() {
     scrolldelay = setTimeout(pageScroll, 1); 

    const pageHeight = window.innerHeight;
    const currentPosition = window.scrollY + 1;

    window.scrollBy(0, 1);
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        window.scrollTo(0,0)
    }

}
let scrolldelay = setTimeout(pageScroll, 1); 
let isTimeoutCleared = false
const play = document.querySelector(".play");
const pause = document.querySelector(".pause")

document.getElementById("a").addEventListener("click", toggleTimeout)

document.addEventListener("keypress", (e)=> {
    e.preventDefault()
    if(e.code === "Space" || e.code === "Enter") {
        toggleTimeout()
    }
})


function toggleTimeout() {
    if(!isTimeoutCleared) {
        clearTimeout(scrolldelay)
        play.classList.remove("hidden")
        pause.classList.add("hidden")
        isTimeoutCleared = true;
    } else {
        isTimeoutCleared= false;
        pause.classList.remove("hidden")
        play.classList.add("hidden")
         scrolldelay = setTimeout(pageScroll, 1); 
    }
}

