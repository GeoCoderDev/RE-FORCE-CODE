
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
    var anchoPantallaDispositivo = window.innerWidth;

    //Bucle para asignar la traslacion de cada boton de la barra de navegacion
    //Proporcionalmente al ancho de la pantalla del dispositivo
    for(let i=0; i<nav.length;i++){
        nav[i].onclick = function () {
            slide.style.transform = `translateX(-${anchoPantallaDispositivo*i}px)`;
        }
    }


//FOOTER



