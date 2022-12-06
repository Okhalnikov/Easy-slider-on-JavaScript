let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector(".NextB").addEventListener('click', function(){
    offset = offset + 256;
    if( offset>1280 ){
        offset=0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector(".PrevB").addEventListener('click', function(){
    offset = offset - 256;
    if( offset<0 ){
        offset=1280;
    }
    sliderLine.style.left = -offset + 'px';
});