
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

//FOOTER
// menu mobil seleccion menu

let mv = document.querySelectorAll('.mv');
        function setActiveClass(){
            mv.forEach((item) => 
            item.classList.remove('active'));
            this.classList.add('active');
        }
        mv.forEach((item) => 
        item.addEventListener('mouseover' , setActiveClass))