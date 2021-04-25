var inputField = document.getElementById("todo-input-field");
var todoList = document.getElementById("todo-list");
var todoListArr = JSON.parse(localStorage.getItem("todoList")) || [];
var counter = 0;
var status = null;
var counterr = todoListArr.length;
if (counterr != 0) {
  status = "p";
  for (var i = 0; i < counterr; i++) {
    var mainCard = createTODOCard(todoListArr[i].msg);
    todoList.appendChild(mainCard);
  }
  status = "f";
}

msgObjCreation = (text) => {
  const msgObj = {
    msg: text,
  };
  todoListArr.push(msgObj);
};

function createTODOCard(msg) {
  var mainCard = document.createElement("div");
  mainCard.className = "todo-item";
  mainCard.id = counter++;
  var messageContainer = document.createElement("div");
  messageContainer.className = "horizontal-align todo-message-container";

  var message = document.createElement("h3");
  message.innerHTML = msg;
  if (status != "p") {
    msgObjCreation(msg);
  }
  message.className = "todo-message";
  messageContainer.appendChild(message);

  var buttonWrapper = document.createElement("div");
  var editIcon = document.createElement("i");
  editIcon.className = "far fa-edit";

  editIcon.onclick = function () {
    todoEditContainer.style.display = "flex";
    messageContainer.style.display = "none";
  };

  buttonWrapper.appendChild(editIcon);
  var deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash-alt";
  deleteIcon.onclick = function () {
    var SelectedCard = document.getElementById(mainCard.id);
    SelectedCard.remove();
    updateStorage(msg);
  };

  var todoEditContainer = document.createElement("div");
  todoEditContainer.className = "horizontal-align todo-edit-container";
  var editTodo = document.createElement("input");
  editTodo.className = "edit-todo input-field";
  editTodo.type = "text";
  editTodo.placeholder = "TODO Here";
  var btnUpdate = document.createElement("button");
  btnUpdate.textContent = "Update";
  btnUpdate.id = "btn-update";

  editTodo.onkeyup = function (e) {
    if (e.key === "Enter") {
      message.innerHTML = editTodo.value;
      todoEditContainer.style.display = "none";
      messageContainer.style.display = "flex";
      updateStorage(msg, editTodo.value);
    }
  };

  btnUpdate.onclick = function () {
    message.innerHTML = editTodo.value;
    updateStorage(msg, editTodo.value);
    todoEditContainer.style.display = "none";
    messageContainer.style.display = "flex";
  };

  todoEditContainer.appendChild(editTodo);
  todoEditContainer.appendChild(btnUpdate);
  buttonWrapper.appendChild(deleteIcon);
  messageContainer.appendChild(buttonWrapper);

  mainCard.appendChild(messageContainer);
  mainCard.appendChild(todoEditContainer);
  return mainCard;
}
// var tempArr = [];
// var changeState = false;
// for (var i = 0, j = 0; i < todoListArr.length; i++) {
//   if (value == undefined) {
//     console.log("h");
//     if (todoListArr[i].msg == msg) {
//       continue;
//     }
//     console.log("haoi");
//     tempArr[j] = todoListArr[i];
//     j++;
//     changeState = true;
//   } else if (value != undefined && todoListArr[i].msg == msg) {
//     todoListArr[i].msg = value;
//   }
// }
// if (changeState == true) {
//   todoListArr = tempArr;
// }
updateStorage = (msg, value) => {
  var tempArr = [];
  var changeState = false;
  for (var i = 0, j = 0; i < todoListArr.length; i++) {
    if (value == undefined) {
      if (todoListArr[i].msg == msg) {
        changeState = true;
        continue;
      } else {
        console.log("hi");
        tempArr[j] = todoListArr[i];
        j++;
      }
    } else {
      if (todoListArr[i].msg == msg) {
        todoListArr[i].msg = value;
      }
    }
  }
  if (changeState == true) {
    todoListArr = tempArr;
  }
  window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
};
function handleTODOCreation() {
  var msg = inputField.value;
  var mainCard = createTODOCard(msg);
  todoList.appendChild(mainCard);
  inputField.value = "";
  window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
}

inputField.onkeyup = function (e) {
  if (e.key === "Enter") {
    handleTODOCreation();
  }
};

var btnAddTODO = document.getElementById("btn-add-todo");
btnAddTODO.onclick = function (e) {
  handleTODOCreation();
};
