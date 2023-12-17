//Crie uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos.

function retornarPositivos(arr: number[]): number[] {
  let arr2: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let element: number = arr[i];
    if (element >= 0) {
      arr2.push(element);
    }
  }
  return arr2;
  ("");
}

let arr: number[] = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let res: number[] = retornarPositivos(arr);
console.log(res);
