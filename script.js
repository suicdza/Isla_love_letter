const cover = document.getElementById("cover");
const envelopeScreen = document.getElementById("envelope-screen");
const letterScreen = document.getElementById("letter-screen");

const enterButton = document.getElementById("enter-button");
const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");


// ================================
// ENTER
// ================================

enterButton.addEventListener("click", () => {

    cover.classList.remove("active");

    setTimeout(() => {
        envelopeScreen.classList.add("active");
    }, 700);

});


// ================================
// OPEN ENVELOPE
// ================================

seal.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        envelopeScreen.classList.remove("active");

        setTimeout(() => {
            letterScreen.classList.add("active");
        }, 700);

    }, 1000);

});
