<?php
    session_start();

    include("db_conn.php");
    include("function.php");

    if($_SERVER['REQUEST_METHOD'] == "POST")
    {
        $f_name = $_POST['f_name'];
        $l_name = $_POST['l_name'];
        $user_name = $_POST['user_name'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $encrypt = md5($password);

        if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
        {
            $users_id = random_num(20); 
            $query = "INSERT INTO users (f_name, l_name, users_id, user_name, password, email) 
            VALUES('$f_name', '$l_name', '$users_id', '$user_name', '$encrypt', '$email')";
            mysqli_query($conn, $query);
            header("Location: login.php");
            die;
        }
        else{
            echo "";
        }

    }
    

?>
<!DOCTYPE html>
<html lang="en">
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
            <input type="text" id="fname" placeholder="Firstname" name="f_name">
            <p class="fas fa-exclamation-circle">Error Message</p>
        </div>
        <!-- LNAME -->
        <div class="input-group">
            <label for="lname"></label>
            <input type="text" id="lname" placeholder="Lastname" name="l_name">
            <p class="fas fa-exclamation-circle">Error Message</p>
        </div>
        <!-- USERNAME -->
        <div class="input-group ">
            <label for="username"></label>
            <input type="text" id="username" placeholder="Username" name="user_name">
            <p class="fas fa-exclamation-circle">Error Message</p>
        </div>
        <!-- EMAIL -->
        <div class="input-group">
            <label for="email"></label>
            <input type="email" id="email" placeholder="Email" name="email">
            <p class="fas fa-exclamation-circle">Error Message</p>
        </div>
        <!-- PASSWORD -->
        <div class="input-group">
            <label for="password"></label>
            <input type="password" id="password" placeholder="Password" name="password">
            <p class="fas fa-exclamation-circle">Error Message</p>
        </div>
        <!-- CONFIRM PASSWORD -->
        <div class="input-group">
            <label for="confirm-password"></label>
            <input type="password" id="confirm-password" placeholder="Password" name="confirmpassword">
            <p class="fas fa-exclamation-circle">Error Message</p>
        </div>

        <button type="submit" class="btn2">Submit</button>
        <a href="login.php"><button id="btn2">Cancel</button></a>
    </form>

    
    <!-- JAVASCRIPT -->
    <script>
        const cancelButton = document.getElementById('btn2');
    
        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'login.php';
        });
    </script>

    <script 
        src="signup.js">
    </script>


</body>
</html>

<!-- 

    <i class="fas fa-check-circle"></i>
    <i class="fas fa-exclamation-circle"></i>

 -->