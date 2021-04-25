var uinput=document.getElementById('todo-input')
var list=document.getElementById('todo-list');
var btnAdd=document.getElementById('add-item');
var btnUpdate=document.getElementById('update-item')
var btnRemove=document.getElementById('remove-item')
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

function createNewNode()
{
    var newListElement=document.createElement('li');
    var textNode = document.createTextNode(currentInputValue)
    newListElement.appendChild(textNode);
    newListElement.id='item'+(list.childElementCount+1);

    return newListElement;
}

function addListItem()
{
    if(currentInputValue!==undefined && currentInputValue !==null && currentInputValue!=='')
    {
        var newListElement=createNewNode();
        list.appendChild(newListElement);
        currentInputValue='';
        uinput.value='';
    }
    else
    {
        alert('enter a task')
    }
}

btnUpdate.addEventListener('click', function(){
    var fitstElement=list.firstElementChild;
    var newListElement=createNewNode();

    list.replaceChild(newListElement, fitstElement)
})

btnRemove.addEventListener('click', function(){
    var firstElement=list.firstElementChild;

    list.removeChild(firstElement);
})