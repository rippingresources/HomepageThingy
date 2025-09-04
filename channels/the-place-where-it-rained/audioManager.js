let hasClickedEver = false
let playing = false


$(document).ready(function(){
    $("html").click(function(){
        if (!hasClickedEver) {
            hasClickedEver = true;
            playing = !playing;
            let bgm = $("#bgm")[0];
            bgm.src = 'https://www.youtube.com/embed/aSc7Yuwn1Ao?autoplay=1&mute=0&loop=1&playlist=aSc7Yuwn1Ao';
        }
    });
});
