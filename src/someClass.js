export class SomeClass {
    
    // Constructor method
    constructor() {
        this.aNumber = new Number(7)
        this.aString = new String('This is a string')
        this.aBoolean = new Boolean(true)
        this.anArray = new Array('This', 'is', 'an', 'Array')
        this.anObject = new Object({
            key: 'value',
            otherKey: 'otherValue',
            number: 7
        })
    }

    //Getter of aNumber
    get someGetter() {
        return `${this.aNumber}, ${this.aString}, ${this.aBoolean}, ${this.anObject.key}`
    }

    //Setter of aNumber
    set someSetter(value) {
        this.aNumber = value
    }

    //Some method
    doSomething() {
        console.log(this.someGetter)
        console.log('Im doing something... :)')
        console.log(`My object: ${JSON.stringify(this)}`)
    }

}