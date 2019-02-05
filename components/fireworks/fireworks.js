let audio = new Audio('sounds/Fireworks.mp3');
const fireworks = document.querySelector('.bottom-img');
fireworks.addEventListener('mouseover', e => {
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
        })
        .catch(error => {
        });
}});