/*
- Ejercicio de practica
- Rrealizar calculo de impuesto
*/

// Variables
var compra = 5000;
var impuesto = 0.15;
//aqui se multiplica la compra por el impuesto
var isv = compra * impuesto;
//aqui se suma la compra con el impuesto
var total = compra + isv;

//EJERCICIO 4
// funcion para mostrar el producto de dos numeros

function productoNumeros() {
  var num1 = 5;
  var num2 = 10;
  var producto = num1 * num2;
  alert("El producto de " + num1 + " y " + num2 + " es: " + producto);
}

//EJERCICIO 6

function sumarVariables() {
  var num1 = 10;  //asigono valor a la variable num1 y asi las demas
  var num2 = 50;
  var num3 = 30;
  var num4 = 80;
  var num = 90;
  var suma = num1 + num2 + num3 + num4 + num; //sumo todas las variables

  var etiqueta = document.getElementById("texto"); 
  //obtengo el elemento por id en este caso el id es texto de la etiqueta h2 en el html

  etiqueta.textContent = "La suma de los numeros es: " + suma; //agrego el texto a la etiqueta
}

//EJERCICIO 7

function evaluarEdad() {
  var edad = document.getElementById("edad").value; //obtengo el valor de la edad

  if (edad >= 21) { //aqui se ve si la edad es mayor o igual a 21
    alert("Su edad es: " + edad + " mayor de edad"); //si es mayor o igual a 21 se muestra este mensaje
  } else {
    alert(
      "El numero ingresado es menor a 21, ingreso el: " +edad +" menor de edad"); //si es menor a 21 se muestra este mensaje
  }
}

//EJERCICIO 8

function evaluarCompra() {
  var compra = document.getElementById("compra").value;
  var etiqueta = document.getElementById("texto");


  if (compra > 5000) {
    etiqueta.textContent =
      "La compra supera los L. 5,000.00, ingresaste: " + compra;
  } else {
    etiqueta.textContent =
      "La compra no supera los L. 5,000.00, ingresaste: " + compra;
  }
}

//EJERCICIO 9

function crearTabla() {
  var tabla = "<table>"; //aqui se crea la tabla con la variable tabla

  for (var i = 1; i <= 3; i++) { //se crea un for para las filas que seran 3
    tabla += "<tr>"; //+="<tr>" es para crear una fila en la tabla

    for (var j = 1; j <= 3; j++) { //otro for para las columnas que seran 3
      tabla += "<td> Fila " + i + ", Columna " + j + "</td>"; 
    }
    tabla += "</tr>"; //se cierra la fila
  }
  tabla += "</table>"; //se cierra la tabla despues de los for

  var etiqueta = document.getElementById("tabla"); //se obtiene el elemento por id
  etiqueta.innerHTML = tabla; //se agrega la tabla a la etiqueta obtenida por id antes
}

//EJERCICIO 10

var empleados = [];
var numero = 1;

function agregarEmpleado() {
  //ejercicio con mas trabajo pero se puedo hace
  //aqui se obtienen los valores de los input
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad = document.getElementById("edad").value;
  var sueldo = document.getElementById("sueldo").value;

  var empleado = { //se crea un objeto con los valores obtenidos de los input
    numero: numero,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    sueldo: sueldo,
  };

  empleados.push(empleado); //se agrega el objeto al array de empleados que declare arriba
  numero++; //se incrementa el numero para que no se repita el numero de empleado este lo dejo automatico

  var tabla = "<table>"; //se crea la tabla
  tabla += "<tbody>"; //se crea el cuerpo de la tabla con tbody

  for (var i = 0; i < empleados.length; i++) { //se crea un for para recorrer el array de empleados y mostrarlos en la tabla
    tabla += "<tr>"; 
    tabla += "<td>" + empleados[i].numero + "</td>"; 
    tabla += "<td>" + empleados[i].nombre + "</td>"; 
    tabla += "<td>" + empleados[i].apellido + "</td>";
    tabla += "<td>" + empleados[i].edad + "</td>";
    tabla += "<td>" + empleados[i].sueldo + "</td>";
    tabla += "</tr>";
  }
  tabla += "</tbody>";
  tabla += "</table>";

  var etiqueta = document.getElementById("empleados"); //se obtiene el elemento por id para agregar la tabla
  etiqueta.innerHTML = tabla; //se agrega la tabla a la etiqueta obtenida por id antes
}

function eliminarEmpleado() {
  empleados.pop(); //para eliminar un empleado en este caso el ultimo

  var tabla = document.getElementById("table"); //se obtiene el elemento por id 

  var elimiarFila = tabla.rows.length -1; //se obtiene la ultima fila de la tabla
  tabla.deleteRow(elimiarFila);  //se elimina
}
