//Created variables
const todoInput = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addToDo);

//Used a function
function addToDo(event) {

    
    const todoDiv = document.createElement ("div");
        todoDiv.classList.add ("todo");

    const newTodo = document.createElement ("li");
        newTodo.innerText = "I can";
        newTodo.classList.add("todo-item");
        todoDiv.appendChild (newTodo);

    const completedButton = document.createElement ("button");
        completedButton.innerText = "Save";
        completedButton.classList.add ("complete-btn");
        todoDiv.appendChild (completedButton);

    const trashButton = document.createElement ("button");
        trashButton.innerText = "Delete";
        trashButton.classList.add ("trashButton");
        todoDiv.appendChild (trashButton);
        //append to list in HTML
        todoList.appendChild(todoDiv);

    const editButton = document.createElement ("button");
        editButton.innerText = "Edit";
        editButton.classList.add ("editButton");
        todoDiv.appendChild (editButton);
        //append to list in HTML
        todoList.appendChild(todoDiv);
        

}

