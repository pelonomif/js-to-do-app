//Created variables 
const todoInput = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


todoButton.addEventListener("click", addToDo);

//Used a function to create a div that has buttons for the list
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
               
        const trashButton = document.createElement ("button");
            trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
                trashButton.classList.add ("trashButton");
                    todoDiv.appendChild (trashButton);
            //append to list in HTML
            todoList.appendChild(todoDiv);
            todoInput.value= "";
        
}
    //Added functionality to delete and completed buttons
todoList.addEventListener("click", deleteSave);

    function deleteSave(e){

        const item = e.target;
        
        
            if (item.classList[0] === "trashButton"){
                const todo =  item.parentElement;
                    todo.remove();
                }
                // Added a toggle to be used in css to cross out the completed items
                
            else if (item.classList[0] === "complete-btn"){
                    const todo = item.parentElement;
                    todo.classList.toggle("completed");
                }

}
filterOption.addEventListener("click", filterTodo);

    function filterTodo(e){
        e.preventDefault();
        
        const todos = todoList.childNodes;
        console.log(todos);
    }


   


