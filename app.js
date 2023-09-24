const pianoKeys = document.querySelectorAll('.key');

function playSound(newUrl, event) {
    changeColor(event);
    new Audio(newUrl).play();
};

function changeColor(event){

    const saveClass = event.srcElement.classList[1];

    if(saveClass == "white-key"){
        event.target.style.backgroundColor = 'cyan';
    }else{
        event.target.style.backgroundColor = 'cyan';
    }

    setTimeout(() => {
        event.target.style.backgroundColor = "";
    }, 500);

}

pianoKeys.forEach((pianoKey, index) => {
    const newUrl = './sounds/key' + (index + 1) + '.mp3';
    pianoKey.addEventListener('click', () => playSound(newUrl, event));
});