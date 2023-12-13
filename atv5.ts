// Imprima o fatorial de algum número.

function factorial(num: number): string | number {
  if (num === 0 || num === 1) {
    return "O fatorial de 0 ou 1 é sempre 1";
  }

  for (let i: number = 1; i <= 10; i++) {
    var result = (num *= i);
  }
  return result;
}

console.log(factorial(1));
