const form = document.querySelector('#create-account-form2');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const passwordToggle = document.getElementById('password-toggle');
const password_toggle = document.getElementById("password_toggle");
const password = document.getElementById("password");


form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});
function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group2');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}


function validateForm() {
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Username cannot be empty');
    }else {
        setSuccess(usernameInput);
    }
    //PASSWORD
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password cannot be empty');
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'Password min 6 max 20 charecters');
    }else {
        setSuccess(passwordInput);
    }
} 


function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

        // WORKING
password_toggle.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        password_toggle.src = "Image/eye-open.png";
    }else{
        password.type = "password"
        password_toggle.src = "Image/eye-close.png";
    }
}

// // Initially hide the eye icon
// password_toggle.style.visibility = "hidden";

// // Show the eye icon when the password textbox is clicked
// password.addEventListener("focus", function() {
//   password_toggle.style.visibility = "visible";
// });

// // Hide the eye icon when the password textbox is not in focus
// password.addEventListener("blur", function() {
//   password_toggle.style.visibility = "hidden";
// });

// password_toggle.onclick = function() {
//   if (password.type === "password") {
//     password.type = "text";
//     password_toggle.src = "Image/eye-open.png";
//   } else {
//     password.type = "password";
//     password_toggle.src = "Image/eye-close.png";
//   }
// };

