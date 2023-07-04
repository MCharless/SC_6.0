
<?php
session_start();

   include("db_conn.php");
   include("function.php");

  if($_SERVER['REQUEST_METHOD'] == "POST")
  {
    $user_name = $_POST['user_name'];
    $password = $_POST['password'];
    $encrypt = md5($password);

    if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
    {
        $query = "SELECT * FROM users WHERE user_name = '$user_name' limit 1";
        $result = mysqli_query($conn, $query);

        if($result)
        {
            if($result && mysqli_num_rows($result) > 0)
            {
                $user_data = mysqli_fetch_assoc($result);

                if($user_data['password'] == $encrypt )
                {
                    $_SESSION['users_id'] = $user_data['users_id'];
                    header("Location: home.php");
                    die();
                }
            }
        }
        //echo "Wrong username or password!";
    }else{
        //echo "Please enter your username or password!";
    }
  }
?>

<!--------------LOGIN PAGE----------->

<!DOCTYPE html>
<html lang="en">                                
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sports Complex</title>
    <link rel="icon" href="Logo/Seal_of_Santa_Rosa,_Laguna.png">
    <link rel="stylesheet" href="style.css">
    <img class="Logo" src="Logo/Seal_of_Santa_Rosa,_Laguna.png">  
    <script src="https://kit.fontawesome.com/2bbac3a66c.js" crossorigin="anonymous" ></script> 

    <div class="H1">
        <p>City Government of Santa Rosa Laguna<br>Santa Rosa Multi-Purpose Complex<br>4026</p>
    </div>
</head>
<body>
    
    <form  id="create-account-form2" name="form" action="login.php" onsubmit="return isvalid()" method="POST">
        <div class="title">
            <h2>LOGIN</h2>
        </div>
        <!-- FNAME -->
        <div class="input-group2">
            <label for="username"></label>
            <input type="text" id="username" placeholder="Username" name="user_name">
            <p class="fas fa-exclamation-circle">Error Message</p>
        </div>
        <!-- LNAME -->
        <div class="input-group2">
            <label for="password"></label>
            <input type="password" id="password" placeholder="Password" name="password">
            <p class="fas fa-exclamation-circle">Error Message</p>
        </div>

        <button type="submit" class="btn">Submit</button> 

        <a href="signup.php"><button id="btn">Signup</button></a>
    </form>
   
</div>  

<script>
    const cancelButton = document.getElementById('btn');
    cancelButton.addEventListener('click', (event) => {
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
    </script>

</body>
</html>
