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

// clear form input after submission

app.clearForm = () => {

    const formElement = document.querySelector('form');

    formElement.addEventListener('submit', function () {
        // e.preventDefault();
        document.querySelector('input').value = '';
        document.querySelector('textarea').value = '';
        document.getElementById('email').value = '';
    })
}

app.init = () => {
    app.activeHighlight();
    app.clearForm();
}

app.init();