const determinante = require('./operacoes/determinante')
const soma = require('./operacoes/soma')
const subtracao = (a, b) => {
	return soma(a, b, true)
}

const showMatriz = (id, ordem) => {
	let matrizDom = document.getElementById(`matriz:${id}`)
	matrizDom.innerHTML = '' //Limpa matriz atual

	for (let l = 0; l < ordem; l++) {
		let linhaDom = document.createElement('div')
		linhaDom.style['margin-top'] = 0
		for (let c = 0; c < ordem; c++) {
			let elemInput = document.createElement('input')
			elemInput.type = 'number'
			elemInput.style.width = `${(100/ordem)}%`
			elemInput.style.margin = 0
			elemInput.style.padding = 0
			elemInput.placeholder = `${id}${l+1}${c+1}`
			elemInput.id = `${id}:${l}:${c}`
			linhaDom.appendChild(elemInput)
		}
		matrizDom.appendChild(linhaDom)
	}
}

const main = () => {
	console.log('Atualizando...')
	const ordem = document.getElementById('sl:ordem').value
	showMatriz('a', ordem)
	showMatriz('b', ordem)
}

document.getElementById('sl:ordem').value = 3
showMatriz('a', 3)
showMatriz('b', 3)

document.getElementById('bt:load').addEventListener('click', main, false)
document.getElementById('sl:ordem').addEventListener('change', main)

module.exports = {
	determinante,
	soma,
	subtracao
}
