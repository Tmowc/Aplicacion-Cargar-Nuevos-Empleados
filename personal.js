//Manipulacion del DOM

document.addEventListener('DOMContentLoaded', function () {
    
    let btnPersonal = document.querySelector('#boton-personal');

let menuDesplegable = document.querySelector('#desplegable-Personal');
let enlaceCargar = document.querySelector('#enlace-cargar');
let enlaceLegajo = document.querySelector('#enlace-legajo');
let enlaceDNI = document.querySelector('#enlace-dni');

let sectionEmpleadoNuevo = document.querySelector('#empleado-nuevo');
let sectionPersonal = document.querySelector('#personal');
let formBuscarEmpleado = document.querySelector('#form');

let botonFinalizarCarga = document.querySelector('#finalizar-carga');



// Envío a todos los elementos al array de elementos ocultos
const elementosOcultos = [menuDesplegable, sectionEmpleadoNuevo, sectionPersonal];


// Evento mouseover para desplegar el menú
btnPersonal.addEventListener('mouseenter', mostrarDesplegable);
function mostrarDesplegable(event) {
    event.preventDefault();
    console.log('evento mouseenter');

    // Ocultar todos los elementos
    elementosOcultos.forEach(element => {
        element.classList.add('d-none');
    });

    // Mostrar solo el menuDesplegable
    menuDesplegable.classList.remove('d-none');
}

//quitar el desplegable cuando se dispara el evento mouseleave
menuDesplegable.addEventListener('mouseleave', function (event) {
    event.preventDefault();
    elementosOcultos.forEach(element => {if (element === menuDesplegable) {menuDesplegable.classList.add('d-none');  }  
    });
});

// Ocultar desplegable al hacer clic en cualquier parte fuera del desplegable o el botón
document.addEventListener('click', function (event) {
    if (!menuDesplegable.contains(event.target) && event.target !== btnPersonal)
/*Si el elemento que desencadeno el evento no esta dentro del desplegablePersonal y no es el botón botonPersonal.
Oculto el desplegable si se hace clic en cualquier parte fuera del desplegable o del botón.  */
       {
           menuDesplegable.classList.remove('show');
       }
   });

   //Mostrar seccion cargar empleado
   enlaceCargar.addEventListener('click', mostrarSeccionNuevoEmpleado)
   function mostrarSeccionNuevoEmpleado(event) {
     event.preventDefault();
     elementosOcultos.forEach(element => {if (element === sectionEmpleadoNuevo) {
        sectionEmpleadoNuevo.classList.remove('d-none');
    }
    });
   }

//---------cargar empleado nuevo--------------------------------/
//programando la carga de datos de un nuevo empleado:

 /*objeto vacio, el cual contendra los objetos instanciados a partir de la función constructora. 
    Cada objeto nuevo que se instancia pertenece a un empleado nuevo*/
    let empleados = [];
    let jsonDatos = ''; //Declaro la vble. jsonData vacia para que esté disponible en todo el ambito.

    //generando la fcion. constructora a partir de la cual se instanciaran los objetos nuevos empleados:
    function NuevoEmpleado(apyNom, numLegajo, fechaNac, dni, domicilio, telefono, cargo ) {
        this.apyNom = apyNom;
        this.numLegajo = numLegajo;
        this.fechaNac = fechaNac;
        this.dni = dni;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.cargo = cargo;
    }


// Llamando al metodo cargar empleado:
NuevoEmpleado.prototype.cargarEmpleado = function () {

        //funcion que me permite instanciar cargar el objeto para un nuevo empleado en el array de objetos empleados[]
        let formulario = document.querySelector('#formularioNuevoEmpleado');
        formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        let nombres = formulario.querySelector('#apyNom').value;
        let numero = formulario.querySelector('#legajo').value;
        let nacimiento = formulario.querySelector('#fechaNacimiento').value;
        let documentoIdentidad = formulario.querySelector('#DNI').value;
        let domicilioEmpleado = formulario.querySelector('#domicilio').value;
        let tel = formulario.querySelector('#telefono').value;
        let puesto = formulario.querySelector('#cargo').value;
        
        // Instanciando el nuevo empleado con el valor del legajo
        let nuevo = new NuevoEmpleado(nombres, numero, nacimiento, documentoIdentidad, domicilioEmpleado, tel, puesto  );
        empleados.push(nuevo);
        
    
        //probando en consola del navegador:
        console.log(`Datos: ${JSON.stringify(empleados)}`);

        // Limpiando los campos del formulario
        formulario.querySelector('#apyNom').value = '';
        formulario.querySelector('#legajo').value = '';
        formulario.querySelector('#fechaNacimiento').value = '';
        formulario.querySelector('#DNI').value = '';
        formulario.querySelector('#domicilio').value = '';
        formulario.querySelector('#telefono').value = '';
        formulario.querySelector('#cargo').value = '';


            jsonDatos = JSON.stringify(empleados);
            console.log(jsonDatos);
          
    
});
}

//llamo al metodo cargarEmpleado()
  let empleado = new NuevoEmpleado();
  empleado.cargarEmpleado();

//finalizar carga de empleado nuevo
botonFinalizarCarga.addEventListener('click', finalizarCarga);
function finalizarCarga(event) {
    event.preventDefault();
    elementosOcultos.forEach(element => {if (element === sectionEmpleadoNuevo) {
        sectionEmpleadoNuevo.classList.add('d-none');
        console.log('finalizar carga!!!');
    }
        
    });
}


//-----------buscar empleado en funcion del lagajo y dni------------

enlaceLegajo.addEventListener('click', buscarEmpleado);

function buscarEmpleado(event) {
event.preventDefault();
elementosOcultos.forEach(element => {if (element === sectionPersonal) {
    sectionPersonal.classList.remove('d-none');
    sectionEmpleadoNuevo.classList.add('d-none');
}

});    
}

//Buscar empleado existente


});


