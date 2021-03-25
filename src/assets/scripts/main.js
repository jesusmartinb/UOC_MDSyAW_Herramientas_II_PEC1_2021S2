/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


/**
 *
 * Funcionalidad para el despliegue del menu con el botón hamburguesa
 * para dispositivos moviles y tablets con un tamaño inferior a los
 * 730px de ancho
 *
 */

const movil = window.matchMedia('screen and (min-width: 100px) and (max-width: 730px)');
const boton = document.querySelector('#boton-menu');
const menu = document.querySelector('.main-nav');
const links = document.querySelectorAll('.main-nav__link');

movil.addListener(validation);

function validation(event){
  if(event.matches){
    boton.addEventListener('click', mostrarOcultarMenu);
    links.forEach(function(link){
      link.addEventListener('click', mostrarOcultarMenu);
    });
  }else{
    boton.removeEventListener('click', mostrarOcultarMenu)
  }
}

validation(movil);

function mostrarOcultarMenu(){
  if(menu.classList.contains('is-active')){
    menu.classList.remove('is-active');
  }else{
    menu.classList.add('is-active');
  }
}
