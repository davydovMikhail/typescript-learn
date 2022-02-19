// интерфейс -- по сути то же что и тип, ноимеющий более сложную структуру, используется для объектов и классов, причем указанные поля и функции могут быть обязательными а могут и не быть
interface Rect {
    readonly id: string // -- благодаря модификатору readonly значение можно присвоить только один раз при инициализации и больше никак не поменять
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = 'black'
// rect2.id = '3232' -- ошибка, т. к. это readonly, то есть id уже присвоен и не может меняться


const rect3 = {} as Rect // в последствии этот объект будет считаться этим типом
const rect4 = <Rect>{} // -- старая запись

// наследование интерфейсов
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height:20
    },
    getArea(): number {
        return this.size.width * this.size.height 
    }
}

interface IClock { // интерфейсы принято называть через большую I, это сразу говорить о том что это интерфейс
    time: Date
}