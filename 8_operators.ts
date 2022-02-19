interface Person {
    name: string
    age: number
}
// благодаря keyof мы создаем тип PersonKeys, который подставляет один из ключей из интерфейса Person
type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email' - исключение не нужных полей
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email' - перечисление ьех полей которые надо оставить


let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'