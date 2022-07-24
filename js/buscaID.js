import voltarHome from "./module.js";
document.getElementById("home").onclick = voltarHome;

async function buscaPokemon() {
  let pok = document.getElementById("pok").value;
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`)
    .then((Response) => {
      return Response.json();
    })

    .then((dados) => {
      console.clear();
      console.log(dados);
      document.getElementById("nome").innerHTML = dados["name"];
      document.getElementById("numero").innerHTML = dados["id"];

      let img = dados["sprites"]["front_default"];
      document.getElementById("pic").setAttribute("src", img);
      let movesCotainer = document.getElementById("moves");
      for (let i = 0; i < 5; i++) {
        movesCotainer.innerHTML +=
          "<p>" + dados["moves"][i]["move"]["name"] + "</p>";
      }
    })

    .catch((error) => {
      console.log("error:" + error);
    });
}
document.getElementById("btn1").onclick = buscaPokemon;
