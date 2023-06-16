
const inputFirstName = document.querySelector(".Main__Container__register__firstName");
const inputLastName = document.querySelector(".Main__Container__register__LastName");
const inputEmail = document.querySelector(".Main__Container__register__Email");
const inputPassword= document.querySelector(".Main__Container__register__Password")
const button = document.querySelector(".Main__Container__register__btn");
const firstNameError = document.querySelector(".Main__Container__register__alert--fn");
const lastNameError = document.querySelector(".Main__Container__register__alert--ln");
const EmailError = document.querySelector(".Main__Container__register__alert--email");
const passwordError = document.querySelector(".Main__Container__register__alert--password");

button.addEventListener('click', (event)=>{
    event.preventDefault()
    validityEmpty(inputFirstName.value, inputLastName.value)
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (regExp.test(inputEmail.value == true)){
        inputEmail.style.border= "2px solid hsl(246, 25%, 90%)";
        inputEmail.style.backgroundImage = "url('')";
    }else{
        inputEmail.style.border = "1px solid red";
        inputEmail.style.backgroundImage = "url('./images/icon-error.svg')";
        EmailError.innerHTML = "Looks like this is not an email";
    };
    const RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (RegExp.test(inputPassword.value == true)){
        inputEmail.style.border= "2px solid hsl(246, 25%, 90%)";
        inputEmail.style.backgroundImage = "url('')";
    }else{
        inputPassword.style.border = "1px solid red";
        inputPassword.style.backgroundImage = "url('./images/icon-error.svg')";
        passwordError.innerHTML = "Password cannot be empty";
    };
});

function validityEmpty(valueInput, divInput){
    if(valueInput.length == 0){
        showError();
    }else{
        hideError();
    };
};

function showError(divInput){
    inputFirstName.style.border = '1px solid red';
    inputFirstName.style.backgroundImage = "url('./images/icon-error.svg')";
    inputLastName.style.border = '1px solid red';
    inputLastName.style.backgroundImage = "url('./images/icon-error.svg')";
    firstNameError.innerHTML = "First Name cannot be empty";
    lastNameError.innerHTML = "Last Name cannot be empty";
};

function hideError(){
    inputFirstName.style.border = '2px solid hsl(246, 25%, 90%);';
    inputFirstName.style.backgroundImage = "url('')";
    inputLastName.style.border = '2px solid hsl(246, 25%, 90%);';
    inputLastName.style.backgroundImage = "url('')";
};
