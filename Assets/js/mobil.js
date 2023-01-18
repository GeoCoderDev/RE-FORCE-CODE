// menu mobil seleccion menu

let mv = document.querySelectorAll('.mv');
        function setActiveClass(){
            mv.forEach((item) => 
            item.classList.remove('active'));
            this.classList.add('active');
        }
        mv.forEach((item) => 
        item.addEventListener('mouseover' , setActiveClass))

// menu mobil seleccion
var mvnav = document.getElementsByClassName("mv");
var slide = document.getElementById("slide");

mvnav[0].onclick = function () {
    slide.style.transform = "translateX(1000px)";
}
mvnav[1].onclick = function () {
    slide.style.transform = "translateX(600px)";
}
mvnav[2].onclick = function () {
    slide.style.transform = "translateX(200px)";
}
mvnav[3].onclick = function () {
    slide.style.transform = "translateX(-200px)";
}
mvnav[4].onclick = function () {
    slide.style.transform = "translateX(-600px)";
}
mvnav[5].onclick = function () {
    slide.style.transform = "translateX(-1000px)";
}