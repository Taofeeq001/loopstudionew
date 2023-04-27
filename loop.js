let tog=document.querySelector(".hamburger");
tog.addEventListener('click', ()=>{
    document.querySelector(".mobile-nav").style.width = '100%'
    document.querySelector('.close').style.display = 'block'
})
let close = document.querySelector('.close');
close.addEventListener('click', ()=>{
    document.querySelector('.mobile-nav').style.width = '0'
    document.querySelector(".close").style.display = 'none'
    
})
