/* 
Retornar a maior string de um array
*/

function biggerString(arr: string[]): string {
  let bigger: string = "";
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].length > bigger.length) {
      bigger = arr[i];
    }
  }
  return bigger;
}

const stringArray: string[] = ["Marcell", "Rodolpho", "João", "Gabriel"];
const result: string = biggerString(stringArray);
console.log(result);
