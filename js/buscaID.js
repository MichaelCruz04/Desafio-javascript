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
      document.getElementById("movimento").innerHTML = dados["moves"][1];
      let img = dados["sprites"]["front_default"];
      document.getElementById("pic").setAttribute("src", img);
    })

    .cath((error) => {
      console.log("error:" + error);
    });
}
document.getElementById("btn1").onclick = buscaPokemon;

const voltarHome = () => {
  location.href = "index.html";
};
document.getElementById("home").onclick = voltarHome;
