<?php
session_start();

	include("db_conn.php");
	include("function.php");

	// $user_data = check_login($conn);
?> 

<!DOCTYPE html>
<html lang="en">


<head>


    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Sports Complex</title>
    <link rel="icon" href="/Logo/Seal_of_Santa_Rosa,_Laguna.png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="home1.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>

	<div class="topnavbar3">	
		<img class="Logo3" src="Logo/Seal_of_Santa_Rosa,_Laguna.png">
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
</div>
		

		
		
	<!-- <i class="fa-solid fa-user"></i>  -->
	
	<div class="container3">
		 <div class="image"><img src=Image/Sports_Complex.jpg></div> 

	</div>

    <div class="holder">
		<div class="container4"></div>
		<div class="container5"></div>
		<div class="container6"></div>	
	</div>
	

<div class="holder2">
<div class="vid">
	<div class="vid2">
		<p>PICTURE/VIDEO<span class="vid3">OF SPORTS COMPLEX</span>
	</div>
</div>

<div class="info">
		<p  class="top">Background</p>
		<p>The City of Santa Rosa Multi-Purpose Complex also known as Santa Rosa Sports Complex and
		as Santa Rosa, Sports Coliseum, is an indoor arena in Santa Rosa, Laguna, Philippines with
		a capacity of 5,700 spectators. The construction of the sports arena began in 2015 and was
		officially inaugurated on March 5, 2017. The arena is one of the playing venues of the Philippine
		Basketball Association (PBA), ASEAN Basketball League and the Philippine Super Liga. It is the
		venue for the sport of netball at the 2019 Southeast Asian Games.</p>
	
	
		<!-- <p>The City of Santa Rosa Multi-Purpose Complex 
		<span class="span1">also known as Santa Rosa Sports Complex and</span>
		<span class="span-2">as Santa Rosa , Sports Coliseum, is an indoor</span>
		<span class="span-3">arena in Santa Rosa, Laguna, Philippines with</span>
		<span class="span-4">a capacity of 5,700 spectators.The construction</span>
		<span class="span-5">of the sports arena began in 2015  and was</span>
		<span class="span-6">officially inaugurated on March 5, 2017. The </span>
		<span class="span-7">arena is one of the playing venues of the Philippine</span>
		<span class="span-8">Basketball Association (PBA), ASEAN Basketball League </span>
		<span class="span-9">and the Philippine Super Liga. It is the venue for</span>
		<span class="span-10">the sport of netball at the 2019 Southeast Asian Games.</span> -->
							
		 
		
	<p class="info2">
		<p  class="num">Contact Number
			<span class="span2">0932-232-000</span>
		</p>

		<p class="E_mail">Email
			<span class="span3">Sta.Rosa_SportsComplex@gmail.com</span>
		</p>
		<p class="add">Address
			<span class="span4">8463+QWF, Leon Arcillas Blvd, Santa Rosa, Laguna</span>
		</p>
	</p>
</div>
</div>

<div class="footer5">
	<img src="Image/footer.png">
</div>
<div class="footer6">
	<img src="Image/arlene.png">
</div>







<script 
        src="home.js">
    </script>
</body>
</html>