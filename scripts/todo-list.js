
 
const todoList =  JSON.parse(localStorage.getItem("todoList")) ||
 [{name:'Study js', dueDate:'2023-08-18'},{
  name: 'Go gym', dueDate:'2023-08-20'
}];

function saveToStorage(){
  localStorage.setItem("todoList", JSON.stringify(todoList))
}

displaytodoList(); //To display the todo list on the page

function displaytodoList(){
  let todoListHTML = "";
  todoList.forEach((todoObject, index) => {
    const {name,dueDate} = todoObject;
    const html = 
   `<div>${name}</div>
    <div>${dueDate}</div>
      <button
      " class="delete-btn js-todo-delete-button">delete</button>
    `;
  
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-todo-delete-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click',() => {

      todoList.splice(index, 1);

        displaytodoList();
    });
  });

 localStorage.setItem("todoListHTML", JSON.stringify(todoListHTML));

 const result = JSON.parse(localStorage.getItem("todoListHTML"));

  todoListHTML = result;

  saveToStorage();
  }
  

document.querySelector('.js-add-todo-btn').addEventListener('click', () => {addTodo()});

function addTodo(){

  const inputElem = document.querySelector('.todo-input');

  const name = inputElem.value;

  const dateInput = document.querySelector('.js-duedate-input');
  const dueDate = dateInput.value;

  todoList.push({
    //name:name,
    //dueDate: dueDate
  name,
  dueDate
  });
  
  inputElem.value = ''; //To reset text box  to 'todo name'.

  displaytodoList();

  saveToStorage();
}

let checkBox = document.getElementById('checkbox');
checkBox.addEventListener("change", ()=>{
 
if(checkBox.checked){
document.querySelector(".toggle-todo").style.display ="none"
}else{
  document.querySelector(".toggle-todo").style.display = "block";
}
})







