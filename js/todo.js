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
function showData(){
  let li = "";
  data.forEach((todo, id) => {
    li += `  <li class="task">
                  <label for="${id}">
                      <input type="checkbox" id="${id}">
                      <p>${todo.text}</p>
                  </label>
                  <div class="settings">
                      <i class="fa fa-ellipsis-h"></i>
                      <ul class="task-menu">
                          <li><i class="fa fa-pencil">Edit</i></li>
                          <li><i class="fa fa-trash">Delete</i></li>
                      </ul>
                  </div>
              </li>`;
  });
  taskBox.innerHTML = li;
}


//collect data and save it local storage
let data = [];

let acceptData = () => {
  data.push ({
    text: userInput.value,
  });

  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);

  showData();

}


    
