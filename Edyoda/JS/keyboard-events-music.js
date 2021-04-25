document.body.addEventListener('keydown' , function(e){
    var keyCode=e.keyCode;
    if(keyCode==65)
    {
        var play=document.getElementById('clap')
        play.play();
        var design = document.getElementsByTagName('div')[0];
        design.style.boxShadow=" 0 0 4px 4px rgb(207, 152, 49)"
        setTimeout(function(){
        design.style.boxShadow="none"
        },100)
    }
    else if(keyCode==83)
    {
        var play=document.getElementById('hihat')
        play.play();
        var design = document.getElementsByTagName('div')[1];
        design.style.boxShadow=" 0 0 4px 4px rgb(207, 152, 49)"
        setTimeout(function(){
        design.style.boxShadow="none"
        },100)
    }
    else if(keyCode==68)
    {
        var play=document.getElementById('kick')
        play.play();
        var design = document.getElementsByTagName('div')[2];
        design.style.boxShadow=" 0 0 4px 4px rgb(207, 152, 49)"
        setTimeout(function(){
        design.style.boxShadow="none"
        },100)
    }
    else if(keyCode==70)
    {
        var play=document.getElementById('openhat')
        play.play();
        var design = document.getElementsByTagName('div')[3];
        design.style.boxShadow=" 0 0 4px 4px rgb(207, 152, 49)"
        setTimeout(function(){
        design.style.boxShadow="none"
        },100)
    }
    else if(keyCode==71)
    {
        var play=document.getElementById('boom')
        play.play();
        var design = document.getElementsByTagName('div')[4];
        design.style.boxShadow=" 0 0 4px 4px rgb(207, 152, 49)"
        setTimeout(function(){
        design.style.boxShadow="none"
        },100)
    }
    else if(keyCode==72)
    {
        var play=document.getElementById('ride')
        play.play();
        var design = document.getElementsByTagName('div')[5];
        design.style.boxShadow=" 0 0 4px 4px rgb(207, 152, 49)"
        setTimeout(function(){
        design.style.boxShadow="none"
        },100)
    }
    else if(keyCode==74)
    {
        var play=document.getElementById('snare')
        play.play();
        var design = document.getElementsByTagName('div')[6];
        design.style.boxShadow=" 0 0 4px 4px rgb(207, 152, 49)"
        setTimeout(function(){
        design.style.boxShadow="none"
        },100)
    }
    else if(keyCode==75)
    {
        var play=document.getElementById('tom')
        play.play();
        var design = document.getElementsByTagName('div')[7];
        design.style.boxShadow=" 0 0 4px 4px rgb(207, 152, 49)"
        setTimeout(function(){
        design.style.boxShadow="none"
        },100)
    }
    else if(keyCode==76)
    {
        var play=document.getElementById('tink')
        play.play();
        var design = document.getElementsByTagName('div')[8];
        design.style.boxShadow=" 0 0 4px 4px rgb(207, 152, 49)"
        setTimeout(function(){
        design.style.boxShadow="none"
        },100)
    }
})