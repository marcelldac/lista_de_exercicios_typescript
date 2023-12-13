//Imprima todas as tabuadas do número 1 ao 10.

function imprimirTabuada(n: number): void {
  for (let i: number = 1; i <= 10; i++) {
    let linha: string = n + " * " + i + " = " + n * i;
    console.log(linha);
  }
}

for (let i: number = 1; i <= 10; i++) {
  imprimirTabuada(i);
  console.log("");
}
