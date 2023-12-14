//Calcule a média de todos os números de um array
function mediaArray(ar) {
    let soma = 0;
    for (var i = 0; i < ar.length; i++) {
        soma += ar[i];
    }
    return soma / ar.length;
}
var ar = [1, 3, 9, 15, 90];
var media = mediaArray(ar);
console.log("mediaArray: ", media);
