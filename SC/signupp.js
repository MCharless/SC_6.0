
// const form = document.querySelector('#create-account-form');
// const fnameInput = document.querySelector('#fname');
// const lnameInput = document.querySelector('#lname');
// const usernameInput = document.querySelector('#username');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const confirmPasswordInput = document.querySelector('#confirm-password');
// const success_popup = document.getElementById("success");
// const error_popup = document.getElementById("error");
// const s_close = document.getElementById("s_button");
// const e_close = document.getElementById("e_button");
// const s_btn = document.getElementById("success_trigger");
// const e_btn = document.getElementById("error_trigger");
// // const password_toggle = document.getElementById("password_toggle");
// // const password = document.getElementById("password");
// // const password_toggle2 = document.getElementById("password-toggle2");
// // const confirmPassword = document.getElementById("confirm-password");

//  s_btn.onclick = function () {
//       success_popup.style.display = "block";
//     };

//     form.addEventListener('submit', (event) => {
//       event.preventDefault(); // Prevent form submission
//       validateForm();

//       if(isFormValid()==true){
//         form.submit();
//        }else {
//            event.preventDefault();
//        }
//     //  });
//       if (isFormValid()) {
//         error_popup.style.display = "none"; // Hide the error popup if displayed
//         success_popup.style.display = "block"; // Show the success popup
    
//         // Reset the form after a delay
//         //  setTimeout(() => {
//         //   success_popup.style.display = "none"; // Hide the success popup
//         //   form.reset(); // Reset the form
//         //   window.location.href = 'login.php'; // Redirect to login page
//         // }, 31556926000 );
      
//       } else {
//         success_popup.style.display = "none"; // Hide the success popup if displayed
//         error_popup.style.display = "block"; // Show the error popup
//       }
//     });
    
// function isFormValid() {
//   const inputContainers = form.querySelectorAll('.input-group');
//   let result = true;
//   inputContainers.forEach((container) => {
//     if (container.classList.contains('error')) {
//       result = false;
//     }
//   });
//   return result;
// }

// function validateForm() {
//   //FNAME
//   if (fnameInput.value.trim() == '') {
//     setError(fnameInput, 'Firstname cannot be empty');
//   } else if (!isLettersOnly(fnameInput.value)) {
//     setError(fnameInput, 'Firstname must contain only letters');
//   } else {
//     setSuccess(fnameInput);
//   }
//   //LNAME
//   if (lnameInput.value.trim() == '') {
//     setError(lnameInput, 'Lastname cannot be empty');
// } else if (!isLettersOnly(lnameInput.value)) {
//     setError(lnameInput, 'Firstname must contain only letters');
//   } else {
//     setSuccess(lnameInput);
//   }
//   //USERNAME
//   if (usernameInput.value.trim() == '') {
//     setError(usernameInput, 'Username cannot be empty');
//   } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
//     setError(usernameInput, 'Username must be minimum of 5-15 characters');
//   } else {
//     setSuccess(usernameInput);
//   }
//   //EMAIL
//   if (emailInput.value.trim() == '') {
//     setError(emailInput, 'Provide a valid email address');
//   } else if (isEmailValid(emailInput.value)) {
//     setSuccess(emailInput);
//   } else {
//     setError(emailInput, 'Provide a valid email address');
//   }

//   //PASSWORD
//   if (passwordInput.value.trim() == '') {
//     setError(passwordInput, 'Password cannot be empty');
//   } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
//     setError(passwordInput, 'Password must contain a minimum of 6-20 characters');
//   } else if (!PassNum(passwordInput.value)) {
//     setError(passwordInput, 'Password must contain at least 1 number');
//   } else if (!PassLowerCase(passwordInput.value)) {
//     setError(passwordInput, 'Password must contain at least 1 lowercase letter');
//   } else if (!PassUpperCase(passwordInput.value)) {
//     setError(passwordInput, 'Password must contain at least 1 uppercase letter');
//   } else {
//     setSuccess(passwordInput);
//   }

//   //CONFIRM PASSWORD
//   if (confirmPasswordInput.value.trim() == '') {
//     setError(confirmPasswordInput, 'Password cannot be empty');
//   } else if (confirmPasswordInput.value !== passwordInput.value) {
//     setError(confirmPasswordInput, 'Password does not match');
//   } else {
//     setSuccess(confirmPasswordInput);
//   }
// }


// function setError(element, errorMessage) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('success')) {
//     parent.classList.remove('success');
//   }
//   parent.classList.add('error');
//   const paragraph = parent.querySelector('p');
//   paragraph.textContent = errorMessage;
// }

// function setSuccess(element) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('error')) {
//     parent.classList.remove('error');
//   }
//   parent.classList.add('success');
// }

// function isLettersOnly(input) {
//   const lettersOnlyRegex = /^[a-zA-Z]+$/;
//   return lettersOnlyRegex.test(input);
// }

// function isEmailValid(email) {
//   const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   return reg.test(email);
// }

// function PassNum(password) {
//   const reg = /[0-9]/;
//   return reg.test(password);
// }

// function PassLowerCase(password) {
//   const reg = /[a-z]/;
//   return reg.test(password);
// }

// function PassUpperCase(password) {
//   const reg = /[A-Z]/;
//   return reg.test(password);
// }


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

































// WORKINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG

// const form = document.querySelector('#create-account-form');
// const fnameInput = document.querySelector('#fname');
// const lnameInput = document.querySelector('#lname');
// const usernameInput = document.querySelector('#username');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const confirmPasswordInput = document.querySelector('#confirm-password');
// const success_popup = document.getElementById("success");
// const error_popup = document.getElementById("error");
// const s_close = document.getElementById("s_button");
// const e_close = document.getElementById("e_button");
// const s_btn = document.getElementById("success_trigger");
// const e_btn = document.getElementById("error_trigger");

// s_btn.onclick = function () {
//   success_popup.style.display = "block";
// };

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form submission
//   validateForm();

//   if (isFormValid()) {
//     error_popup.style.display = "none"; // Hide the error popup if displayed
//     success_popup.style.display = "block"; // Show the success popup
//   } else {
//     success_popup.style.display = "none"; // Hide the success popup if displayed
//     error_popup.style.display = "block"; // Show the error popup
//   }
// });

// fnameInput.addEventListener('input', validateForm);
// lnameInput.addEventListener('input', validateForm);
// usernameInput.addEventListener('input', validateForm);
// emailInput.addEventListener('input', validateForm);
// passwordInput.addEventListener('input', validateForm);
// confirmPasswordInput.addEventListener('input', validateForm);

// function isFormValid() {
//   const inputContainers = form.querySelectorAll('.input-group');
//   let result = true;
//   inputContainers.forEach((container) => {
//     if (container.classList.contains('error')) {
//       result = false;
//     }
//   });
//   return result;
// }

// function validateForm() {
//   // FNAME
//   if (fnameInput.value.trim() == '') {
//     setError(fnameInput, 'Firstname cannot be empty');
//   } else if (!isLettersOnly(fnameInput.value)) {
//     setError(fnameInput, 'Firstname must contain only letters');
//   } else {
//     setSuccess(fnameInput);
//   }
//   // LNAME
//   if (lnameInput.value.trim() == '') {
//     setError(lnameInput, 'Lastname cannot be empty');
//   } else if (!isLettersOnly(lnameInput.value)) {
//     setError(lnameInput, 'Firstname must contain only letters');
//   } else {
//     setSuccess(lnameInput);
//   }
//   // USERNAME
//   if (usernameInput.value.trim() == '') {
//     setError(usernameInput, 'Username cannot be empty');
//   } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
//     setError(usernameInput, 'Username must be minimum of 5-15 characters');
//   } else {
//     setSuccess(usernameInput);
//   }
//   // EMAIL
//   if (emailInput.value.trim() == '') {
//     setError(emailInput, 'Provide a valid email address');
//   } else if (isEmailValid(emailInput.value)) {
//     setSuccess(emailInput);
//   } else {
//     setError(emailInput, 'Provide a valid email address');
//   }

//   // PASSWORD
//   if (passwordInput.value.trim() == '') {
//     setError(passwordInput, 'Password cannot be empty');
//   } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
//     setError(passwordInput, 'Password must contain a minimum of 6-20 characters');
//   } else if (!PassNum(passwordInput.value)) {
//     setError(passwordInput, 'Password must contain at least 1 number');
//   } else if (!PassLowerCase(passwordInput.value)) {
//     setError(passwordInput, 'Password must contain at least 1 lowercase letter');
//   } else if (!PassUpperCase(passwordInput.value)) {
//     setError(passwordInput, 'Password must contain at least 1 uppercase letter');
//   } else {
//     setSuccess(passwordInput);
//   }

//   // CONFIRM PASSWORD
//   if (confirmPasswordInput.value.trim() == '') {
//     setError(confirmPasswordInput, 'Password cannot be empty');
//   } else if (confirmPasswordInput.value !== passwordInput.value) {
//     setError(confirmPasswordInput, 'Password does not match');
//   } else {
//     setSuccess(confirmPasswordInput);
//   }
// }

// function setError(element, errorMessage) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('success')) {
//     parent.classList.remove('success');
//   }
//   parent.classList.add('error');
//   const paragraph = parent.querySelector('p');
//   paragraph.textContent = errorMessage;
// }

// function setSuccess(element) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('error')) {
//     parent.classList.remove('error');
//   }
//   parent.classList.add('success');
// }

// function isLettersOnly(input) {
//   const lettersOnlyRegex = /^[a-zA-Z]+$/;
//   return lettersOnlyRegex.test(input);
// }

// function isEmailValid(email) {
//   const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   return reg.test(email);
// }

// function PassNum(password) {
//   const reg = /[0-9]/;
//   return reg.test(password);
// }

// function PassLowerCase(password) {
//   const reg = /[a-z]/;
//   return reg.test(password);
// }

// function PassUpperCase(password) {
//   const reg = /[A-Z]/;
//   return reg.test(password);
// }

















// const form = document.querySelector('#create-account-form');
// const fnameInput = document.querySelector('#fname');
// const lnameInput = document.querySelector('#lname');
// const usernameInput = document.querySelector('#username');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const confirmPasswordInput = document.querySelector('#confirm-password');
// const success_popup = document.getElementById("success");
// const error_popup = document.getElementById("error");
// const s_close = document.getElementById("s_button");
// const e_close = document.getElementById("e_button");
// const s_btn = document.getElementById("success_trigger");
// const e_btn = document.getElementById("error_trigger");

// s_btn.onclick = function () {
//   success_popup.style.display = "block";
// };

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form submission
//   validateForm();

//   if (isFormValid()) {
//     error_popup.style.display = "none"; // Hide the error popup if displayed
//     success_popup.style.display = "block"; // Show the success popup
//   } else {
//     success_popup.style.display = "none"; // Hide the success popup if displayed
//     error_popup.style.display = "block"; // Show the error popup
//   }
// });

// fnameInput.addEventListener('input', () => validateField(fnameInput));
// lnameInput.addEventListener('input', () => validateField(lnameInput));
// usernameInput.addEventListener('input', () => validateField(usernameInput));
// emailInput.addEventListener('input', () => validateField(emailInput));
// passwordInput.addEventListener('input', () => validateField(passwordInput));
// confirmPasswordInput.addEventListener('input', () => validateField(confirmPasswordInput));

// function isFormValid() {
//   const inputContainers = form.querySelectorAll('.input-group');
//   let result = true;
//   inputContainers.forEach((container) => {
//     if (container.classList.contains('error')) {
//       result = false;
//     }
//   });
//   return result;
// }

// function validateField(input) {
//   if (input === fnameInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Firstname cannot be empty');
//     } else if (!isLettersOnly(input.value)) {
//       setError(input, 'Firstname must contain only letters');
//     } else {
//       setSuccess(input);
//     }
//   } else if (input === lnameInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Lastname cannot be empty');
//     } else if (!isLettersOnly(input.value)) {
//       setError(input, 'Firstname must contain only letters');
//     } else {
//       setSuccess(input);
//     }
//   } else if (input === usernameInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Username cannot be empty');
//     } else if (input.value.trim().length < 5 || input.value.trim().length > 15) {
//       setError(input, 'Username must be minimum of 5-15 characters');
//     } else {
//       setSuccess(input);
//     }
//   } else if (input === emailInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Provide a valid email address');
//     } else if (isEmailValid(input.value)) {
//       setSuccess(input);
//     } else {
//       setError(input, 'Provide a valid email address');
//     }
//   } else if (input === passwordInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Password cannot be empty');
//     } else if (input.value.trim().length < 6 || input.value.trim().length > 20) {
//       setError(input, 'Password must contain a minimum of 6-20 characters');
//     } else if (!PassNum(input.value)) {
//       setError(input, 'Password must contain at least 1 number');
//     } else if (!PassLowerCase(input.value)) {
//       setError(input, 'Password must contain at least 1 lowercase letter');
//     } else if (!PassUpperCase(input.value)) {
//       setError(input, 'Password must contain at least 1 uppercase letter');
//     } else {
//       setSuccess(input);
//     }
//   } else if (input === confirmPasswordInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Password cannot be empty');
//     } else if (input.value !== passwordInput.value) {
//       setError(input, 'Password does not match');
//     } else {
//       setSuccess(input);
//     }
//   }
// }

// function setError(element, errorMessage) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('success')) {
//     parent.classList.remove('success');
//   }
//   parent.classList.add('error');
//   const paragraph = parent.querySelector('p');
//   paragraph.textContent = errorMessage;
// }

// function setSuccess(element) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('error')) {
//     parent.classList.remove('error');
//   }
//   parent.classList.add('success');
// }

// function isLettersOnly(input) {
//   const lettersOnlyRegex = /^[a-zA-Z\s]+$/;
//   return lettersOnlyRegex.test(input);
// }


// function isEmailValid(email) {
//   const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   return reg.test(email);
// }

// function PassNum(password) {
//   const reg = /[0-9]/;
//   return reg.test(password);
// }

// function PassLowerCase(password) {
//   const reg = /[a-z]/;
//   return reg.test(password);
// }

// function PassUpperCase(password) {
//   const reg = /[A-Z]/;
//   return reg.test(password);
// }





















// const form = document.querySelector('#create-account-form');
// const fnameInput = document.querySelector('#fname');
// const lnameInput = document.querySelector('#lname');
// const usernameInput = document.querySelector('#username');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const confirmPasswordInput = document.querySelector('#confirm-password');
// const success_popup = document.getElementById("success");
// const error_popup = document.getElementById("error");
// const s_close = document.getElementById("s_button");
// const e_close = document.getElementById("e_button");
// const s_btn = document.getElementById("success_trigger");
// const e_btn = document.getElementById("error_trigger");
// const submitButton = document.getElementById("submit-button");

// s_btn.onclick = function () {
//   success_popup.style.display = "block";
// };

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form submission
//   validateForm();

//   if (isFormValid()) {
//     error_popup.style.display = "none"; // Hide the error popup if displayed
//     success_popup.style.display = "block"; // Show the success popup
//   } else {
//     success_popup.style.display = "none"; // Hide the success popup if displayed
//     error_popup.style.display = "block"; // Show the error popup
//   }
// });

// fnameInput.addEventListener('input', () => validateField(fnameInput));
// lnameInput.addEventListener('input', () => validateField(lnameInput));
// usernameInput.addEventListener('input', () => validateField(usernameInput));
// emailInput.addEventListener('input', () => validateField(emailInput));
// passwordInput.addEventListener('input', () => validateField(passwordInput));
// confirmPasswordInput.addEventListener('input', () => validateField(confirmPasswordInput));

// function isFormValid() {
//   const inputContainers = form.querySelectorAll('.input-group');
//   let result = true;
//   inputContainers.forEach((container) => {
//     if (container.classList.contains('error')) {
//       result = false;
//     }
//   });
//   return result;
// }

// function validateForm() {
//   validateField(fnameInput);
//   validateField(lnameInput);
//   validateField(usernameInput);
//   validateField(emailInput);
//   validateField(passwordInput);
//   validateField(confirmPasswordInput);
// }

// function validateField(input) {
//   if (input === fnameInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Firstname cannot be empty');
//     } else if (!isLettersOnly(input.value)) {
//       setError(input, 'Firstname must contain only letters');
//     } else {
//       setSuccess(input);
//     }
//   } else if (input === lnameInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Lastname cannot be empty');
//     } else if (!isLettersOnly(input.value)) {
//       setError(input, 'Lastname must contain only letters');
//     } else {
//       setSuccess(input);
//     }
//   } else if (input === usernameInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Username cannot be empty');
//     } else if (input.value.trim().length < 5 || input.value.trim().length > 15) {
//       setError(input, 'Username must be minimum of 5-15 characters');
//     } else {
//       setSuccess(input);
//     }
//   } else if (input === emailInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Provide a valid email address');
//     } else if (!isEmailValid(input.value)) {
//       setError(input, 'Provide a valid email address');
//     } else {
//       setSuccess(input);
//     }
//   } else if (input === passwordInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Password cannot be empty');
//     } else if (input.value.trim().length < 6 || input.value.trim().length > 20) {
//       setError(input, 'Password must contain a minimum of 6-20 characters');
//     } else if (!PassNum(input.value)) {
//       setError(input, 'Password must contain at least 1 number');
//     } else if (!PassLowerCase(input.value)) {
//       setError(input, 'Password must contain at least 1 lowercase letter');
//     } else if (!PassUpperCase(input.value)) {
//       setError(input, 'Password must contain at least 1 uppercase letter');
//     } else {
//       setSuccess(input);
//     }
//   } else if (input === confirmPasswordInput) {
//     if (input.value.trim() == '') {
//       setError(input, 'Confirm password cannot be empty');
//     } else if (input.value !== passwordInput.value) {
//       setError(input, 'Password does not match');
//     } else {
//       setSuccess(input);
//     }
//   }
// }

// function setError(element, errorMessage) {
//     const parent = element.parentElement;
//     const paragraph = parent.querySelector('p');
  
//     if (errorMessage.trim() === '') {
//       parent.classList.remove('error');
//       parent.style.display = 'none'; // Hide the error message container
//     } else {
//       parent.classList.add('error');
//       paragraph.textContent = errorMessage;
//       parent.style.display = 'block'; // Show the error message container
//     }
  
//     submitButton.disabled = true; // Disable submit button
//   }
  

// function setSuccess(element) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('error')) {
//     parent.classList.remove('error');
//   }
//   parent.classList.add('success');
//   submitButton.disabled = !isFormValid(); // Enable submit button if the form is valid
// }

// function isLettersOnly(input) {
//   const lettersOnlyRegex = /^[a-zA-Z\s]+$/; // Allow spaces in the name
//   return lettersOnlyRegex.test(input);
// }

// function isEmailValid(email) {
//   const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   return reg.test(email);
// }

// function PassNum(password) {
//   const reg = /[0-9]/;
//   return reg.test(password);
// }

// function PassLowerCase(password) {
//   const reg = /[a-z]/;
//   return reg.test(password);
// }

// function PassUpperCase(password) {
//   const reg = /[A-Z]/;
//   return reg.test(password);
// }
















            // ALMOST WORKINGGGGGGGGGGGGGGGGGGGGGGGGGGG
// const form = document.querySelector('#create-account-form');
// const fnameInput = document.querySelector('#fname');
// const lnameInput = document.querySelector('#lname');
// const usernameInput = document.querySelector('#username');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const confirmPasswordInput = document.querySelector('#confirm-password');
// const success_popup = document.getElementById("success");
// const error_popup = document.getElementById("error");
// const s_close = document.getElementById("s_button");
// const e_close = document.getElementById("e_button");
// const s_btn = document.getElementById("success_trigger");
// const e_btn = document.getElementById("error_trigger");

// s_btn.onclick = function () {
//   success_popup.style.display = "block";
// };

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form submission
//   validateForm();
// });

// fnameInput.addEventListener('input', () => {
//   validateField(fnameInput, /^[a-zA-Z ]*$/, 'Firstname must contain only letters and spaces');
// });
// lnameInput.addEventListener('input', () => {
//   validateField(lnameInput, /^[a-zA-Z ]*$/, 'Lastname must contain only letters and spaces');
// });
// usernameInput.addEventListener('input', () => {
//   validateField(usernameInput, /^[a-zA-Z0-9]*$/, 'Username must contain only letters and numbers');
// });
// emailInput.addEventListener('input', () => {
//   validateField(emailInput, /^\S+@\S+\.\S+$/, 'Provide a valid email address');
// });
// passwordInput.addEventListener('input', () => {
//   validateField(passwordInput, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, 'Password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 number');
// });
// confirmPasswordInput.addEventListener('input', () => {
//   validateConfirmPassword();
// });

// function validateForm() {
//   validateField(fnameInput, /^[a-zA-Z ]*$/, 'Firstname must contain only letters and spaces');
//   validateField(lnameInput, /^[a-zA-Z ]*$/, 'Lastname must contain only letters and spaces');
//   validateField(usernameInput, /^[a-zA-Z0-9]*$/, 'Username must contain only letters and numbers');
//   validateField(emailInput, /^\S+@\S+\.\S+$/, 'Provide a valid email address');
//   validateField(passwordInput, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, 'Password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 number');
//   validateConfirmPassword();

//   if (isFormValid()) {
//     error_popup.style.display = "none"; // Hide the error popup if displayed
//     success_popup.style.display = "block"; // Show the success popup
//   } else {
//     success_popup.style.display = "none"; // Hide the success popup if displayed
//     error_popup.style.display = "block"; // Show the error popup
//   }
// }

// function isFormValid() {
//   const inputContainers = form.querySelectorAll('.input-group');
//   let result = true;
//   inputContainers.forEach((container) => {
//     if (container.classList.contains('error')) {
//       result = false;
//     }
//   });
//   return result;
// }

// function validateField(input, regex, errorMessage) {
//   if (input.value.trim() === '') {
//     setError(input, 'This field is required');
//   } else if (!regex.test(input.value)) {
//     setError(input, errorMessage);
//   } else {
//     clearError(input);
//     setSuccess(input);
//   }
// }

// function validateConfirmPassword() {
//   if (confirmPasswordInput.value.trim() === '') {
//     setError(confirmPasswordInput, 'This field is required');
//   } else if (confirmPasswordInput.value !== passwordInput.value) {
//     setError(confirmPasswordInput, 'Password does not match');
//   } else {
//     clearError(confirmPasswordInput);
//     setSuccess(confirmPasswordInput);
//   }
// }

// function setError(element, errorMessage) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('success')) {
//     parent.classList.remove('success');
//   }
//   parent.classList.add('error');
//   const paragraph = parent.querySelector('p');
//   paragraph.textContent = errorMessage;
// }

// function setSuccess(element) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('error')) {
//     parent.classList.remove('error');
//   }
//   parent.classList.add('success');
// }

// function clearError(element) {
//   const parent = element.parentElement;
//   if (parent.classList.contains('error')) {
//     parent.classList.remove('error');
//     const paragraph = parent.querySelector('p');
//     paragraph.textContent = '';
//   }
// }





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

s_btn.onclick = function () {
  success_popup.style.display = "block";
};

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  validateForm();
});

fnameInput.addEventListener('input', () => {
  validateField(fnameInput, /^[a-zA-Z ]*$/, 'Firstname must not contain numbers and special characters');
});
lnameInput.addEventListener('input', () => {
  validateField(lnameInput, /^[a-zA-Z ]*$/, 'Lastname must contain only letters and spaces');
});
usernameInput.addEventListener('input', () => {
  validateField(usernameInput, /^[a-zA-Z0-9]/);
});
emailInput.addEventListener('input', () => {
  validateField(emailInput, /^\S+@\S+\.\S+$/, 'Provide a valid email address');
});
passwordInput.addEventListener('input', () => {
  validatePasswordField(passwordInput);
});
confirmPasswordInput.addEventListener('input', () => {
  validateConfirmPassword();
});

function validateForm() {
  validateField(fnameInput, /^[a-zA-Z ]*$/,);
  validateField(lnameInput, /^[a-zA-Z ]*$/,);
  validateField(usernameInput, /^[a-zA-Z0-9]*$/,);
  validateField(emailInput, /^\S+@\S+\.\S+$/,);
  validatePasswordField(passwordInput);
  validateConfirmPassword();

  if (isFormValid()) {
    error_popup.style.display = "none"; // Hide the error popup if displayed
    success_popup.style.display = "block"; // Show the success popup
  } else {
    success_popup.style.display = "none"; // Hide the success popup if displayed
    error_popup.style.display = "block"; // Show the error popup
  }
}

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

function validateField(input, regex, errorMessage) {
  if (input.value.trim() === '') {
    setError(input, 'This field is required');
  } else if (!regex.test(input.value)) {
    setError(input, errorMessage);
  } else {
    clearError(input);
    setSuccess(input);
  }
}

function validatePasswordField(input) {
    clearError(input); // Clear previous error message
    
    if (input.value.trim() === '') {
      setError(input, 'This field is required');
    } else if (input.value.trim().length < 8 || input.value.trim().length > 20) {
              setError(input, 'Password must contain a minimum of 8-20 characters');
    } else if (!PassNum(input.value)) {
      setError(input, 'Password must contain at least 1 number');
    } else if (!PassLowerCase(input.value)) {
      setError(input, 'Password must contain at least 1 lowercase letter');
    } else if (!PassUpperCase(input.value)) {
      setError(input, 'Password must contain at least 1 uppercase letter');
    } else {
      setSuccess(input);
    }
  }
    
  
  

function validateConfirmPassword() {
  if (confirmPasswordInput.value.trim() === '') {
    setError(confirmPasswordInput, 'This field is required');
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    setError(confirmPasswordInput, 'Password does not match');
  } else {
    clearError(confirmPasswordInput);
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

function clearError(element) {
  const parent = element.parentElement;
  if (parent.classList.contains('error')) {
    parent.classList.remove('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = '';
  }
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


