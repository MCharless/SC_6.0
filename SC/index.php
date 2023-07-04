 <?php
session_start();

	include("db_conn.php");
	include("function.php");

	
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
    <link rel="stylesheet" href="indexx.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>

	<div class="topnavbar1">	
		<img class="Logo1" src="Logo/Seal_of_Santa_Rosa,_Laguna.png">
		<p>CITY GOVERNMENT<span class="head">OF SANTA ROSA</span></p>

		
     
		<ul>
			<li><a href="index.php">HOME</a></li>
			<!-- <li><a href="#">FACILITIES</a>
				<ul>
					<li><a href="">Swimming Facility</a></li>
					<li><a href="">Volleyball Facility</a></li>
					<li><a href="">Basketball Facility</a></li>
					<li><a href="">Badminton Facility</a></li>
					<li><a href="">Tennis Facility</a></li>
				</ul>			
			</li>
			<li><a href="">SCHEDULE</a></li> -->
			<li><a href="aboutus.php">ABOUT US</a></li>
			<!-- <li><i class="fas fa-circle-user"></i></li> -->
				
			
		
</div>

				

                <!-- <a href="login.php"><button id="btn">LOGOUT</button></a> -->
			

			</ul>
			
		</div>
		

		
		
	<!-- <i class="fa-solid fa-user"></i>  -->
	<div class="container1">
		<div class="swiper">
			<div class="swiper-wrapper">			
			  <div class="swiper-slide"><img src=Image/fra-lippo-lippi.png></div>
			  <div class="swiper-slide"><img src=Image/fra-lippo-lippi.png></div>
			  <div class="swiper-slide"><img src=Image/fra-lippo-lippi.png></div>
			</div>
			<div class="swiper-pagination"></div>			
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>	
		</div>
	</div>
	<a href="login.php"><button id="btn">Login</button></a>
	<a href="signup.php"><button id="btn2">Signup</button></a>



	
		<div class="container2">
			<div class="image-container">
				<img src="Image/image 12.jpg" alt="Image 1">
			</div>
			<div class="image-container">
				<img src="Image/image 13.png" alt="Image 2">
			</div>
			<div class="image-container">
				<img src="Image/image 14.png" alt="Image 3">
			</div>
		</div>
		
		<div class="footer">
			<img src="Image/footer.png">
		</div>
		<div class="footer2">
			<img src="Image/arlene.png">
		</div>
	
			
		
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

<script>
	const swiper = new Swiper('.swiper', {
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
 
  loop: true,

  pagination: {
    el: '.swiper-pagination',
	clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
</script>
<script 
        src="index.js">
    </script>
</body>
</html>