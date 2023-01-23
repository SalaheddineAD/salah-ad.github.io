window.onload = function() {
    let timer;
    let text;
    let speed;
    document.getElementById("start").addEventListener("click",startAnimation);
    document.getElementById("stop").addEventListener("click",stopAnimation);
    document.getElementById("fontsize").addEventListener("change",changeFontSize);
    document.getElementById("turbo").addEventListener("change",turbo);

}
function stopAnimation() {
    clearInterval(timer);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("animation").disabled = false;
    document.getElementById("text-area").innerHTML = text;
}
function turbo(){
    stopAnimation();
    startAnimation();
}
function changeFontSize() {
    const dictionary ={
        "Tiny": "x-small",
        "Small": "small",
        "Medium": "medium",
        "Large": "large",
        "Extra Large": "x-large",
        "XXL": "xx-large"
    }
    document.getElementById("text-area").style.fontSize=dictionary[document.getElementById("fontsize").value];
}


function startAnimation() {
    if(document.getElementById("turbo").checked){speed=50;}
    else{speed=250;}

    text=document.getElementById("text-area").innerHTML;
    let animation = document.getElementById("animation").value;
    document.getElementById("text-area").innerHTML=ANIMATIONS[animation] ;
    let frames = ANIMATIONS[animation].split("=====\n");
    let i = 0;
    
    timer = setInterval(function() {
        document.getElementById("text-area").innerHTML = frames[i];
        console.log(frames[i]);
        i++;
        if (i === frames.length) {
            i = 0;
        }
    }, speed);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("animation").disabled = true;
}
 