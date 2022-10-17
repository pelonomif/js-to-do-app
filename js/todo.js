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
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("button clicked");
    
    formValidation();
});

let formValidation = () => {
    if (textInput.value === ""){
        msg.innerHTML="Post cannot be blank";
        console.log("failure");
    }
    else{
        console.log("success");
        msg.innerHTML = "";

        acceptData();
    }

};


//collecting data from textInput and storing it into localStorage
let data =[];

let acceptData = (e) => {
    data.push ({  
        text: textInput.value,
        data: dateInput.value,
        description: textarea.value,

        
    });

    window.localStorage.setItem ("data", JSON.stringify(data));

    console.log(data);

    createTask();
};

// creating new tasks using template literal
let createTask = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return (tasks.innerHTML += `
        <div id= ${y}>
            <span class="fw-bold"> ${x.text}</span>
            <span class="small text-seconday"> ${x.date}</span>
            <p> ${x.description}</p>

            <span class = "options">
                <i onClick = "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa fa-pencil-square"></i>
                <i onClick = "deleteTask(this); createTask(this)" class="fa fa-trash-o"></i>
            </span>
        </div>
        `);
    });

    resetForm();
};

let resetForm = () =>{
    textInput.value= "";
    dateInput.value= "";
    textarea.value= "";
}; 