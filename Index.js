
const todoList = [{
    name: 'Make dinner',
    dueDate: '2025-12-25'
}, {
    name:'Stop gambling',
    dueDate: '2025-12-25'}];

renderTodoList();
function renderTodoList(){

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = 
    `<div>${name}</div>
    <div>${dueDate}</div>
    <button class="button2" onclick="todoList.splice(${i}, 1); renderTodoList();">
    Delete</button>`;

    todoListHTML += html;
}
document.querySelector('.js-div-text')
.innerHTML = todoListHTML;
}

function addTodo(){
   const inputElement = document.querySelector('.js-input-name')
 const name = inputElement.value;

 const dateInputElement =document.querySelector('.js-input-date')
 const dueDate = dateInputElement.value;

 todoList.push({
    name,
    dueDate});
 console.log(todoList);

 inputElement.value ='';
renderTodoList();
}

