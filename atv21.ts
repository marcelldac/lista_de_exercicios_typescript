/* 
Implemente um bubble sort
*/

function bubbleSort(arr: number[]): number[] {
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // Se o elemento atual for maior que o próximo, troca os elementos de posição
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const orderedArray: number[] = bubbleSort([5, 3, 1, 4, 6]);
console.log(orderedArray);
