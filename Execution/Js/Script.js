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

// Blogs Start
function carousel() {
    let carouselSlider = document.querySelector(".carousel__slider");
    let list = document.querySelector(".carousel__list");
    let item = document.querySelectorAll(".carousel__item");
    let list2;

    const speed = 1;

    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone() {
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);
        list2.style.left = `${width}px`;
    }

    function moveFirst() {
        x -= speed;

        if (width >= Math.abs(x)) {
            list.style.left = `${x}px`;
        } else {
            x = width;
        }
    }

    function moveSecond() {
        x2 -= speed;

        if (list2.offsetWidth >= Math.abs(x2)) {
            list2.style.left = `${x2}px`;
        } else {
            x2 = width;
        }
    }

    function hover() {
        clearInterval(a);
        clearInterval(b);
    }

    function unhover() {
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
    }

    clone();

    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);

    carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();
// Blogs end
let subscribe=document.getElementById("subscribe");
let mySubscribe=()=>{
    if(subscribe.value==""){

    }else{
        alert("Subscribe Successfully.")
    }
}