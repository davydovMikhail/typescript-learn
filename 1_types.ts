const isFetch: boolean = true
const isLoading: boolean = true

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TS'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // дженерик тип

const words: string[] = ['Hello', 'world']

// тип данных Tuple - массив котррый состоит из разных типов данных 
const contact: [string, number] = ['misha', 8999]
// const contact: [number, string] = ['misha', 8999] так не канает

// Any - тип благодаря которому можно совершать переприсваивания на другие типы

let variable: any = 42

variable = 'new string'
variable = []

//типы в функциях 
function sayMyName(name: string) : void { // void говорит о том что функция ничего не возвращает
    console.log(name)
}

sayMyName('Давыдов')  

// never - тип, который нужно указывать если функция возвращает ошибку и не заканчивает свое выполнение, либо когда она постонно что либо делает
function throwError(message: string): never {
    throw new Error(message)
}

// function infinite(): never { // функция никлгда не завершит свое выолнение поэтому never
    // while (true) {
    //не запускать, иниче все зависнит 
    // }
// }

// Type -- можно создавать собственные типы

type Login = string

const login: Login = 'admin'

type ID = string | number // -- ситуация когда значение может иметь два типа
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true -- это работать не будет

type SomeType = string | null | undefined

