import voltarHome from "./module.js";
document.getElementById("home").onclick = voltarHome;

async function buscaPokemon() {
  let pok = document.getElementById("pok").value;
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`)
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
      return Error;
    });
}
document.getElementById("btn1").onclick = buscaPokemon;
