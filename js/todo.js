//Getting selectors from HTML
let form= document.getElementById('form');
let userInput = document.getElementById('userInput');
let msg = document.getElementById('msg');
taskBox =  document.querySelector(".task-box")

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

  //using template literals to collect data from local storage and adding it
function showTodos(){
  let li = "";
  if (todos){
  todos.forEach((todo, id) => { 
    //if todo status is conpleted, set the isCompleted value to checked
    let isCompleted = todo.status == "completed" ? "checked" : "";
    li += `  <li class="task">
                  <label for="${id}">
                      <input onclick= "updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                      <p class = "${isCompleted}">${todo.text}</p>
                  </label>
                  <div class="settings">
                      <i onclick="showMenu(this)" class="fa fa-ellipsis-h"></i>
                      <ul class="task-menu">
                          <li><i class="fa fa-pencil">Edit</i></li>
                          <li><i class="fa fa-trash">Delete</i></li>
                      </ul>
                  </div>
              </li>`;
  });
}
  taskBox.innerHTML = li;
  resetForm()
  
}

function resetForm() {
  userInput.value = "";

}
  
function showMenu(selectedTask) {
  console.log(selectedTask)
}
  showMenu();  

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
  localStorage.setItem("todos", JSON.stringify(todos));
}



//collect data and save it local storage
let todos = [];

let acceptData = () => {
  todos.push ({
    text: userInput.value,
    status: "pending"
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todos);

  showTodos();

}

//adding function to delete data
    
