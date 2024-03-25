const mainaBody = document.querySelector("body");
mainaBody.classList.add("body-1")
function changeBg() {
    const mainaBody = document.querySelector("body");
    if (mainaBody.classList.contains("body-1")) {
        mainaBody.classList.remove("body-1")
        mainaBody.classList.add("body-2");
    } else if (mainaBody.classList.contains("body-2")) {
        mainaBody.classList.remove("body-2")
        mainaBody.classList.add("body-3");
    } else {
        mainaBody.classList.remove("body-3")
        mainaBody.classList.add("body-1");
    }
}

setInterval(changeBg, 4000);

function removeTransformAndBorder(e) {
    if (e.propertyName !== `transform`) {
        return;
    }
    e.target.classList.remove(`playing`);
}


window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}" ]`)
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

})

const keys = document.querySelectorAll(`.key`);

keys.forEach(key => key.addEventListener(`transitionend`, removeTransformAndBorder));
