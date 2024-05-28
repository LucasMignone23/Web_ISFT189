const fecha = document.querySelector('#fecha');

const nav = document.querySelector('#nav');

const abrir_cerrar = document.querySelector('#boton');

//  Carreras

const carrerasLinks = document.querySelectorAll(".carrera");
const tituloCarrera = document.getElementById("titulo_carrera");
const textoCarrera = document.getElementById("texto_carrera");
const imgCarrera = document.querySelector(".banner_carreras");
const pdf = document.getElementById("plan_de_estudio");

// Formulario
const limpiarForm = document.querySelectorAll('.limpiar');

// Limpiar Formulario




//Creacion de fecha (Actualizacion automatica).

const FECHA = new Date()

fecha.innerHTML= FECHA.toLocaleDateString('es-AR', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})


//Menu Mobile, abrir y cerrar agregando una clase.

abrir_cerrar.addEventListener("click",() => {
    
    const menu = nav.classList.contains('nav_visible');

    if (!menu) {
        nav.classList.add('nav_visible')
    }else{
        nav.classList.remove('nav_visible')
    }
});

//Seccion de carrera (Cambiar informacion segun eleccion).


// Definir objeto con información de cada carrera

var carreras = {
    sistema: {
        titulo: "Tecnicatura Superiror en Análisis de Sistemas",
        texto: "El técnico en Análisis de Sistemas está capacitado para desarrollar y mantener sistemas de información automatizados, utilizando herramientas y técnicas modernas. Además, podrá realizar tareas de análisis, diseño, programación, implementación y mantenimiento de software de aplicación, sistemas operativos y redes de computadoras.",
        imagen: "/img/Analista.jpg",
        planes: "/Planes/Analisis_Sistemas.pdf"
    },
    programacion: {
        titulo: "Tecnicatura Superiror en Análisis, Desarrollo y Programación de Aplicaciones",
        texto: "El técnico en Análisis, Desarrollo y Programación de Aplicaciones está capacitado para analizar, diseñar, desarrollar y programar software de aplicación, sistemas operativos y redes de computadoras. Además, podrá realizar tareas de implementación y mantenimiento de sistemas de información automatizados, utilizando herramientas y técnicas modernas.",
        imagen: "/img/Programacion.jpg",
        planes: "/Planes/Programador.pdf"
    },
    guia: {
        titulo: "Tecnicatura Superiror en Guía de Turismo",
        texto: "El técnico en Guía de Turismo está capacitado para interpretar y guiar a los turistas en su experiencia de viaje. Además, podrá organizar y planificar itinerarios y servicios turísticos, y realizar tareas de promoción y comercialización de destinos y productos turísticos.",
        imagen: "/img/Guia.jpg",
        planes: "/Planes/Guia_Turismo.pdf"
    },
    turismo: {
        titulo: "Tecnicatura Superiror en Turismo",
        texto: "El técnico en Turismo está capacitado para organizar y planificar servicios turísticos, tales como alojamiento, transporte, actividades recreativas, culturales y de entretenimiento. Además, podrá realizar tareas de promoción y comercialización de destinos y productos turísticos.",
        imagen: "/img/Turismo.jpg",
        planes: "/Planes/Turismo.pdf"
    },
    periodista: {
        titulo: "Tecnicatura Superiror en Periodismo",
        texto: "El técnico en Periodismo está capacitado para realizar tareas de investigación, recopilación, análisis, interpretación y difusión de información a través de diferentes medios de comunicación. Además, podrá realizar tareas de producción y edición de contenidos periodísticos.",
        imagen: "/img/Periodismo.jpg",
        planes: "/Planes/Periodismo.pdf"
    },
    museologia: {
        titulo: "Tecnicatura Superiror en Museología",
        texto: "El técnico en Museología está capacitado para desarrollar tareas de investigación, conservación, exhibición y difusión del patrimonio cultural y artístico en museos y otras instituciones culturales. Además, podrá realizar tareas de gestión y promoción de actividades culturales y artísticas.",
        imagen: "/img/Museologia.jpg",
        planes: "/Planes/Museologia.pdf"
    }
};




// Función para actualizar la información de la carrera seleccionada
function actualizarCarrera(carrera) {
  tituloCarrera.innerHTML = carrera.titulo;
  textoCarrera.innerHTML = carrera.texto;
  imgCarrera.style.backgroundImage = "url('" + carrera.imagen + "')";
  pdf.href = carrera.planes;
}

// Evento click en los enlaces de carreras
carrerasLinks.forEach(function(carreraLink) {
  carreraLink.addEventListener("click", function(event) {
    event.preventDefault();
    let carreraSeleccionada = carreras[event.target.id];
    actualizarCarrera(carreraSeleccionada);

    pdf.classList.remove('ocultar_boton');
    
  });
});


// Limpieza del formulario, al recarga la web. (Volver de formspree)

document.addEventListener('DOMContentLoaded', ()=>{

    for (let i = 0; i < limpiarForm.length; i++){
        limpiarForm[i].value = '';
    }
});

window.onpageshow = function(event) {
    // Verificar si la página anterior es formspree
    if (event.persisted) {
      // Forzar la recarga de la página
      window.location.reload();
    }
  };