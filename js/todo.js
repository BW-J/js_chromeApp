const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const toDoInput = document.querySelector("#todo-form input");

let toDos = [];
const TODOS_KEY = "todos";
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentNode;
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";

    btn.addEventListener("click",deleteTodo);

    li.appendChild(btn);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function toDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

function showToDoFrom(){
    console.log("확인");
    toDoForm.classList.remove("hidden");
}

toDoForm.addEventListener("submit",toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.dir(greeting);

if(savedToDos) {
    showToDoFrom();
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

loginForm.addEventListener("change",showToDoFrom);