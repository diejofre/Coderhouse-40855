import moment from "moment";

let fechaActual = moment();

let fechaNacimiento = moment("29-06-1997", "DD-MM-YYYY");

if (fechaNacimiento.isValid()) {
  console.log(fechaActual.diff(fechaNacimiento, "days"));
}
