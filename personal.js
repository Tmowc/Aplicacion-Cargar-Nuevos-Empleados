

////Capturando elementos con la manipulación del DOM
document.addEventListener('DOMContentLoaded', function () {
    
    /*objeto vacio, el cual contendra los objetos instanciados a partir de la función constructora. 
    Cada objeto nuevo que se instancia pertenece a un empleado nuevo*/
    let empleados = [];

    let botonPersonal = document.querySelector('#boton-personal');
    let desplegablePersonal = document.querySelector('#desplegable-Personal');
    let seccionPersonal = document.querySelector('#personal');
    let itemLegajo = document.querySelector('.item-legajo');
    let itemCargar = document.querySelector('.item-cargar');
    let empleadoNuevo = document.querySelector('#empleado-nuevo');
    let btnCargarNuevoEmpleado = document.querySelector('#formularioNuevoEmpleado');

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
    btnCargarNuevoEmpleado.addEventListener('submit', function (event) {
        event.preventDefault();
        let nombres = document.querySelector('#apyNom').value;
        let numero = document.querySelector('#legajo').value;
        
        // Instanciando el nuevo empleado con el valor del legajo
        let nuevo = new NuevoEmpleado(nombres, numero);
        empleados.push(nuevo);
        
    
        //probando en consola del navegador:
        console.log(`Datos: ${JSON.stringify(empleados)}`);

        // Limpiando los campos del formulario
        document.querySelector('#apyNom').value = '';
        document.querySelector('#legajo').value = '';
    
});
}


//llamo al metodo cargarEmpleado()
  let empleado = new NuevoEmpleado();
  empleado.cargarEmpleado();
});

