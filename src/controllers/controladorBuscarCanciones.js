import { generarURI } from "../helpers/generarURI.js";
import { consultarCanciones } from "../services/servicioTOPTRACK.js";
import { PETICION } from "../helpers/contantesGET.js";
import {pintarCanciones} from './controladorPintarCanciones.js'

let buscar = document.getElementById("buscar");

buscar.addEventListener("click", function (evento) {
  evento.preventDefault();

  //obtengo el id del artista que busca el usuarios
  let artista = document.getElementById("artista").value;

  let uri = generarURI(artista);

  //llamando al servicio (asincrono) desde el controlador
  consultarCanciones(uri, PETICION)
  .then(function (canciones) {
    pintarCanciones(canciones)
  });
});
