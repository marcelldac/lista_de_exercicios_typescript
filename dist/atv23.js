/*
Criar uma função para inverter um array
*/
function reverseArray(arr) {
    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    return arr2;
}
const ordered_array = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArray(ordered_array));
