/* 
Contar a quantidade de palavras em um texto
*/

function countWords(text: string): number {
  let doesSeparatorExists = true;
  let words: number = 0;
  for (let word of text) {
    if (separator(word)) {
      doesSeparatorExists = true;
      continue;
    }
    if (doesSeparatorExists) {
      words++;
      doesSeparatorExists = false;
    }
  }
  return words;
}

function separator(separator: string): boolean {
  let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(separator);
}

console.log(countWords("Typescript é melhor que javascript"));
console.log(countWords("Estrutura de dados é o caminho das águas"));
