const teamsUrl = "https://worldcupjson.net/teams"
const matchesUrl = "https://worldcupjson.net/matches"
function carregarTimes() {
	fetch(teamsUrl)
		.then((response) => response.json())
		.then((data) => {
			const select = document.getElementById("teamSelect")
			data.groups.forEach((group) => {
				group.teams.forEach((team) => {
					const option = document.createElement("option")
					option.value = team.country
					option.textContent = team.name
					select.appendChild(option)
				})
			})
		})
}

function buscarJogos() {
	const select = document.getElementById("teamSelect")
	const equipeSelecionada = select.value 
	fetch(matchesUrl)
		.then((response) => response.json()) 
		.then((data) => {
			const resultadosDiv = document.getElementById("resultados") 
			resultadosDiv.innerHTML = ""
			const jogosDaEquipe = data.filter(
				(jogo) =>
					jogo.home_team.country === equipeSelecionada ||
					jogo.away_team.country === equipeSelecionada
			)
			if (jogosDaEquipe.length > 0) {
				jogosDaEquipe.forEach((jogo) => {
					const elementoJogo = document.createElement("div")
					elementoJogo.innerHTML = `
            <p>${jogo.home_team.name} ${jogo.home_team.goals} x ${
						jogo.away_team.goals
					} ${jogo.away_team.name}</p>
            <p>Data: ${new Date(jogo.datetime).toLocaleString()}</p>
            <p>Local: ${jogo.location} - ${jogo.venue}</p>
            <br>
        `
					resultadosDiv.appendChild(elementoJogo)
				})
			} else {
				resultadosDiv.innerHTML =
					"<p>Nenhum jogo encontrado para essa equipe.</p>"
			}
		})
}

carregarTimes()
