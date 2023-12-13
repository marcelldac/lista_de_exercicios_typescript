//Calcule a soma dos números ímpares maiores que 10 e menores que 30.

const MENORES_QUE_30: number = 30;
const MAIOR_QUE_10: number = 11;
const DOIS_EM_DOIS: number = 2;

let soma: number = 0;
for (let i: number = MAIOR_QUE_10; i <= MENORES_QUE_30; i += DOIS_EM_DOIS) {
  soma += i;
}
console.log(soma);
