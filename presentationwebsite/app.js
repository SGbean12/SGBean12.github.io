document.querySelector('.next-btn1').addEventListener('click', smoothScroll1);
document.querySelector('.next-btn2').addEventListener('click', smoothScroll2);
document.querySelector('.next-btn3').addEventListener('click', smoothScroll3);
document.querySelector('.next-btn4').addEventListener('click', smoothScroll4);

function smoothScroll1(e){
    window.scroll({
        top:980,
        left: 0,
        behaviour: 'smooth'
    });
    e.preventDefault();
} 
function smoothScroll2(e){
    window.scroll({
        top:1950,
        left: 0,
        behaviour: 'smooth'
    });
    e.preventDefault();
} 
function smoothScroll3(e){
    window.scroll({
        top:2950,
        left: 0,
        behaviour: 'smooth'
    });
    e.preventDefault();
} 
function smoothScroll4(e){
    window.scrollBy({
        top:-3000,
        left: 0,
        behaviour: 'smooth'
    });
    e.preventDefault();
} 