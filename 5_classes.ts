class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly modelOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel 
//     }
// }
// запись ниже полностью идентична тому, что есть выше
class Car {
    readonly modelOfWheels: number = 4
    constructor(readonly model: string) {}
}

// поговорим о модификаторах 
// если мы не ишем никакого модификатора то по умолчанию будет public

class Animal {
    protected voice: string = '' // это поде доступно для Animal и для всех классов, которые наследуются от animal
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() { // методы или переменные с этим модификатором дотупны только в том классе в котором были определены
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice // здесь мы имеем доступ к voice, потому что это protected
        // this.go() -- будет ошибка так как это приватное свойство
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color) 
// cat.voice - это работать не будет, но можно работать через функцию setVoice
//абстрактные классы - классы которые не во что не компилируются, но они нужны на этапе разработки, чтобы от них наледоваться
// аналогия: abstract для классов как type для обычных переменных
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info'
    }
}