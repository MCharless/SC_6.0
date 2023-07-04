<?php
$s_name = "localhost";
$user_name = "root";
$password = "";
$db_name = "sportscomplex";
//$encrypt = md5($password);
$conn = mysqli_connect($s_name, $user_name, $password, $db_name);

//$query = "INSERT INTO users(user_name, password) VALUES ('$user_name', '$encrypt')";
//$result = mysqli_query($conn, $query);

if(!$conn) {
    die("Connection Failed:".mysqli_connect_error());
}
    echo " "

?>
