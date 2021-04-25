var username=document.getElementById('username')
var loginForm=document.getElementById('login-form')

//change & input

// username.addEventListener('change',function()
// {
//     console.log('value changed')
// })
username.addEventListener('input',function(event)
{
    var currentValue=event.target.value;
    currentValue=currentValue.toUpperCase();
    username.value=currentValue;
    console.log(currentValue)
})

// focus

username.addEventListener('focus', function(){
    console.log('Element Focused')
})

//blur

username.addEventListener('blur', function(){
    console.log('Element Lost Focus')
})

//submit

loginForm.addEventListener('submit', function(e){
    alert('Submit Button Clicked')
    e.preventDefault();
})