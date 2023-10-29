//Manipulacion del DOM
document.addEventListener('DOMContentLoaded', function () {
    // Obteniendo los elementos
    let botonPersonal = document.querySelector('#boton-personal');
    let desplegablePersonal = document.querySelector('#desplegable-Personal');
    let seccionPersonal = document.querySelector('#personal');
    let itemLegajo = document.querySelector('.item-legajo');
    let itemCargar = document.querySelector('.item-cargar');
    let empleadoNuevo = document.querySelector('#empleado-nuevo');
    

    // Programando el evento mouseenter para desplegar menu
    botonPersonal.addEventListener('mouseenter', function () {
        desplegablePersonal.classList.add('show');
    });

    // Evento mouseleave para ocultar desplegable
    desplegablePersonal.addEventListener('mouseleave', function () {
        desplegablePersonal.classList.remove('show');
    });

    // Ocultar desplegable al hacer clic en cualquier parte fuera del desplegable o el botón
    document.addEventListener('click', function (event) {
     if (!desplegablePersonal.contains(event.target) && event.target !== botonPersonal)
/*Si el elemento que desencadeno el evento no esta dentro del desplegablePersonal y no es el botón botonPersonal.
Oculto el desplegable si se hace clic en cualquier parte fuera del desplegable o del botón.  */
        {
            desplegablePersonal.classList.remove('show');
        }
    });


    //ocultando seccion NuevoEmpleado cuando se hace clic en el enlace Legajo de archivo (seccion personal)
    itemLegajo.addEventListener('click', ocultarNuevoEmpleado);
    let visiblePersonal = true;
    function ocultarNuevoEmpleado(event) {
        event.preventDefault();
        if (!visiblePersonal) {
            empleadoNuevo.classList.add('hide');
            visiblePersonal = true;
        }
        else{
            empleadoNuevo.classList.remove('hide');
            visiblePersonal = false;
        }
    }

    //programando el item cargar empleado. Cuando hago clic en el enlace cargar nuevo empleado, oculto la seccion
    //personal:
    let visibleNuevoEmpleado = false;
    itemCargar.addEventListener('click', ocultarPersonal);
    function ocultarPersonal(event) {
        event.preventDefault();
        if (!visibleNuevoEmpleado) {
            seccionPersonal.classList.toggle('hide');
            visibleNuevoEmpleado = true;
        }
        else{
            seccionPersonal.classList.add('show');
            visibleNuevoEmpleado = false;
        }
    }
    
    
    //programando la carga de datos de un nuevo empleado:

    //Objeto vacío empleado, donde se almacenan los empleados:
    let empleado = {};

    //generando la función constructora de los objetos nuevos empleados:
     function NuevoEmpleado(apyNom, numLegajo, fechaNac, dni, domicilio, telefono, cargo ) {
        this.apyNom = apyNom;
        this.numLegajo = numLegajo;
        this.fechaNac = fechaNac;
        this.dni = dni;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.cargo = cargo;
    }

    //funcion que me permite obtener el valor del input del legajo
    function obtenerLegajo() {
       let legajo = document.getElementById('legajo').value; 
       return legajo;
    }

// Llamando al método cargar empleado:
NuevoEmpleado.prototype.cargarEmpleado = function () {

    
    let btnCargarNuevoEmpleado = document.querySelector('.button-cargarEmpleadoNuevo');
    btnCargarNuevoEmpleado.addEventListener('click', cargarNuevoEmpleado);
    
    //funcion que me permite instanciar el objeto para un nuevo empleado
    function cargarNuevoEmpleado(event) {
        event.preventDefault();
        let valorLegajo = obtenerLegajo();//asigno a la vble. el valor de retorno de la funcion obtenerLegajo()
        
        // Instanciando el nuevo empleado con el valor del legajo
        let nuevo = new NuevoEmpleado('Martínez, Juana', valorLegajo, '10/10/2001', '5000', '25 de Mayo Nº 1536', '391-2156879', 'Secretaria');
       
        //probando en consola:
        console.log('Datos del nuevo empleado:', nuevo);

        // Devolver la instancia del nuevo empleado
        return nuevo;
    }
};

//llamo al metodo cargarEmpleado()
  let nuevoEmpleado = new NuevoEmpleado();
  nuevoEmpleado.cargarEmpleado();
});

