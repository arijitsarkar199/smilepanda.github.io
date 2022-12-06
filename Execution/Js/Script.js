// Header Start
let toggleopen=document.getElementById("navbar");
let fabars=document.getElementById("fabars");
const opennav=()=>{
    toggleopen.className="openbar";
    fabars.style.display="none";
}
const closenav=()=>{
    toggleopen.className="closebar";
    fabars.style.display="block";
}
// Header End
// DeliveryAdd Start
let deliveryTextspan=document.getElementsByClassName("deliveryTextspan");
const deliveryEvent=()=>{
    for(let x of deliveryTextspan){
        x.style.color="#f46b27";
    }
}
// DeliveryAdd End
