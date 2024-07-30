const numeroenha = document.querySelector('.parametro=senha__te;')
const botoes= document.querySelectorAll('.parametro=senha__botao')

botoes[0].onclick = diminuirTamanho

let tamanhoSenha = 5
numeroSenha.textContent = tamanhoSenha

function diminuirTamanho() {
    tamanhoSenha = tamanhoSenha - 1
    numeroSenha.textContent = tamanhoSenha
}