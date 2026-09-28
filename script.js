/* =========================================
   ISLA — YOU LOOK GOOD IN PINK
   Main JavaScript
========================================= */


/* ---------- ENTER SITE ---------- */

function enterSite() {

    const landing =
        document.getElementById("landing");

    const letterScreen =
        document.getElementById("letter-screen");


    /*
        Fade out the landing page
    */

    landing.style.transition =
        "opacity 1.2s ease";


    landing.style.opacity = "0";


    /*
        Wait for the fade to finish
    */

    setTimeout(() => {

        landing.classList.add("hidden");

        letterScreen.classList.remove("hidden");

        letterScreen.style.opacity = "0";

        requestAnimationFrame(() => {

            letterScreen.style.transition =
                "opacity 1.2s ease";

            letterScreen.style.opacity = "1";

        });

    }, 1200);

}



/* ---------- OPEN LETTER ---------- */

function openLetter() {

    const envelope =
        document.getElementById("envelope");


    envelope.classList.toggle("open");

}
