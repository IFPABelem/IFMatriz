const antisimetrica = require('./operacoes/antisimetrica')
const determinante = require('./operacoes/determinante')
const identidade = require('./operacoes/identidade')
const igualdade = require('./operacoes/igualdade')
const multiplicacao = require('./operacoes/multiplicacao')
const produto = require('./operacoes/produto')
const simetrica = require('./operacoes/simetrica')
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
				Number(
					document.getElementById(`${id}:${l}:${c}`).value || 0
				)
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
		criarTexto(`Determinante(${id}): ${determinante(matrizes[id])}`)
	)
	infoDom.appendChild(
		criarTexto(`Identidade(${id}): ${identidade(matrizes[id]) ? 'Sim' : 'Não'}`)
	)
	infoDom.appendChild(
		criarTexto(`Igualdade(${id}, ${idNext}): ${igualdade(matrizes[id], matrizes[idNext]) ? 'Sim' : 'Não'}`)
	)
	infoDom.appendChild(
		criarTexto(`Simétrica(${id}): ${simetrica(matrizes[id]) ? 'Sim' : 'Não'}`)
	)
	infoDom.appendChild(
		criarTexto(`Anti-simétrica(${id}): ${antisimetrica(matrizes[id]) ? 'Sim' : 'Não'}`)
	)
}

const criarMatriz = (id, matriz) => {
	let matrizDom = document.getElementById(id)
	matrizDom.innerHTML = '' //Reset

	for (let l = 0; l < ordem; l++) {
		let linhaDom = document.createElement('tr')
		linhaDom.style['margin-top'] = 0
		for (let c = 0; c < ordem; c++) {
			let elemTd = document.createElement('td')
			elemTd.textContent = matriz[l][c]
			linhaDom.appendChild(elemTd)
		}
		matrizDom.appendChild(linhaDom)
	}
}

const showMatrizDeResultado = (id, idNext) => {
	criarMatriz(`soma:${id}`, soma(matrizes[id], matrizes[idNext]))
	criarMatriz(`subtracao:${id}`, subtracao(matrizes[id], matrizes[idNext]))
	criarMatriz(`produto:${id}`, produto(matrizes[id], matrizes[idNext]))
	criarMatriz(`transposta:${id}`, transposta(matrizes[id]))
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
			showMatrizDeResultado(id, idNext)
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
	antisimetrica,
	determinante,
	identidade,
	igualdade,
	multiplicacao,
	produto,
	simetrica,
	soma,
	subtracao,
	transposta
}
