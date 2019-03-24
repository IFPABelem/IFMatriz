const transposta = (matriz) => {
	let novaMatriz = []
	let ordem = matriz.length
	for (let l = 0; l < ordem; l++) {
		novaMatriz[l] = []
		for (let c = 0; c < ordem; c++) {
			novaMatriz[l][c] = matriz[c][l]
		}
	}
	return novaMatriz
}

module.exports = transposta
