import voltarHome from "./module.js";
document.getElementById("home").onclick = voltarHome;

async function searchPokemonType() {
  let types = document.getElementById("type").value;
  await fetch(`https://pokeapi.co/api/v2/type/${types}`)
    .then((Response) => {
      return Response.json();
    })

    .then((dados) => {
      let pokemons = dados.pokemon;
      let container = document.getElementById("container");
      pokemons.forEach((pokemon, index) => {
        container.innerHTML +=
          "<div>" + "#" + index + " - " + pokemon.pokemon.name + "</div>";
      });
    })

    .catch((error) => {
      console.log("error:" + error);
    });
}
document.getElementById("btn1").onclick = searchPokemonType;
