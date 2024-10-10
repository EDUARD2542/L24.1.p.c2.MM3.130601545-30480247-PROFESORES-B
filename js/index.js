/*En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los
datos de un profesor contratado y reporte su ingreso total*/

import Cl_contratado from "./Cl_contratado.js";

let profesorContratado = new Cl_contratado ("RAFAEL", 30, 15);
let profesorContratado2 = new Cl_contratado ("FELICIA", 30, 20);


let salida = document.getElementById("salida");
salida.InnerHTML ="el ingreso del profesor CONTRATADO 1 1 es" + profesorContratado.ingresoTotal();
salida.InnerHTML += "<br> el ingreso del profesor CONTRATADO 2 es" + profesorContratado2.ingresoTotal();