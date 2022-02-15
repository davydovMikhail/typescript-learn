var isFetch = true;
var isLoading = true;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TS';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13]; // дженерик тип
var words = ['Hello', 'world'];
// тип данных Tuple - массив котррый состоит из разных типов данных 
var contact = ['misha', 8999];
// const contact: [number, string] = ['misha', 8999] так не канает
// Any - тип благодаря которому можно совершать переприсваивания на другие типы
var variable = 42;
variable = 'new string';
variable = [];
//типы в функциях 
function sayMyName(name) {
    console.log(name);
}
sayMyName('Давыдов');
// never - тип, который нужно указывать если функция возвращает ошибку и не заканчивает свое выполнение, либо когда она постонно что либо делает
function throwError(message) {
    throw new Error(message);
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
