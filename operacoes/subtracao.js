const soma = require('./soma')
const multiplicacao = require('./multiplicacao')

const subtracao = (a, b) => {
	return soma(a, multiplicacao(b, -1))
}

module.exports = subtracao
