window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "green",
        "orangered",
        "olivedrab",
        "red",
        "aquamarine",
        "blueviolet"
    ];




    //lets get going with the sound here
    /* pads class ına sahip bütün elemanları dolaşacak ve bunların her birine clicklenmeye bağlı bir function atayacak her birine ound dosyalarından birini atayacak forEach ile */

    //console.log(sounds);
    /* sounds sound class ına sahip elementler yani bunlar ses, bunları listeler */

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){

            //sounds[index].play();
            /* şu anda tek tıklama ile ses geliyor, çok tıkladığımızda sadece ilkinde çalışıyor devamını almıyor, bu bir problem, bunu çözmek için currentTime kullanacağız, tekrar tıklamada 0 layacak. */
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

//create a function that makes bubbles

const createBubbles = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    /* buraya kadar app çalışıyor ancak bir problem var sürekli yeni divler oluşturuyor ve bunlar bir süre sonra probmelm çıkaracak performansta bunu halletmek için animasyon bittiğinde oluşturuğu div i silmeli */
    bubble.addEventListener('animationend', function(){
        visual.removeChild(this);
    });
}

});