/*
Retornar a maior string de um array
*/
function biggerString(arr) {
    let bigger = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > bigger.length) {
            bigger = arr[i];
        }
    }
    return bigger;
}
const stringArray = ["Marcell", "Rodolpho", "João", "Gabriel"];
const result = biggerString(stringArray);
console.log(result);
