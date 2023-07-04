

<?php
session_start();

  include("db_conn.php");
  include("function.php");

    $showPopup = false; 

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $f_name = $_POST['f_name'];
    $l_name = $_POST['l_name'];
    $user_name = $_POST['user_name'];
    $password = $_POST['password'];
    $email = $_POST['email'];
   // $encrypt = md5($password);
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    if (!empty($user_name) && !empty($password) && !is_numeric($user_name)) {
        $users_id = random_num(20);
        $query = "INSERT INTO users (users_id, f_name, l_name, user_name, password, email) 
        VALUES ('$users_id', '$f_name', '$l_name', '$user_name', '$hashedPassword', '$email')";
          mysqli_query($conn, $query);
          header("Location: login.php");
          die;
          $showPopup = true; 
    }else{
    }
  }
  
?> 


<!DOCTYPE html>
<html lang="en">
<style>

.popup-content {
  background-color: #e8e8e8;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  width: 620px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

.popup .imgbox {
  text-align: center;
  margin-bottom: 20px;
  }

.popup .imgbox img {
  width: 100px;
  }

.popup .title {
  text-align: center;
  margin-bottom: 10px;
  color: #32ba7c;
  font-size: 60px;
  }

.popup .para {
  font-size: 25px;
  text-align: center;
  margin-bottom: 80px;
  color:black
  }

.popup .button {
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 150px;
  padding: 20px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  }

#s_button{
  background: #32ba7c
  }

  /* p #message {
    position: absolute;
    bottom: -30px;
    color: #fff;
    font-size: 15px;
    
  } */

 
  </style>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sports Complex</title>
<link rel="icon" href="Logo/Seal_of_Santa_Rosa,_Laguna.png">
<link rel="stylesheet" href="style.css">
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->

<img class="Logo2" src="Logo/Seal_of_Santa_Rosa,_Laguna.png">   
<script src="https://kit.fontawesome.com/2bbac3a66c.js" crossorigin="anonymous" ></script>

</head>
<body>
<div class="H1">
  <p>City Government of Santa Rosa Laguna<br>Santa Rosa Multi-Purpose Complex<br>4026</p>
</div>

<form  id="create-account-form" method="POST">
  <div class="title">
      <h2>SIGNUP</h2>
  </div>
   <!-- FNAME -->
   <div class="input-group">
      <label for="fname"></label>
      <input type="text" id="fname" placeholder="Firstname" name="f_name" autocomplete="off">
      <p class="fas fa-exclamation-circle">Error Message</p>
  </div>
  <!-- LNAME -->
  <div class="input-group">
      <label for="lname"></label>
      <input type="text" id="lname" placeholder="Lastname" name="l_name" autocomplete="off">
      <p class="fas fa-exclamation-circle">Error Message</p>
  </div>
  <!-- USERNAME -->
  <div class="input-group ">
      <label for="username"></label>
      <input type="text" id="username" placeholder="Username" name="user_name" autocomplete="off">
      <p class="fas fa-exclamation-circle">Error Message</p>
  </div>
  <!-- EMAIL -->
  <div class="input-group">
      <label for="email" ></label>
      <input type="email" id="email" placeholder="Email" name="email" autocomplete="off">
      <p class="fas fa-exclamation-circle">Error Message</p>
  </div>
  <!-- PASSWORD -->
  <div class="input-group">
      <label for="password"></label>
      <input type="password" id="password" placeholder="Password" name="password">
      <img src="Image/eye-close.png"  id="password_toggle" class="eye-icon">
      <p class="fas fa-exclamation-circle">Error Message</p> 
  </div>
  <p id="message"><span id="strength"></span></p>

  <!-- CONFIRM PASSWORD -->
  <div class="input-group">
      <label for="confirm-password"></label>
      <input type="password" id="confirm-password" placeholder="Password" name="confirmpassword">
      <img src="Image/eye-close.png"  id="password-toggle2" class="eye-icon">
      <p class="fas fa-exclamation-circle">Error Message</p>
  </div>

  <button type="submit" class="btn2" id="success_trigger">Submit</button>
<a href="login.php"><button id="btn2">Cancel</button></a>

<div class="popup" id="success" <?php if (!$showPopup) echo 'style="display: none;"'; ?>>        
    <div class="popup-content">
        <div class="imgbox">
            <img src="Image/checked.png" alt="" class="img">
        </div>
        <div class="title">
            <h3>Success!</h3>
        </div>
        <p class="para">Your account has been created successfully</p>
            <a href="login.php" class="button" id="s_button">OKAY</a>
        
        </form>
       
    </div>

<script>
const pass = document.getElementById("password");
const msg = document.getElementById("message");


pass.addEventListener('input', () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  
  if (pass.value.length < 6) {
   
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
    msg.innerHTML = "Password is weak";
    msg.style.fontSize = "10px";
   

  } else if (pass.value.length >= 6 && pass.value.length < 12) {

    pass.style.borderColor = "yellow";
    msg.style.color = "yellow";
    msg.innerHTML = "Password is medium";
    msg.style.fontSize = "10px";

  } else if (pass.value.length >= 12) {
   
    pass.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
    msg.innerHTML = "Password is strong";
    msg.style.fontSize = "10px";
  }
});
</script>

<script>
const password_toggle = document.getElementById("password_toggle");
const password = document.getElementById("password");
const password_toggle2 = document.getElementById("password-toggle2");
const confirmPassword = document.getElementById("confirm-password");

    password_toggle.onclick = function(){
        if(password.type == "password"){
            password.type = "text";
            password_toggle.src = "Image/eye-open.png";
        } else {
            password.type = "password";
            password_toggle.src = "Image/eye-close.png";
        }
    }

    password_toggle2.onclick = function(){
        if(confirmPassword.type == "password"){
            confirmPassword.type = "text";
            password_toggle2.src = "Image/eye-open.png";
        } else {
            confirmPassword.type = "password";
            password_toggle2.src = "Image/eye-close.png";
        }
    }
</script>



<!-- <script>
    const cancelButton = document.getElementById('btn2');
    cancelButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'login.php';
    }); -->
</script>

    <script>
        <?php if ($showPopup) : ?>
            document.getElementById("success").style.display = "block";
        <?php endif; ?>

        const cancelButton = document.getElementById('btn2');
        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'login.php';
        });
        </script>

<script src="signup.js"></script>


</body>
</html>


<!-- 
<i class="fas fa-check-circle"></i>
<i class="fas fa-exclamation-circle"></i> -->


