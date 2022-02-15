var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black';
// rect2.id = '3232' -- ошибка, т. к. это readonly, то есть id уже присвоен и не может меняться
var rect3 = {}; // в последствии этот объект будет считаться этим типом
var rect4 = {}; // -- старая запись
// наследование интерфейсов
