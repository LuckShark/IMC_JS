
const calcular = document.getElementById('calcular')
//a única variável global ficou sendo o botão

function imc (){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado') //no caso do resultado, eu não quero o valor, eu quero o HTML dele

    if (nome !== '' && altura !== '' && peso !== '') { //validação simples
        const valorIMC = (peso / (altura * altura)).toFixed(1) //aredondao o valor em 1 casa

        let classificacao = ''

        if(valorIMC < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. <br>Parabéns.'
        } else if(valorIMC < 30) {
            classificacao = 'acima do peso.'
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade <br>(Grau I)'
        } else if(valorIMC < 40) {
            classificacao = 'com obesidade <b>(Grau II)'
        } else {
            classificacao = 'com obesidade mórbida <br> (Grau III)'
        }

        resultado.innerHTML = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
    } else {
        resultado.textContent = 'Preencha todos os campos para seu resultado.'
    }

}

calcular.addEventListener('click', imc) //quando 'calcular' for clicado, a função 'imc' será feita.

