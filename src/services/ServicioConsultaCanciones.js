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

  const PETICION = {
    method: "GET",
    headers: { Authorization: TOKEN },
  };

  fetch(URI, PETICION)
    .then(function (respuesta) {
      return respuesta.json(); //garantizo formato JSON
    })
    .then(function (respuesta) {
      //Hago lo que quiera con respuesta
      console.log(respuesta.tracks); //Accesdo a un atributo de la respuesta
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
