let firstNumber = prompt('Digite o primeiro número.')
let secondNumber = prompt('Digite o segundo número.')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const div = firstNumber / secondNumber
const multi = firstNumber * secondNumber
const restDiv = firstNumber % secondNumber
const parImpar = sum % 2 == 0 ? 'par' : 'impar';

alert('Soma é igual a: ' + sum + '.')
alert('Subtração é igual a: ' + sub + '.')
alert('Divisão é igual a: ' + div.toFixed(2).replace('.',',') +'.')
alert('Multiplicação é igual a : ' + multi + '.')
alert('O resto da divisão é igual a: ' + restDiv + '.')

if(firstNumber == secondNumber) {
    alert('Os números inseridos são iguais.')
} else {
    alert('Os números inseridos são diferentes.')
}

alert('A soma dos dois números é ' + parImpar + '.')