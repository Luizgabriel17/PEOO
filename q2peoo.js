function partidas() {

  let partida = document.getElementById('numero').value;

  const url_matches = 'https://worldcupjson.net/matches';
  
  const n = partida

  let num = (n) - (1)

  fetch(url_matches)
    .then(response => response.json()
    .then((data) => {const array_partidas = Object.entries(data[num])
      console.log(array_partidas)
      
      document.getElementById("resultado1").innerHTML = "Stadio: " + array_partidas[1].pop()
      document.getElementById("resultado2").innerHTML = "Local: " + array_partidas[2].pop()
      document.getElementById("resultado3").innerHTML = "Status da Patida: " + array_partidas[3].pop()
      document.getElementById("resultado4").innerHTML = "Telespectadores: " + array_partidas[4].pop() + " pessoas"
      document.getElementById("resultado5").innerHTML = "Seleção da Casa: " + array_partidas[6].pop()
      document.getElementById("resultado6").innerHTML = "Seleção Visitante: " + array_partidas[7].pop()
      document.getElementById("resultado7").innerHTML = "Seleção Vencedora: " + array_partidas[10].pop()

}));
    
}

partidas();