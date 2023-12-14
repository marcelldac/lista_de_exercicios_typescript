/* 
Criar uma função para inverter um array
*/

function reverseArray(arr: number[]): number[] {
  let arr2: number[] = [];
  for (let i: number = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  return arr2;
}

const ordered_array: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArray(ordered_array));
