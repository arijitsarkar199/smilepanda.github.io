// LandingPage Start  
function linkclick(){
    let texts=document.getElementById("text").value;
    let passwords=document.getElementById("password").value;
    if(texts==0 || passwords==0){
        alert("Please fill username and password")
    }
    else{
        window.location.assign("../../index.html")

    }
}

// LandingPage End
// password start
const toggle=document.querySelector(".toggle");
const input=document.getElementById("password");

toggle.addEventListener("click",()=>{
    if(input.type==="password"){
        input.type="text";
        toggle.classList.replace("fa-eye-slash","fa-eye")
    }
    else{
        input.type="password";
        toggle.classList.replace("fa-eye","fa-eye-slash")

    }
})
const toggle2=document.querySelector(".toggle2");
const input2=document.getElementById("password2");

toggle2.addEventListener("click",()=>{
    // alert()
    if(input2.type==="password"){
        input2.type="text";
        // input2.style.display="none"
        toggle2.classList.replace("fa-eye-slash","fa-eye")
    }
    else{
        input2.type="password";
        toggle2.classList.replace("fa-eye","fa-eye-slash")

    }
})
// password end
let mylogin=document.getElementById("mylogin");
let signIn=document.getElementById("signIn");
function myloginclick(){
    mylogin.style.display="none";
    signIn.style.display="block";
}
function signInclick(){
    mylogin.style.display="block";
    signIn.style.display="none";
}