// ---------Detectamos evento click y habilitamos display -----------------
document.getElementById("btnabrir_1").addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "block"
    print('Perfil');
})
document.getElementById("btnabrir_2").addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "block"
    print('Experiencia');

});
document.getElementById("btnabrir_3").addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "block"
    print('Proyectos');

})
document.getElementById("btnabrir_4").addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "block"
    print('Formacion');

})
document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "none"
})

 // --------------Funcion devuelve texto para el modal------------------
function print(item) {

    const json = `{
    "Perfil": "Hola, soy programador en aplicaciones web, también móviles y sistemas embebidos con microcontroladores. También programé a bajo nivel con lenguaje ensamblador, me ha apasionado el código desde siempre. Siendo entusiasta a la hora de resolver los desafíos de la programación y creyendo siempre que la búsqueda y la práctica de información relacionada al código lo hacen posible a cualquier proyecto. Y me siento capas de afrontar cualquier desafío dentro de las herramientas que tengo dominio",
    "Experiencia": "Actualmente, curso el programa Argentina Programa 4.0 con(Ticmas Academy). Además de haber realizado bootcamp En JavaScript-HTML-CSS. También estoy realizando actualmente bootcamp en Node.js,También realice proyectos IoT - (internet de las cosas) con Arduino.",
    "Proyectos":"Realice a lo largo de los años diversos proyectos con microcontroladores mini Web Server, cnc, 3D printed, radio web con esp32 y muchas pequeñas aplicaciones. y en esta última etapa comencé con Front-End",
    "Formacion":"De formación inicial Técnica Electrónica, lo cual desempeñe durante muchos años, no me ha excluido de la programación, ya que esta se encontraba en placas y módulos programables. Haciendo relevante el lenguaje, ensamblador y luego dando paso el C y C++ ejemplo: Arduino"
  }`;

    const user = JSON.parse(json);
    document.querySelector(".modal_titulo").innerHTML = item;
    document.getElementById("div-element").innerHTML = user[item];
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
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;

}
img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;

}
img3.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;

}
img4.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;

}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}



