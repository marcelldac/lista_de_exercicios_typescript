//Calcule a soma de todos os dígitos de um número inteiro positivo

function somarDigitos(n: number): number {
  var s: string = n.toString();
  var soma: number = 0;
  for (var char of s) {
    var digito: number = parseInt(char);
    soma += digito;
  }
  return soma;
}

var resultado: number = somarDigitos(1235231);
console.log("Soma de todos os dígitos: ", resultado);
