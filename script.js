const app = {};

app.activeHighlight = () => {

    const mainNavLinks = document.querySelectorAll("aside nav ul li a");

    window.addEventListener("scroll", event => {
        const fromTop = window.scrollY;

        mainNavLinks.forEach(link => {
            const section = document.querySelector(link.hash);

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

    // clear form inputs on submission
    const formElement = document.getElementById('form').reset();
}

app.init();