let nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>1){
        nav.style.background="white"
    }
    else{
        nav.style.background="transparent"
    }
})

let a1=document.getElementById('a1');
a1.addEventListener('click',()=>{
    a1.innerHTML="Read Less"
})
