<?php
session_start();

	include("db_conn.php");
	include("function.php");

	 $user_data = check_login($conn);
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
	
	<div class="container">
		<div class="swiper">
			<div class="swiper-wrapper">			
			  <div class="swiper-slide"><img src=Image/Sports_Complex.jpg>
				<p class="slider-text">
					Santa Rosa Multipurpose Sports Complex<br>
				</p>
					<p class="slider-text2">
					<span class="head1">The City of Santa Rosa Multi-Purpose Complex, also known as Santa Rosa</span>
					<span class="head2"> Sports Complex and as Santa Rosa Sports Coliseum, is an indoor arena </span>
					<span class="head3"> in Santa Rosa, Laguna. It was built in year 2015 and was officially </span>
					<span class="head4">inaugurated on March 5, 2017</span>
				</p>
			  </div>
			  		<div class="swiper-slide"><img src=Image/fra-lippo-lippi.png></div>
			 		<div class="swiper-slide"><img src=Image/fra-lippo-lippi.png></div>		
		   </div>
					<div class="swiper-pagination"></div>			
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>	
		</div>
	</div>
	
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
		
	
			
		<script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

<script>
	let swiper; // Declare a variable to store the swiper instance

function initSwiper() {
  swiper = new Swiper('.swiper', {
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
}

// Initialize swiper on page load
initSwiper();

// Reinitialize swiper when the window size changes
window.addEventListener('resize', function() {
  if (swiper) {
    swiper.destroy(); // Destroy the existing swiper instance
  }
  initSwiper(); // Reinitialize swiper
});

</script>
<script 
    src="home.js">
	
</script>

</body>
</html>