const currentPage = window.location.pathname;
const indexLink = document.querySelector('.topnavbar1 ul li a[href="index.php"]');
const aboutUsLink = document.querySelector('.topnavbar1 ul li a[href="aboutus.php"]');

if (currentPage === '/SC/index.php') {
    indexLink.classList.add('activepage');
    aboutUsLink.classList.remove('activepage');

} else if (currentPage === '/SC/aboutus.php') {
    aboutUsLink.classList.add('activepage');
    indexLink.classList.remove('activepage');
}