const soma = (a, b, negativo) => {
	let ordem = a.length
	let matriz = []
	for (let l = 0; l < ordem; l++) {
		matriz[l] = []
		for (let c = 0; c < ordem; c++) {
			if (negativo) {
				matriz[l][c] = a[l][c] - b[l][c]
			} else {
				matriz[l][c] = a[l][c] + b[l][c]
			}
		}
	}
	return matriz
}

module.exports = soma
