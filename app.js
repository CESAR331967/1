// ---------Detectamos evento click y habilitamos display -----------------
document.getElementById("btnabrir_1").addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "block"
    texto1();

})
document.getElementById("btnabrir_2").addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "block"
    texto2();

})
document.getElementById("btnabrir_3").addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "block"
    texto3();

})
document.getElementById("btnabrir_4").addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "block"
    texto4();

})
document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "none"
})

// --------------Funciones devuelven texto para el modal------------------
function texto1() {
    document.querySelector(".modal_titulo").innerHTML = 'Perfil'
    document.getElementById("div-element").innerHTML = 'Hola, soy programador en aplicaciones web, también móviles y sistemas embebidos con microcontroladores. También programé a bajo nivel con lenguaje ensamblador, me ha apasionado el código desde siempre. Siendo entusiasta a la hora de resolver los desafíos de la programación y creyendo siempre que la búsqueda y la práctica de información relacionada al código lo hacen posible a cualquier proyecto. Y me siento capas de afrontar cualquier desafío dentro de las herramientas que tengo dominio'
    return false
}
function texto2() {
    document.querySelector(".modal_titulo").innerHTML = 'Experiencia'
    document.getElementById("div-element").innerHTML = 'Actualmente, curso el programa Argentina Programa 4.0 con(Ticmas Academy). Además de haber realizado bootcamp En JavaScript-HTML-CSS. También estoy realizando actualmente bootcamp en Node.js,También realice proyectos IoT - (internet de las cosas) con Arduino. '
    return false
}
function texto3() {
    document.querySelector(".modal_titulo").innerHTML = 'Proyectos'
    document.getElementById("div-element").innerHTML = 'Realice a lo largo de los años diversos proyectos con microcontroladores mini Web Server, cnc, 3D printed, radio web con esp32 y muchas pequeñas aplicaciones. y en esta última etapa comencé con Front-End. '
    return false
}
function texto4() {
    document.querySelector(".modal_titulo").innerHTML = 'Formacion'
    document.getElementById("div-element").innerHTML = 'De formación inicial Técnica Electrónica, lo cual desempeñe durante muchos años, no me ha excluido de la programación, ya que esta se encontraba en placas y módulos programables. Haciendo relevante el lenguaje, ensamblador y luego dando paso el C y C++ ejemplo: Arduino'
    return false
}
//  ----------------------------Formulario De Contacto---------------------------
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 4) {
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if (message.value.length < 4) {
        warnings += `No Hay mensaje <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }
})
// ----------------------------Imagen Modal-------------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
//agregamos mas de una imagen
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}
 img2.onclick = function(){
     modal.style.display = "block";
     modalImg.src = this.src;
     
   }
   img3.onclick = function(){
     modal.style.display = "block";
     modalImg.src = this.src;
    
   } 
   img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    
  } 
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}