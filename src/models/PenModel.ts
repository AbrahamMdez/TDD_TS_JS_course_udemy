/* export class Pen {
    name: string
    message: string

    constructor() {
        this.name = 'name'
        this.message = 'Hola bro'
    }
} */

//Esta es una forma de hacer la clase de arriba con codigo muchos mas limpio
export class Pen {
    constructor(private readonly message: string) {}

    write(): string {
        return this.message
    }
}