// Primeira atividade
function oMaiorNumero (num1,num2){
    return num1 > num2 ? num1 : num2
}
console.log(oMaiorNumero(2,5))

const maiorNumerov2 = (x,y) => x>y ? x : y;
console.log(maiorNumerov2(100,5))



// Segunda atividade
function ePaisagem(largura,altura){
    return largura>altura
}
console.log(ePaisagem(100,60))
const ePaisagem2 = (a,l) => a > l
console.log(ePaisagem2(100,60))

// Terceira atividade - FizzBuzz
function FizzBuzz(n) {
    if (typeof n === "number" && n >= 0 && n <= 100) {
        if (n % 3 == 0 && n % 5 == 0) {
            n = "FizzBuzz"
        }
        else if (n % 3 == 0) {
            n = "Fizz"
        }
        else if (n % 5 == 0) {
            n = "Buzz"
        }
    }
    return n
}
console.log(FizzBuzz(5))
console.log(FizzBuzz(15))
console.log(FizzBuzz(-8))
console.log(FizzBuzz(105))