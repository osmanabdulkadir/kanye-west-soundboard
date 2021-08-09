const sounds = [
    'how',
    "gaga",
    "lazer",
    "bike",
    "god",
    "Yeah-thats-great",
    "you-know-that",
    "rap-is-the-new-rock",
    "ok",
    "RockStar",
    "bs-meter",
    "bottles",
    "awesome"
];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', ()=>{
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn);
})
 