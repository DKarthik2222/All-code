// console.log('JS Loaded');

var countdownElement=document.getElementById('countdown');
var bgImageElement=document.getElementById('bg-image');

//changing class name

// console.log(bgImageElement);
bgImageElement.className="BackImage";

var initialCountdownVal=countdownElement.innerHTML;

setInterval(function(){
    initialCountdownVal=initialCountdownVal>0 ? initialCountdownVal-1 : 0;
    countdownElement.innerHTML=initialCountdownVal;
    if(initialCountdownVal==0)
    {
        initialCountdownVal=11;
    }
    
    var backImagePath=initialCountdownVal%2==0 ? '/img1.png' : '/img2.png';
    bgImageElement.src=backImagePath;

},1000)