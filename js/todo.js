//Getting selectors from HTML
let form= document.getElementById('form');
let userInput = document.getElementById('userInput');
let msg = document.getElementById('msg');

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

//collect data and use local storage
let data = [];

let acceptData = () => {
  data.push ({
    text: userInput.value,
  });

  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);

}


    
