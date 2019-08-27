window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const boxes = document.querySelectorAll('.box');
    const ekran = document.querySelector('.ekran');
    const resims = document.querySelectorAll('.resim');

    
    boxes.forEach((box, index) => {
        box.addEventListener('click', function(){

            let animeDizi = ["slide-in-elliptic-top-bck", "slit-in-vertical", "roll-in-left", "rotate-in-center", "bounce-in-top", "flip-vertical-fwd"];
            let currentIndex = animeDizi.length;
            let randomAnime = Math.floor(Math.random() * currentIndex);

            //sounds[index].play();
            sounds[index].currentTime = 0;
            sounds[index].play();
            //console.log(resims[index].attributes[1].value);
            //ekran.innerHTML = `<img class="resim anim rotate-in-center" src="${resims[index].attributes[1].value}" alt=""></img>`;
            ekran.innerHTML = `<img class="resim anim ${animeDizi[randomAnime]}" src="${resims[index].attributes[1].value}" alt=""></img>`;
            //console.log(animeDizi[randomAnime]);
            //console.log(ekran.innerHTML);
            
           
        })
    })
})