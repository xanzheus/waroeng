 const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".nav-menu");

 hamburger.addEventListener("click", mobileMenu);

 function mobileMenu() {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
 }


 window.onscroll = function() { myFunction() };

 var header = document.getElementById("myHeader");
 var sticky = header.offsetTop;

 function myFunction() {
     if (window.pageYOffset > sticky) {
         header.classList.add("sticky");
     } else {
         header.classList.remove("sticky");
     }
 }