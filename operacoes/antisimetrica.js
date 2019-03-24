const igualdade = require('./igualdade')
const transposta = require('./transposta')
const multiplicacao = require('./multiplicacao')

const antisimetrica = (matriz) => {
	let novaMatriz = transposta(matriz)
	return igualdade(multiplicacao(matriz, -1), novaMatriz)
}

module.exports = antisimetrica
