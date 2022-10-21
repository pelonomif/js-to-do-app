//Getting selectors from HTML
let form= document.getElementById('form');
let userInput = document.getElementById('userInput');
let msg = document.getElementById('msg');
clearAll = document.querySelector(".clear-btn"),
filters = document.querySelectorAll(".filters span"),
taskBox =  document.querySelector(".task-box");


//Validating the form
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    formValidation();

})

let formValidation = () => {
    if (userInput.value === "") {
      msg.innerHTML = "Field cannot be blank";
      console.log("failure");
    } 
    else {
      console.log("successs");
      msg.innerHTML = "";
      acceptData();
    }
    
  };
  let editId;
  let isEditedTask = false;

  //getting local storage todo list
  let todo = JSON.parse(localStorage.getItem("todo-list"));

  //separting the filters on click
  function forEach(){
    filters.forEach(btn =>{
      btn.addEventListener("click", () =>{
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodos(btn.id);
      })
    });
};
  forEach();
  //using template literals to collect data from local storage and adding it
function showTodos(filter){
  let li = "";
  if (todos){
  todos.forEach((todo, id) => { 
    //if todo status is conpleted, set the isCompleted value to checked
    let isCompleted = todo.status == "completed" ? "checked" : "";
    if(filter == todo.status || filter == "all"){
        li += `  <li class="task">
                  <label for="${id}">
                      <input onclick= "updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                      <p class = "${isCompleted}">${todo.text}</p>
                  </label>
                  <div class="settings">
                      <i onclick="showMenu(this)" class="fa fa-ellipsis-h"></i>
                      <ul class="task-menu">
                          <li onclick= "editTask(${id}, '${todo.text}')"><i class="fa fa-pencil">Edit</i></li>
                          <li onclick= "deleteTask(${id})"><i class="fa fa-trash">Delete</i></li>
                      </ul>
                  </div>
              </li>`;

    }
  
  });
}

  //if li isn't empty, insert this value inside taskbox else insert span
  taskBox.innerHTML = li || `<span>Empty</span>`; 
  resetForm();
  showMenu();
  deleteTask();
  editTask();
  showTodos("all")
}


function resetForm() {
  userInput.value = "";

}

function showMenu(selectedTask) {
  //getting task menu div
  let taskMenu = selectedTask.parentElement.lastElementChild;
  taskMenu.classList.add("show");
  document.addEventListener("click", e => {
    //removing show class from the task menu on document when clicked
    if (e.target.tagName != "I" || e.target != selectedTask){
          taskMenu.classList.remove("show");
    } 
   })
}

function editTask (taskId, taskName) {
  editId = taskId;
  userInput.value = taskName;
}

function deleteTask (deleteId){
  //removing all items from todos array
  todos.splice(deleteId, 1);
  localStorage.setItem("todo-list", JSON.stringify(todos));
  showTodos("all");
}

clearAll.addEventListener("click", () => {
  todos.splice(0, todos.length);
  localStorage.setItem("todo-list", JSON.stringify(todos));
  showTodos("all");
  

});
  
function updateStatus(selectedTask) {
  //getting paragraph that contains the task name
  let taskName = selectedTask.parentElement.lastElementChild;
  if (selectedTask.checked){
    taskName.classList.add("checked");
    //updating status of selected task to completed
    todos[selectedTask.id].status = "completed"

  } else {
    taskName.classList.remove("checked"); 
    //updating status of selected task to pending
    todos[selectedTask.id].status = "pending"
  }
  localStorage.setItem("todo-list", JSON.stringify(todos));
}



//collect data and save it local storage
let todos = [];

let acceptData = () => {
  todos.push ({
    text: userInput.value,
    status: "pending"
  });

  localStorage.setItem("todo-list", JSON.stringify(todos));
  console.log(todos);

  showTodos("all");

}


    
