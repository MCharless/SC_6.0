
const form = document.querySelector('#create-account-form');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const success_popup = document.getElementById("success");
const error_popup = document.getElementById("error");
const s_close = document.getElementById("s_button");
const e_close = document.getElementById("e_button");
const s_btn = document.getElementById("success_trigger");
const e_btn = document.getElementById("error_trigger");
// const password_toggle = document.getElementById("password_toggle");
// const password = document.getElementById("password");
// const password_toggle2 = document.getElementById("password-toggle2");
// const confirmPassword = document.getElementById("confirm-password");

 s_btn.onclick = function () {
      success_popup.style.display = "block";
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
      validateForm();

      if(isFormValid()==true){
        form.submit();
       }else {
           event.preventDefault();
       }
  
      if (isFormValid()) {
        error_popup.style.display = "none"; // Hide the error popup if displayed
        success_popup.style.display = "block"; // Show the success popup
    
        // Reset the form after a delay
      
      } else {
        success_popup.style.display = "none"; // Hide the success popup if displayed
        error_popup.style.display = "block"; // Show the error popup
      }
    });
    

   
   


    


  
  

function isFormValid() {
  const inputContainers = form.querySelectorAll('.input-group');
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains('error')) {
      result = false;
    }
  });
  return result;
}

function validateForm() {
  //FNAME
  if (fnameInput.value.trim() == '') {
    setError(fnameInput, 'Firstname cannot be empty');
  } else {
    setSuccess(fnameInput);
  }
  //LNAME
  if (lnameInput.value.trim() == '') {
    setError(lnameInput, 'Lastname cannot be empty');
  } else {
    setSuccess(lnameInput);
  }
  //USERNAME
  if (usernameInput.value.trim() == '') {
    setError(usernameInput, 'Username cannot be empty');
  } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
    setError(usernameInput, 'Username must be minimum of 5-15 characters');
  } else {
    setSuccess(usernameInput);
  }
  //EMAIL
  if (emailInput.value.trim() == '') {
    setError(emailInput, 'Provide a valid email address');
  } else if (isEmailValid(emailInput.value)) {
    setSuccess(emailInput);
  } else {
    setError(emailInput, 'Provide a valid email address');
  }

  //PASSWORD
  if (passwordInput.value.trim() == '') {
    setError(passwordInput, 'Password cannot be empty');
  } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
    setError(passwordInput, 'Password must contain a minimum of 6-20 characters');
  } else if (!PassNum(passwordInput.value)) {
    setError(passwordInput, 'Password must contain at least 1 number');
  } else if (!PassLowerCase(passwordInput.value)) {
    setError(passwordInput, 'Password must contain at least 1 lowercase letter');
  } else if (!PassUpperCase(passwordInput.value)) {
    setError(passwordInput, 'Password must contain at least 1 uppercase letter');
  } else {
    setSuccess(passwordInput);
  }

  //CONFIRM PASSWORD
  if (confirmPasswordInput.value.trim() == '') {
    setError(confirmPasswordInput, 'Password cannot be empty');
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    setError(confirmPasswordInput, 'Password does not match');
  } else {
    setSuccess(confirmPasswordInput);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains('success')) {
    parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains('error')) {
    parent.classList.remove('error');
  }
  parent.classList.add('success');
}

function isEmailValid(email) {
  const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return reg.test(email);
}

function PassNum(password) {
  const reg = /[0-9]/;
  return reg.test(password);
}

function PassLowerCase(password) {
  const reg = /[a-z]/;
  return reg.test(password);
}

function PassUpperCase(password) {
  const reg = /[A-Z]/;
  return reg.test(password);
}

// password_toggle.onclick = function(){
//   if(password.type == "password"){
//       password.type = "text";
//       password_toggle.src = "Image/eye-open.png";
//   } else {
//       password.type = "password";
//       password_toggle.src = "Image/eye-close.png";
//   }
// }

// password_toggle2.onclick = function(){
//   if(confirmPassword.type == "password"){
//       confirmPassword.type = "text";
//       password_toggle2.src = "Image/eye-open.png";
//   } else {
//       confirmPassword.type = "password";
//       password_toggle2.src = "Image/eye-close.png";
//   }
// }


