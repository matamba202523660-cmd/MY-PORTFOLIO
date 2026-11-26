
// MATRIX DIGITAL FALLING NUMBERS

const canvas = document.getElementById("matrix-canvas");

const ctx = canvas.getContext("2d");

let columns = [];

const characters = "010101010101JAVA{}[]<>";


function resizeCanvas() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

    const fontSize = 14;

    const numberOfColumns =
        Math.ceil(canvas.width / fontSize);

    columns = Array(numberOfColumns).fill(1);

}


function drawMatrix() {

    ctx.fillStyle = "rgba(7, 9, 11, 0.09)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.font = "14px monospace";


    columns.forEach((y, index) => {

        const randomCharacter =
            characters[
                Math.floor(
                    Math.random() * characters.length
                )
            ];


        // Green and red digital characters

        ctx.fillStyle =
            Math.random() > 0.985
            ? "#ff355e"
            : "#31ff8a";


        ctx.fillText(
            randomCharacter,
            index * 14,
            y * 14
        );


        if (
            y * 14 > canvas.height &&
            Math.random() > 0.975
        ) {

            columns[index] = 0;

        }

        columns[index]++;

    });

}


// Start Matrix animation

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

if (!window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches) {

    setInterval(drawMatrix, 55);

}


// MOBILE NAVIGATION

const menuToggle =
    document.getElementById("menu-toggle");

const navbar =
    document.getElementById("navbar");


menuToggle.addEventListener("click", function() {

    const isOpen = navbar.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


// Close menu when a link is clicked

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", function() {

        navbar.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// AUTOMATIC FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
