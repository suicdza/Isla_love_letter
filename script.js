/* =========================================
   COVER → ENVELOPE
========================================= */

function showEnvelope() {

    const cover =
        document.getElementById("cover");

    const envelopeScreen =
        document.getElementById("envelope-screen");

    cover.classList.add("fade-out");

    setTimeout(() => {

        cover.classList.add("hidden");

        envelopeScreen.classList.remove("hidden");

        envelopeScreen.classList.add("fade-in");

    }, 1000);
}


/* =========================================
   OPEN ENVELOPE
========================================= */

function openEnvelope() {

    const envelope =
        document.querySelector(".envelope");

    /*
        Prevents the envelope from being
        triggered repeatedly.
    */

    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    /*
        Give the envelope animation
        enough time to finish before
        revealing the letter.
    */

    setTimeout(() => {

        showLetter();

    }, 1700);
}


/* =========================================
   ENVELOPE → LETTER
========================================= */

function showLetter() {

    const envelopeScreen =
        document.getElementById("envelope-screen");

    const letterScreen =
        document.getElementById("letter-screen");

    envelopeScreen.classList.add("fade-out");

    setTimeout(() => {

        envelopeScreen.classList.add("hidden");

        letterScreen.classList.remove("hidden");

        letterScreen.classList.add("fade-in");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1000);
}
