export function pintarCanciones(canciones) {
  let fila = document.getElementById("fila");
  fila.innerHTML = "";

  canciones.tracks.forEach(function (cancion) {
    let columna = document.createElement("div");
    columna.classList.add("col");

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100", "shadow");

    let audio = document.createElement("audio");
    audio.classList.add("w-100");
    audio.setAttribute("controls", "controls");
    audio.src = cancion.preview_url;

    let imagenes = document.createElement("img");
    imagenes.classList.add("img-fluid", "w-100");
    imagenes.src = cancion.album.images[0].url;

    let nombre = document.createElement("h4");
    nombre.classList.add("text-center");
    nombre.textContent = "Nombre cancion: " + cancion.name;

    let popularidad = document.createElement("h4");
    popularidad.classList.add("text-center");
    popularidad.textContent = "Popularidad: " + cancion.popularity;

    let albumnombre = document.createElement("h5");
    albumnombre.classList.add("text-center");
    albumnombre.textContent = "Nombre album: " + cancion.album.name;

    let fechalanza = document.createElement("h5");
    fechalanza.classList.add("text-center");
    fechalanza.textContent = "Fecha lanzamiento: " + cancion.album.release_date;

    //PADRES E HIJOS
    tarjeta.appendChild(imagenes);
    tarjeta.appendChild(audio);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(popularidad);
    tarjeta.appendChild(albumnombre);
    tarjeta.appendChild(fechalanza);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
  });
}
