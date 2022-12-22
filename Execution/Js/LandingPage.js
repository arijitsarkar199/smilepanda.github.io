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
// password end
