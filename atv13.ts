//Calcule a soma de todos os dígitos de um número inteiro positivo

function sumDigits(num: number): number {
  let stringNumber: string = num.toString();
  let sum: number = 0;
  for (let character of stringNumber) {
    let digit: number = parseInt(character);
    sum += digit;
  }
  return sum;
}

let resu: number = sumDigits(120);
console.log("Soma de todos os dígitos: ", resu);
