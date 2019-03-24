const determinante = require('./operacoes/determinante')
const identidade = require('./operacoes/identidade')
const igualdade = require('./operacoes/igualdade')
const soma = require('./operacoes/soma')
const subtracao = require('./operacoes/subtracao')
const transposta = require('./operacoes/transposta')

const ids = ['a', 'b']

let ordem = 3
let matrizes = {
	a: [[]],
	b: [[]]
}

const scanerMatriz = (id) => {
	matrizes[id] = [[]]
	for (let l = 0; l < ordem; l++) {
		matrizes[id][l] = []
		for (let c = 0; c < ordem; c++) {
			matrizes[id][l].push(
				document.getElementById(`${id}:${l}:${c}`).value || 0
			)
		}
	}
	console.log('Load Matriz', id, matrizes[id])
}

const showMatriz = (id) => {
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
			elemInput.placeholder = `${id}${l+1},${c+1}`
			elemInput.id = `${id}:${l}:${c}`
			linhaDom.appendChild(elemInput)
		}
		matrizDom.appendChild(linhaDom)
	}
}

const criarTexto = (texto) => {
	let pDom = document.createElement('p')
	pDom.innerText = texto
	return pDom
}

const informacao = (id, idNext) => {
	let infoDom = document.getElementById(`info:${id}`)
	infoDom.innerHTML = '' //Reset
	infoDom.appendChild(
		criarTexto(`Determinante: ${determinante(matrizes[id])}`)
	)
	infoDom.appendChild(
		criarTexto(`Identidade: ${identidade(matrizes[id]) ? 'Sim' : 'Não'}`)
	)
	infoDom.appendChild(
		criarTexto(`Igualdade(${id}, ${idNext}): ${igualdade(matrizes[id], matrizes[idNext]) ? 'Sim' : 'Não'}`)
	)
}

const main = () => {
	console.log('Atualizando...')
	const ordemAtual = document.getElementById('sl:ordem').value
	ids.map((id) => {
		scanerMatriz(id)
	})

	if (ordemAtual != ordem) {
		console.log('Ordem foi alterado...')
		ordem = ordemAtual
		ids.map((id) => {
			showMatriz(id, ordem)
		})
		document.getElementById('hidden').className = 'uk-hidden'
	} else {
		console.log('Obter dados...')
		document.getElementById('hidden').className = ''
		ids.map((id) => {
			let idNext = ids.filter((i) => i != id)[0]
			informacao(id, idNext)
		})
	}
	console.log('Feito!')
}

document.getElementById('sl:ordem').value = 3 //Force
ids.map((id) => {
	showMatriz(id)
})

document.getElementById('bt:load').addEventListener('click', main, false)
document.getElementById('sl:ordem').addEventListener('change', main)

module.exports = {
	determinante,
	soma,
	subtracao
}
