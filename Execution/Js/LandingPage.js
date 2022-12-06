// LandingPage Start  
function linkclick(){
    let texts=document.getElementById("text").value;
    let passwords=document.getElementById("password").value;
    if(texts==0 || passwords==0){
        alert("Please fill username and password")
    }
    else{
        window.location.assign("index.html")
    }
}
// LandingPage End
