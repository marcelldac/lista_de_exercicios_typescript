//Calcule a média de todos os números de um array

function mediaArray(ar: number[]): number {
  let soma: number = 0;
  for (var i: number = 0; i < ar.length; i++) {
    soma += ar[i];
  }
  return soma / ar.length;
}

var ar: number[] = [1, 3, 9, 15, 90];
var media: number = mediaArray(ar);
console.log("mediaArray: ", media);
