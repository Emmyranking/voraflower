let containerscroll = document.getElementById("gallery");

containerscroll.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    containerscroll.scrollLeft += evt.deltaY;
    containerscroll.style.scrollBehavior = "auto";
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    console.log("here")
    hamburger.classList.toggle('active');
    navMenu.classList.toggle("active");
});