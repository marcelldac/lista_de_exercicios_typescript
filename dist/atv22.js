/*
Contar a quantidade de palavras em um texto
*/
function countWords(text) {
    let doesSeparatorExists = true;
    let words = 0;
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
function separator(separator) {
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(separator);
}
console.log(countWords("Typescript é melhor que javascript"));
console.log(countWords("Estrutura de dados é o caminho das águas"));
