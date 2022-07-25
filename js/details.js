import voltarHome from "./module.js";
document.getElementById("home").onclick = voltarHome;

let params = new URL(document.location).searchParams;
const name = params.get("name");

async function buscaPokemon() {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      document.getElementById("nome").innerHTML = data["name"];
      document.getElementById("numero").innerHTML = data["id"];
      let img = data["sprites"]["front_default"];
      document.getElementById("pic").setAttribute("src", img);
      let movesCotainer = document.getElementById("moves");
      for (let i = 0; i < 5; i++) {
        movesCotainer.innerHTML +=
          "<p>" + data["moves"][i]["move"]["name"] + "</p>";
      }
    })
    .catch((error) => {
      return error;
    });
}
buscaPokemon();
