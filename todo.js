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
        // Adding todo to localStorage
        saveLocalTodos(todoInput.value);

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
    
    function filterTodo(e) {
        const todos = todoList.childNodes;
        
        todos.forEach(function (todo) { 
            const mStyle = todo.style;  
            if(mStyle != undefined && mStyle != null){
                switch (e.target.value) {
                    case "all":
                        if (todo.classList.contains("all")) {
                        mStyle.display = "flex";
                        }
                        break;
                    case "completed":
                        if (todo.classList.contains("completed")) {
                            mStyle.display = 'flex';
                        } else {
                            mStyle.display = "none";
                        }
                        break;
                    case "incomplete":
                        if (todo.classList.contains("completed")){
                            mStyle.display = 'none';
                        }
                        else{
                            mStyle.display = "flex";
                        }
                        break;
                }
            }
        })
    }

//save todos to localStorage
    function saveLocalTodos(todo){
        let todos;
            if (localStorage.getItem("todos") === null ) {
                todos = [];
            }
            else {
                todos = JSON.parse(localStorage.getItem("todos"));
            }

           todos.push(todo);
           localStorage.setItem("todos", JSON.stringify(todos));
    }

    //deleting items from local storage
    function getTodos(){
        
            if (localStorage.getItem("todos") === null ) {
                todos = [];
            }
            else {
                todos = JSON.parse(localStorage.removeItem("todos"));
            }
          
           localStorage.clear();

    }

