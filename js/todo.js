// #form in the modal div
let form = document.getElementById("form");

//div for tasks
let tasks = document.getElementById("tasks");

//the textInput for tasks
let textInput = document.getElementById("textInput");

// dateInput for tasks
let dateInput = document.getElementById("dateInput");

//the textarea for tasks 
let textarea = document.getElementById("textarea");

//msg to display when user submits blank page
let msg = document.getElementById("msg");

//validating the input fields
form.addEventListener("submit", (e) => {
    e.preventDefault();

    formValidation();
});

let formValidation = () => {
    if (textInput.value === ""){
        msg.innerHTML = "Task cannot be blank";
        console.log("failure");
    }
    else {
        console.log("success");
        msg.innerHTML = "";
    }

};
