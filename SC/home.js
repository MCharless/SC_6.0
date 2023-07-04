// const currentPage = window.location.pathname;
// const homeLink = document.querySelector('.topnavbar ul li a[href="home.html"]');
// const facilitiesLink = document.querySelector('.topnavbar ul li a[href="facilities.html"]');
// const aboutUsLink = document.querySelector('.topnavbar3 ul li a[href="Aboutus.html"]');

// if (currentPage === '/home.html') {
//     homeLink.classList.add('activepage');
//     facilitiesLink.classList.remove('activepage');
//     aboutUsLink.classList.remove('activepage');

// } else if (currentPage === '/facilities.html') {
//     facilitiesLink.classList.add('activepage');
//     homeLink.classList.remove('activepage');
//     aboutUsLink.classList.remove('activepage');

// } else if (currentPage === '/Aboutus.html') {
//     aboutUsLink.classList.add('activepage');
//     facilitiesLink.classList.remove('activepage');
//     homeLink.classList.remove('activepage');
// }

// document.addEventListener("DOMContentLoaded", function() {
//     var dropdownIcon = document.querySelector(".fa-circle-user");
//     var dropdownContent = document.querySelector(".dropdown-content");
//     var isOpen = false;

//     dropdownIcon.addEventListener("click", function() {
//       if (isOpen) {
//         dropdownContent.style.display = "none";
//         isOpen = false;
//       } else {
//         dropdownContent.style.display = "block";
//         isOpen = true;
//       }
//     });

//     document.addEventListener("click", function(event) {
//       if (!dropdownIcon.contains(event.target) && !dropdownContent.contains(event.target)) {
//         dropdownContent.style.display = "none";
//         isOpen = false;
//       }
//     });
//   });

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.toLowerCase();
    const homeLink = document.querySelector('.topnavbar ul li a[href="home.php"]');
    const facilitiesLink = document.querySelector('.topnavbar ul li a[href="facilities.php"]');
    const AboutUsLink = document.querySelector('.topnavbar3 ul li a[href="aboutus2.php"]');


    const dropdownIcon = document.querySelector(".fa-circle-user");
    const dropdownContent = document.querySelector(".dropdown-content");
    let isOpen = false;

    dropdownIcon.addEventListener("click", function() {
        if (isOpen) {
            dropdownContent.style.display = "none";
            isOpen = false;
        } else {
            dropdownContent.style.display = "block";
            isOpen = true;
        }
    });

    document.addEventListener("click", function(event) {
        if (!dropdownIcon.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
            isOpen = false;
        }
    });


    if (currentPage === '/sc/home.php') {
        homeLink.classList.add('activepage');
        facilitiesLink.classList.remove('activepage');
        AboutUsLink.classList.remove('activepage');
    } else if (currentPage === '/sc/facilities.php') {
        facilitiesLink.classList.add('activepage');
        homeLink.classList.remove('activepage');
        AboutUsLink.classList.remove('activepage');
    } else if (currentPage === '/sc/aboutus2.php') {
        AboutUsLink.classList.add('activepage');
        facilitiesLink.classList.remove('activepage');
        homeLink.classList.remove('activepage');
    }

});
