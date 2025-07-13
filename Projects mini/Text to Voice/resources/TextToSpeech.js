const listenButton = document.querySelector(".listen");
const cancelButton = document.querySelector(".cancel");
const textArea = document.querySelector("textarea");
const select = document.querySelector("select");
const errMessage = document.querySelector(".message");

let speech = new SpeechSynthesisUtterance();

let timer = null;

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        select.options[i] = new Option(voice.name, i);
    });
};

select.addEventListener("change", () => {
    speech.voice = voices[select.value];
});

listenButton.addEventListener("click", (e) => {
    if (speechSynthesis.speaking) {
        errMessage.classList.remove("hide");
    }
    else {
        clearInterval(timer);
        timer = null;
        errMessage.classList.add("hide");
        speech.text = textArea.value;
        window.speechSynthesis.speak(speech);
        timer = setInterval(() => {
            if (!speechSynthesis.speaking) {
                errMessage.classList.add("hide");
            }
        }, 200);
    }
});

cancelButton.addEventListener("click", () => {
    speechSynthesis.cancel();
    listenButton.click();
    errMessage.classList.add("hide");
})