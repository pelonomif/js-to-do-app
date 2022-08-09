
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
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild (newTodo);

    const completedButton = document.createElement ("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add ("complete-btn");
        todoDiv.appendChild (completedButton);

        const editButton = document.createElement ("button");
        editButton.innerHTML= '<i class="fa-solid fa-pen-to-square"></i>';
        editButton.classList.add ("editButton");
        todoDiv.appendChild (editButton);
        //append to list in HTML
        todoList.appendChild(todoDiv);
        
    const trashButton = document.createElement ("button");
        trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        trashButton.classList.add ("trashButton");
        todoDiv.appendChild (trashButton);
        //append to list in HTML
        todoList.appendChild(todoDiv);
        todoInput.value= "";

}




