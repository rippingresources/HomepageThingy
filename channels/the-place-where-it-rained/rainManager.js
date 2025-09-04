//TODO: Grab music from spreadsheet
//TODO: List music from previous days
//TODO: Show song metadata
//TODO: Check cookies to see if the bgm should say muted on first click.
//

let hasClickedEver = false
let playing = false


$(document).ready(function(){
    $("html").click(function(){
        if (!hasClickedEver) {
            hasClickedEver = true
            playing = !playing
            darkenMainColor()
            rain()

        }
    });
});

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

async function darkenMainColor() {
    let base = ""
    for (let i = 0; i < 30; i+= 0.1) {
        document.querySelector(':root').style.setProperty('--main-color', `hsl(from #3135FC h s calc(l - ${i}))`);
        await sleep(50);
    }
}

async function removeMeWhenIGetToTheBottom(rain) {
    var removed = false;
    var top = -44
    var left = -22
    var sleepTime = Math.floor(Math.random()*41)+25

    while (!removed) {
        let yPos = Number(window.getComputedStyle(rain).top.replace("px", ""))
        if (window.innerHeight <= yPos) {
            rain.remove();
            removed = true;
        } else {
            top += 30
            left += 1
            rain.style.top = `${top}px`
            rain.style.left = `${top}px`
        };
        await sleep(sleepTime);
    }

}

async function rain() {
    const rainContainer = $("#rain")[0];
    let doRain = true;

    while (doRain) {
        const numb = Math.floor(Math.random()*9);
        const offset = Math.floor(Math.random()*200)-100;
        const img = document.createElement('img');
        img.setAttribute('src', `./spr_lw_rain_style_b/${numb}.png`);
        img.style.transform = `translateX(${offset}vw)`;
        rainContainer.append(img);
        removeMeWhenIGetToTheBottom(img);


        await sleep(Math.random()*21);
    }
}
