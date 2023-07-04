<?php
session_start();

include("db_conn.php");
include("function.php");

$user_data = check_login($conn);
$_SESSION['login_user'] = $user_data['user_name'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sports Complex</title>
    <link rel="icon" href="/Logo/Seal_of_Santa_Rosa,_Laguna.png">
    <link rel="stylesheet" href="profilee.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="topnavbar">    
        <img class="Logo1" src="Logo/Seal_of_Santa_Rosa,_Laguna.png">
        <p>CITY GOVERNMENT<span class="head">OF SANTA ROSA</span></p>
        <ul>
            <li><a href="home.php">HOME</a></li>
            <li><a href="facilities.php">FACILITIES</a></li>
            <li><a href="aboutus2.php">ABOUT US</a></li>            
            <li class="dropdown">
                <a href="#" onclick="event.preventDefault()"><i class="fas fa-circle-user"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="profile.php">PROFILE</a></li>
                        <li><a href="#">SCHEDULE HISTORY</a></li>
                        <li><a href="logout.php">LOGOUT</a></li>
                    </ul>
            </li>
        </ul>    
    </div>

    

   
    <?php
    // Assuming you have a database connection established

    // Fetch user information from the database based on their username
    // Replace `your_user_name_column` with the actual column name in your user table
    $query = "SELECT * FROM users WHERE user_name = '".$_SESSION['login_user']."'";
    $result = mysqli_query($conn, $query);

    if ($result && mysqli_num_rows($result) > 0) {
        // Fetch the user data
        $row = mysqli_fetch_assoc($result);
        $username = $row['user_name'];
    } else {
        $username = "No user found.";
    }
    ?>
     <div class="container"> 
        <div class="image">
            <image src="Image/user.png"><br>
            <div class="name"><?php echo $row['f_name']; ?> <?php echo $row['l_name']; ?></div>
        </div>
    </div>
    <div class="outer-table">
    <div class="binfo">Basic Information</div>
        <div class="info">
        <table class="user-table">
            <tr>
                <td  class="user">Username:</td>
                <td ><?php echo $row['user_name']; ?></td>
            </tr>
            <tr>
                <td class="id">User ID:</td>
                <td><?php echo $row['users_id']; ?></td>
            </tr>
            <tr>
                <td class="fname">First Name:</td>
                <td><?php echo $row['f_name']; ?></td>
            </tr>
            <tr>
                <td class="lname">Last Name:</td>
                <td><?php echo $row['l_name']; ?></td>
            </tr>
            <tr>
                <td class="email">Email:</td>
                <td><?php echo $row['email']; ?></td>
            </tr>
            <tr>
                <td class="pass">Password:</td>
                <td ><a href="#" class="pass2">Change Password?</a></td>
            </tr>

        </table>
        </div>
        </div>




    <script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script src="home.js"></script>
</body>
</html>
