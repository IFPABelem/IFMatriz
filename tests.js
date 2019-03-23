const determinante = require('./operacoes/determinante')
const soma = require('./operacoes/soma')
const assert = require('assert')

const criarMatriz = (ordem, fazer) => {
	let matriz = []
	let n = 0
	for (let l = 0; l < ordem; l++) {
		matriz[l] = []
		for (let c = 0; c < ordem; c++) {
			n++
			matriz[l][c] = Math.round(fazer(n, l, c))
		}
	}
	return matriz
}

const a = criarMatriz(2, (n, l, c) => {
	return n
})
console.log('A=', a)

const b = criarMatriz(3, (n, l, c) => {
	return n
})
console.log('B=', b)

const c = criarMatriz(5, (n, l, c) => {
	if (n % 2 == 0) {
		return n * (l + c)
	}
	return 2 + n
})
console.log('C=', c)

const d = criarMatriz(6, (n, l, c) => {
	if (n % 2 == 0) return -l
	return n - c
})
console.log('D=', d)

console.log('Det(a)=', determinante(a))
assert.equal(determinante(a), -2)
console.log('Det(b)=', determinante(b))
assert.equal(determinante(b), 0)
console.log('Det(c)=', determinante(c))
assert.equal(determinante(c), -860160)
console.log('Det(d)=', determinante(d))
assert.equal(determinante(d), 0)

console.log('a+a=', soma(a, a))
assert.equal(JSON.stringify(soma(a, a)), JSON.stringify([[2,4],[6,8]]))
console.log('c-c=', soma(c, c, true))
assert.equal(JSON.stringify(soma(a, a, true)), JSON.stringify([[0,0],[0,0]]))
