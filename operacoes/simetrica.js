const igualdade = require('./igualdade')
const transposta = require('./transposta')

const simetrica = (matriz) => {
	let novaMatriz = transposta(matriz)
	return igualdade(matriz, novaMatriz)
}

module.exports = simetrica
