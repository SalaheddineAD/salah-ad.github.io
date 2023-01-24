window.onload = function() {
    var timer;
    var text;
    var speed;
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
    document.getElementById("text-area").value = text;
}
function turbo(){
    if(document.getElementById("start").disabled==true){
        stopAnimation();
        startAnimation();
    }
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

    text=document.getElementById("text-area").value;
    let animation = document.getElementById("animation").value;
    document.getElementById("text-area").value=ANIMATIONS[animation] ;
    let frames = ANIMATIONS[animation].split("=====\n");
    let i = 0;
    
    timer = setInterval(function() {
        document.getElementById("text-area").value = frames[i];
        i++;
        if (i === frames.length) {
            i = 0;
        }
    }, speed);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("animation").disabled = true;
}
 
//functional programming part
// var assert = chai.assert;
//sum**************************************************

function sum(array){
    return array.reduce((sum_var,element)=>element+sum_var);
}
// console.log(assert.equal(sum([1,2,3,4,5,6]),21));
console.log(sum([1,2,3,4,5,6]));

//multiply **************************************************

function multiply(array){
    return array.reduce((sum_var,element)=>element*sum_var);
}
// console.log(assert.equal(multiply([1,2,3,4,5,6]),720));
console.log(multiply([1,2,3,4,5,6]));

//reverse string**************************************************
function reverseString(arg){
    return arg.split("").reduce((result,element)=>element+result,"");
}
// console.log(assert.equal(reverseString("beaugoss"),"ssoguaeb"));
console.log(reverseString("beaugoss"));


//filterArrayByLength**************************************************
function filterArrayByLength(maxLength,array){
    return array.filter(e=>e.length>=maxLength);
}
// console.log(assert.equal(filterArrayByLength(3,["beaugoss","q","as",'asb']),["beaugoss","asb"]));
console.log(filterArrayByLength(3,["beaugoss","q","as",'asb']));
