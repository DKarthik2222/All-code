console.log('JS Loaded');

var countdownElement=document.getElementById('countdown');
var bgImageElement=document.getElementById('bg-image');

var initialCountdownVal=countdownElement.innerHTML;

var interval=setInterval(function(){
    initialCountdownVal=initialCountdownVal>0 ? initialCountdownVal-1 : 0;
    countdownElement.innerHTML=initialCountdownVal;
    countdownElement.style.fontSize=initialCountdownVal * 100 + "px";
    if(initialCountdownVal==0)
    {
        initialCountdownVal=11;
    }
    
    var backImagePath=initialCountdownVal%2==0 ? '/img1.png' : '/img2.png';
    bgImageElement.style.width=initialCountdownVal * 10 + "%";
    bgImageElement.src=backImagePath;

},1000)