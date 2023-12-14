//Calcule a soma dos números de um array
function somarArray(ar) {
    let soma = 0;
    for (let i = 0; i < ar.length; i++) {
        soma += ar[i];
    }
    return soma;
}
var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
soma = somarArray(ar);
console.log(soma);
