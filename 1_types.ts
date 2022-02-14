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

