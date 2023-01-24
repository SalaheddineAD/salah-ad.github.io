window.onload = function() {
    var email_valid=false;
    var password_valid=false;

    document.getElementById("input_email").onclick = inputEmailOnClick;
    document.getElementById("input_password").onclick = inputPasswordOnClick;
    document.getElementById("submit_button").onclick = submitOnClick;
}
function inputEmailOnClick(){
    document.getElementById("input_email").value = "";
}
function inputPasswordOnClick(){
    document.getElementById("input_password").value = "";
}

function testEmailValidity(arg){
    const regexExp=new RegExp("^[A-Za-z0-9]{4,}@{1}(gmail.com|miu.edu)");
    if(regexExp.test(arg)) email_valid=true;
    // alert(regexExp.test(arg));

}

function testPasswordValidity(arg){
    const regexExp=new RegExp("[a-zA-Z0-9]{5,}");
    if(regexExp.test(arg)) password_valid=true;
    // alert(regexExp.test(arg));

}
function submitOnClick(){
    let email=document.getElementById("input_email").value;
    testEmailValidity(email);
    let password=document.getElementById("input_password").value;
    testPasswordValidity(password);
    if(email_valid && password_valid)alert("form submitted succefully");
    else alert("couldn't submit the form");
    email_valid=false;
    password_valid=false;
    // alert("hi");
}