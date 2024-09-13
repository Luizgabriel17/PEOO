const teamsUrl = "https://worldcupjson.net/teams"
function exibirClassificacao() {
	fetch(teamsUrl)
		.then((response) => response.json())
		.then((data) => {
			const classificacaoDiv = document.getElementById("classificacao")
			classificacaoDiv.innerHTML = ""
			data.groups.forEach((group) => {
				const tabela = document.createElement("table")
				tabela.innerHTML = `
                    <caption><h4>Grupo ${group.letter}</h4></caption> <!-- Adiciona um título à tabela -->
                    <tr>
                        <th>Equipe</th>
                        <th>Jogos</th>
                        <th>Vitórias</th>
                        <th>Empates</th>
                        <th>Derrotas</th>
                        <th>Gols Pró</th>
                        <th>Gols Contra</th>
                        <th>Saldo de Gols</th>
                        <th>Pontos</th>
                    </tr>
                `
				const timesOrdenados = group.teams.sort(
					(a, b) => b.group_points - a.group_points
				)
				timesOrdenados.forEach((team) => {
					const linha = document.createElement("tr")
					linha.innerHTML = `
                        <td>${team.name}</td> <!-- Nome do time -->
                        <td>${team.games_played}</td> <!-- Número de jogos jogados -->
                        <td>${team.wins}</td> <!-- Número de vitórias -->
                        <td>${team.draws}</td> <!-- Número de empates -->
                        <td>${team.losses}</td> <!-- Número de derrotas -->
                        <td>${team.goals_for}</td> <!-- Número de gols marcados -->
                        <td>${team.goals_against}</td> <!-- Número de gols sofridos -->
                        <td>${team.goal_differential}</td> <!-- Saldo de gols (gols marcados - gols sofridos) -->
                        <td>${team.group_points}</td> <!-- Pontos acumulados -->
                    `
					tabela.appendChild(linha)
				})
				classificacaoDiv.appendChild(tabela)
			})
		})
}
exibirClassificacao()
