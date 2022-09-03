export default class Customer {
    #id: string
    #name: string
    #age: number

    constructor(name: string, age: number, id: string = null) {
        this.#name = name
        this.#age = age
        this.#id = id
    }

    static empty() {
        return new Customer('', 0)
    }

    get id(): string {
        return this.#id
    }

    get name(): string {
        return this.#name
    }

    get age(): number {
        return this.#age
    }
}