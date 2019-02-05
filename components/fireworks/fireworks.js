let audio = new Audio('sounds/Fireworks.mp3');
const fireworks = document.querySelector('.bottom-img');
const mq = window.matchMedia( "(max-width: 800px)" );
console.log(mq);
if (mq.matches) {
    fireworks.addEventListener('click', e => {
        let playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
            })
            .catch(error => {
            });
    }});
} else {
fireworks.addEventListener('mouseover', e => {
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
        })
        .catch(error => {
        });
}});
}