
const btn = document.querySelector('button');
const image = document.querySelector('img');
// console.log(btn);

let isClicked = true;
btn.addEventListener('click', On);

function On() {
    // console.log('off')
 
    if(isClicked){
        image.src='images/light-bulb-on.png'; 
        isClicked = false;
    } else {
        image.src='images/light-bulb-off.png'
        isClicked = true;
    } 
}