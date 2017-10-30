import { SomeClass } from './someClass'

class Index {
    constructor() {
        this.someClass = new SomeClass()
    }

    init() {
        this.someClass.doSomething()
    }

}

var index = new Index()
index.init()