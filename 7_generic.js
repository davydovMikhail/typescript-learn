var arrayOfNumbers = [1, 1, 2, 3, 5];
var arrayOfStrings = ['d', 'a', 'v', 'y', 'd', 'o', 'v'];
// const arrayOfNumbers: Array<то из чего состоит массив>
// function reverse(array) {
//     return array.reverse()
// }
//как сделать так чтобы одна функция работала работала с разными типами данных которые есть в массиве
function reverse(array) {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);
// теперь функция реверс работает корректно для разных типов данных
