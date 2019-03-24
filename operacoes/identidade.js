const identidade = (matriz) => {
	let check = true
	let ordem = matriz.length
	for (let l = 0; l < ordem; l++) {
		for (let c = 0; c < ordem; c++) {
			if (l == c && matriz[l][c] != 1) {
				check = false
			} else if (l != c && matriz[l][c] != 0) {
				check = false
			}
		}
	}
	return check
}

module.exports = identidade
