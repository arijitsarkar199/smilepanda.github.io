// Header Start
let toggleopen=document.getElementById("navbar");
let fabars=document.getElementById("fabars");
let myshoppingCart=document.getElementById("myshoppingCart");
const opennav=()=>{
    toggleopen.className="openbar";
    fabars.style.display="none";
    myshoppingCart.style.marginTop="-200px"
}
const closenav=()=>{
    toggleopen.className="closebar";
    fabars.style.display="block";
    myshoppingCart.style.marginTop="0px"
}
// cart-shopping start
let count=0;
let counter=document.getElementById("counter");
let addAnimationa= document.getElementsByClassName("addAnimation")
for(let x of addAnimationa){
    x.addEventListener("click",event=>{
     const c1=counter.classList;
     const c="animatiosAdd";
     count++;
    
     counter.innerText=count;
     c1.remove(c,c1.contains(c));
     setTimeout(()=>
     counter.classList.add("animatiosAdd")
     ,1)
    })
}
// cart-shopping end
// Header End
// DeliveryAdd Start
let deliveryTextspan=document.getElementsByClassName("deliveryTextspan");
const deliveryEvent=()=>{
    for(let x of deliveryTextspan){
        x.style.color="#f46b27";
    }
}
// DeliveryAdd End
// Best Seller Start 
let heart1=document.getElementById("heart1");
let heartClick=()=>{
    if(heart1.style.color=="red"){

        heart1.style.color="#000000";
    }else{
        heart1.style.color="red";
    }
}
let heart2=document.getElementById("heart2");
let heartClick2=()=>{
    if(heart2.style.color=="red"){
        
        heart2.style.color="#000000";
    }else{
        heart2.style.color="red";
    }
}
let heart3=document.getElementById("heart3");
let heartClick3=()=>{
    if(heart3.style.color=="red"){

        heart3.style.color="#000000";
    }else{
        heart3.style.color="red";
    }
}
let heart4=document.getElementById("heart4");
let heartClick4=()=>{
    if(heart4.style.color=="red"){

        heart4.style.color="#000000";
    }else{
        heart4.style.color="red";
    }
}
let heart5=document.getElementById("heart5");
let heartClick5=()=>{
    if(heart5.style.color=="red"){

        heart5.style.color="#000000";
    }else{
        heart5.style.color="red";
    }
}

let heart6=document.getElementById("heart6");
let heartClick6=()=>{
    if(heart6.style.color=="red"){

        heart6.style.color="#000000";
    }else{
        heart6.style.color="red";
    }
}
let heart7=document.getElementById("heart7");
let heartClick7=()=>{
    if(heart7.style.color=="red"){

        heart7.style.color="#000000";
    }else{
        heart7.style.color="red";
    }
}
let heart8=document.getElementById("heart8");
let heartClick8=()=>{
    if(heart8.style.color=="red"){

        heart8.style.color="#000000";
    }else{
        heart8.style.color="red";
    }
}
// Best Seller End

