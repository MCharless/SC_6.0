   <!-- $hashedPassword = password_hash($password, PASSWORD_DEFAULT); -->
<?php
session_start();
include("db_conn.php");
include("function.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $user_name = $_POST['user_name'];
    $password = $_POST['password'];
   // $encrypt = md5($password);
    //$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    if (!empty($user_name) && !empty($password) && !is_numeric($user_name)) {
        $query = "SELECT * FROM users WHERE user_name = '$user_name' AND password ='$password'";
        $result = mysqli_query($conn, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $user_data = mysqli_fetch_assoc($result);

            if($user_data['password'] == $password ){
                $_SESSION['users_id'] = $user_data['users_id'];
                header("Location: home.php");
                die();
            } else {
                // Incorrect password
                echo '<script>alert("Incorrect username or password")</script>';
            }
        } else {
            // User not found
            echo '<script>alert("User not found")</script>';
        }
    } else {
        // Empty fields or invalid username
        echo '<script>alert("Please enter a valid username and password")</script>';
    }
}


?>
<!--------------LOGIN PAGE----------->

<!DOCTYPE html>
<html lang="en">    
    <style>
#username{
    background-image:url(Image/user.png);
    background-position: 5px center ;
    padding-left: 40px;
    background-size: 30px 30px;
    background-repeat: no-repeat;
}
#password{
    background-image:url(Image/pass.png);
    background-position: 5px center ;
    padding-left: 40px;
    background-size: 25px;
    background-repeat: no-repeat;
    margin:auto;
    
    
}
    </style>                            
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sports Complex</title>
    <link rel="icon" href="Logo/Seal_of_Santa_Rosa,_Laguna.png">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href=<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" >
    <img class="Logo" src="Logo/Seal_of_Santa_Rosa,_Laguna.png">  
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js" integrity="sha512-cvTq8GuMzhsW/M2AD7w4QJ38f/wSd7GJ6ERtqemK5sZUZ/umjAWazXowx+h3l/3aMu4Efzx+ZnWWcxbtfdyuzw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->

    <script src="https://kit.fontawesome.com/2bbac3a66c.js" crossorigin="anonymous" ></script> 

    <div class="H1">
        <p>City Government of Santa Rosa Laguna<br>Santa Rosa Multi-Purpose Complex<br>4026</p>
    </div>
</head>
<body>
    
    <form  id="create-account-form2" name="form" action="login.php" method="POST">
        <div class="title1">
            <h2>LOGIN</h2>
        </div>
      
        <!-- USERNAME -->
        <div class="input-group2">
            <label for="username"></label>      
            <input type="text" id="username" placeholder="Username" name="user_name" autocomplete="off">
            <p class="fas fa-exclamation-circle">Error Message</p>
        </div>
        <!-- PASSWORD -->
        <div class="input-group2">
            <label for="password"></label>
            <input type="password" id="password" placeholder="Password" name="password">
            <!-- <i class="fas fa-eye" id="password-toggle"></i> -->
            <img src="Image/eye-close.png"  id="password_toggle" class="eye-icon">
            <p class="fas fa-exclamation-circle">Error Message</p>
        </div>

        <button type="submit2" class="btn">Submit</button> 
        <a href="signup.php"><button id="btn">Signup</button></a>
    </form>
   
</div>  


<!-- <script>

    let password_toggle = document.getElementById("password_toggle");
    let password = document.getElementById("password");

    password_toggle.onclick = function(){
        if(password.type == "password"){
            password.type = "text";
            password_toggle.src = "Image/eye-open.png";
        }else{
            password.type = "password"
            password_toggle.src = "Image/eye-close.png";
        }
    }

</script> -->
<script>
    const signupButton = document.getElementById('btn');
    signupButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'signup.php';
    });
</script>



<script 
        src="login.js">
    </script>
<!-- 
    <script>
            function isvalid(){
                var user = document.form.user_name.value;
                var pass = document.form.password.value;
                if(user.length=="" && pass.length==""){
                    alert("Please enter your Username and Password");
                    return false;
                }
                else{
                    if(user.length==""){
                    alert("Please enter your Username");
                    return false;
                }
                if(pass.length==""){
                    alert("Please enter your Password");
                    return false;
           
        }
        }
    }
    </script> -->
    </body>
</html>