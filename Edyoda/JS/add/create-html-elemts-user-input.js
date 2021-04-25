var list=document.getElementById('todo-list');
var btnAdd=document.getElementById('add-item');
var uinput=document.getElementById('input')
var currentInputValue='';
uinput.addEventListener('input', function(e)
{
    currentInputValue=e.target.value;
})

uinput.addEventListener('keyup',function(e){
    if(e.keyCode==13)
    {
        addListItem();
    }
})
btnAdd.addEventListener('click', addListItem);
function addListItem()
{
    if(currentInputValue!==undefined && currentInputValue !==null && currentInputValue!=='')
    {
        var newListElement=document.createElement('li');
        var textNode = document.createTextNode(currentInputValue)
        newListElement.appendChild(textNode);
        newListElement.id='item'+(list.childElementCount+1);
        list.appendChild(newListElement);
        currentInputValue='';
        uinput.value='';
    }
    else
    {
        alert('enter a task')
    }
}