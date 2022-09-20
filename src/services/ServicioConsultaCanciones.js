//1. si yo quiero consumir un api
//debo saber PARA DONDE IR Y A QUE SERVICIO...
//DEBO CONFIGURAR LA URI

//RECETA PARA CONSUMIR APIS CON JS PURO
let URI =
  "https://api.spotify.com/v1/artists/21451j1KhjAiaYKflxBjr1/top-tracks?market=US";

//configurar datos especiales o de control en el servidor

let buscar = document.getElementById("buscar");
buscar.addEventListener("click", function (evento) {
  evento.preventDefault();
  let artista = document.getElementById("artista").value;
  console.log(artista);
  URI = `https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`;

  const TOKEN =
    "Bearer BQBK3B4d-L-njmilfG4gSLj04h8-r3ImqTEHDYlOLrjZDXp0kRPpJlTzYDSzPD0M0jVuxUbvHZ3tfsw_hO74p3YkhkzXB619avouj6ahj4O6XwAdvsCBVn0vcI5Y1cYJ7GTuzo_OnbN-hOz6X5EPz6zseHMntrQDkbC0sAlO9cAs";

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

  fetch(URI, PETICION)
    .then(function (respuesta) {
      return respuesta.json(); //garantizo formato JSON

    })
    .then(function (respuesta) {
      //Hago lo que quiera con respuesta
      console.log(respuesta.tracks); //Accesdo a un atributo de la respuesta
      let fila = document.getElementById("fila");
      fila.innerHTML=""
      respuesta.tracks.forEach(function (cancion) {
        // console.log(cancion)
        // console.log(cancion.name)
        // console.log(cancion.preview_url)
        // console.log(cancion.album.images[0].url)
        // console.log(cancion.popularity)
        // console.log(cancion.album.name)
        // console.log(cancion.album.release_date)
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
        fechalanza.textContent =
          "Fecha lanzamiento: " + cancion.album.release_date;

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
    })

    .catch(function (respuesta) {
      console.log(respuesta);
    });
});

//3. configuto la peticion
//NOTA: solo POST y PUT configuran body
//para js la peticion es un objeto

//4. ARRANQUE PUES MIJO
//CONSUMA API
