//Crie uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos.

function retornarPositivos(ar: number[]): number[] {
  var ar2: number[] = [];
  for (var i = 0; i < ar.length; i++) {
    var el: number = ar[i];
    if (el >= 0) {
      ar2.push(el);
    }
  }
  return ar2;
}

var ar: number[] = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2: number[] = retornarPositivos(ar);
