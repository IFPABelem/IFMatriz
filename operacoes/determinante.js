const corteMatriz = (matriz, posicao) => {
	let novaMatriz = []
	let ordem = matriz.length
	//Começa a fazer a contagem da segunda linha
	for (let i = 1; i < ordem; i++) {
		novaMatriz.push(
			matriz[i].reduce((atual, prox, index) => {
				if (posicao != index) {
					atual.push(prox)
				}
				return atual
			}, [])
		)
	}
	return novaMatriz
}

const det = (matriz) => {
	if (matriz.length == 2) {
		return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0]
	}

	let resultado = 0
	let ordem = matriz.length
	for (let i = 0; i < ordem; i++) {
		//Linha par = -1
		resultado += matriz[0][i] * (
			(i % 2 ? -1 : 1) * det(corteMatriz(matriz, i))
		)
	}
	return resultado
}

module.exports = det
