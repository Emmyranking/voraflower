let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
});

// backBtn.addEventListener("click", () => {
//     scrollContainer.scrollLeft -= 900;
//     scrollContainer.style.scrollBehavior ="smooth";
// });
// nextBtn.addEventListener("click", () => {
//     scrollContainer.scrollLeft += 900;
//     scrollContainer.style.scrollBehavior ="smooth";
// });



const hamburger = document.querySelector(".hamburger")
const ul = document.querySelector("ul")
const sec = document.querySelector(".sec")
const barContainer = document.querySelector(".bar-container");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    console.log(hamburger.classList);
    if (!hamburger.classList.contains('active')) {
        console.log('here')
        document.querySelector(".sec").style.filter = "blur(0)";
    } else {
        document.querySelector(".sec").style.filter = "blur(10px)";
    }
    ul.classList.toggle("active");
    
});
document.querySelectorAll("ul li a").forEach(n => n.addEventListener("click" , () => {
    hamburger.classList.remove("active");
    ul.classList.remove("active");
    sec.style.filter = "blur(0)"
    }));

    sec.addEventListener("click", ()=> {
       hamburger.classList.remove("active");
       ul.classList.remove("active");
       document.querySelector(".sec").style.filter = "blur(0)"
    })

 