/* Localizar o maior valor dentro de um array de números */

function findBiggest(arr: number[]): number {
  let max: number = arr[0];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const list: number[] = [1, 2, 3, 4, -5];
let biggestNumber: number = findBiggest(list);
console.log(biggestNumber);
