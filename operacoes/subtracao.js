const soma = require('./soma')
const multiplicacao = require('./multiplicacao')

const subtracao = (a, b) => {
	return soma(multiplicacao(a, -1), b)
}

module.exports = subtracao
