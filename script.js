const app = {};

let mainNavLinks = document.querySelectorAll("aside nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

app.activeHighlight = () => {

    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;
    
        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);
    
            if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
            ) {
            link.classList.add("current");
            } else {
            link.classList.remove("current");
            }
        });
    });
}



app.init = () => {
    app.activeHighlight();
}

app.init();