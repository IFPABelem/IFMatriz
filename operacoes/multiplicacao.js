const multiplicacao = (matriz, numb) => {
	return matriz.map((linhas) => {
		return linhas.map((elem) => {
			return numb * elem
		})
	})
}

module.exports = multiplicacao
