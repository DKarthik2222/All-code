document.body.addEventListener('keydown', function(e){
    var keyCode=e.keyCode;
    if(keyCode==16)
    {
        console.log('Keydown for => '+keyCode)
    }
})
document.body.addEventListener('keyup', function(e){
    var keyCode=e.keyCode;
    if(keyCode==16)
    {
        console.log('Keyup for => '+keyCode)
    }
})
document.body.addEventListener('keypress' , function(e){
    var keyCode=e.keyCode;
    if(keyCode==16)
    {
        console.log('KeyPress for => '+keyCode)
    }
})