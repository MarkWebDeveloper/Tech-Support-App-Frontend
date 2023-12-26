export default class User {

    id: number = 0
    name: string
    username: string
    password: string
    type: boolean

    constructor(id: number, name: string, username: string, password: string, type: boolean) {
        this.id = id
        this.name = name
        this.username = username
        this.password = password
        this.type = type
    }

    getId() {
        return this.id
    }
    
    getName() {
        return this.name
    }

    getUsername() {
        return this.username
    }

    getpassword() {
        return this.password
    }

    getType() {
        return this.type
    }

}