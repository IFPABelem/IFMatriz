const produto = (a, b) => {
	let ordem = a.length
	let matriz = []
	for (let l = 0; l < ordem; l++) {
		matriz[l] = []
		for (let c = 0; c < ordem; c++) {
			matriz[l][c] = 0
			for(let i = 0; i < ordem; i++) {
				matriz[l][c] += a[l][i] * b[i][c];
			}
		}
	}
	return matriz
}

module.exports = produto
