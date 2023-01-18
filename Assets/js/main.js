
// resetea las propiedades o clases agregadas relacionadas a las siguientes clases, requiere query.min.js

$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});


//Navegacion efectos y despliegue de menu

let lista = document.querySelectorAll('.nav');
        function activeLink(){
            lista.forEach((item) => 
            item.classList.remove('active'));
            this.classList.add('active');
        }
        lista.forEach((item) => 
        item.addEventListener('click',activeLink))

const menutoggle = document.querySelector('.menutoggle');
        const navigation = document.querySelector('.navigation');
        menutoggle.onclick = function(){
            navigation.classList.toggle('open')
        }

// Menu content conection
    var nav = document.getElementsByClassName("nav");
    var slide = document.getElementById("slide");

    nav[0].onclick = function () {
        slide.style.transform = "translateX(0px)";
    }
    nav[1].onclick = function () {
        slide.style.transform = "translateX(-668px)";
    }
    nav[2].onclick = function () {
        slide.style.transform = "translateX(-1336px)";
    }
    nav[3].onclick = function () {
        slide.style.transform = "translateX(-2004px)";
    }
    nav[4].onclick = function () {
        slide.style.transform = "translateX(-2672px)";
    }
    nav[5].onclick = function () {
        slide.style.transform = "translateX(-3340px)";
    }

//FOOTER



