//Crie uma função que retorne um valor booleano informando se o número enviado como parâmetro é um número primo.

/* function numeroPrimo(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  //Math.sqrt() retorna a raiz quadrada de um número
  var maxDiv = Math.sqrt(n);
  for (let i = 2; i <= maxDiv; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(2, " é um número primo? ", numeroPrimo(2));
console.log(3, " é um número primo? ", numeroPrimo(3));
console.log(4, " é um número primo? ", numeroPrimo(4));
console.log(5, " é um número primo? ", numeroPrimo(5));
console.log(9, " é um número primo? ", numeroPrimo(9)); */

function primeNumbers(num: number) {
  let numbers: number[] = new Array();
  for (let i: number = 0; i <= num; i++) {
    if (isPrime(i)) numbers.push(i);
  }
  return numbers;
}
function isPrime(num: number) {
  for (let i: number = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}
console.log(primeNumbers(13));
