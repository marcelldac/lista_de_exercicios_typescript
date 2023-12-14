/* Localizar o maior valor dentro de um array de números */
function findBiggest(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const list = [1, 2, 3, 4, -5];
let biggestNumber = findBiggest(list);
console.log(biggestNumber);
