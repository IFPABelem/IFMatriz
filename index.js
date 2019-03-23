const determinante = require('./operacoes/determinante')
const soma = require('./operacoes/soma')
const subtracao = (a, b) => {
	return soma(a, b, true)
}

module.exports = {
	determinante,
	soma,
	subtracao
}
