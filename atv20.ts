/* 
Criar uma função que junte dois arrays e retorno o resultado como um novo array
*/

//Forma 1

/* function mixArrays(arr1: number[], arr2: number[]): number[] {
  let arr: number[] = [];
  for (let element of arr1) {
    arr.push(element);
  }
  for (let element of arr2) {
    arr.push(element);
  }
  return arr;
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const mix: number[] = mixArrays(arr1, arr2);
console.log(mix); */

//Forma 2: Utilizando Rest operator

const mixArrays = (arr1: number[], arr2: number[]): number[] => {
  return [...arr1, ...arr2];
};

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const mix: number[] = mixArrays(arr1, arr2);
console.log(mix);

//Forma 3: Juntando arrays mudando sua dimensão

/* const arr3: number[] = [1, 2, 3];
const arr4: number[] = [4, 5, 6];
const arr3and4: number[][] = [arr3, arr4];
console.log(arr3and4); */
