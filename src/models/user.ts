import type Ticket from "./ticket"

export default class User {

    id: number = 0
    name: string
    username: string
    password: string
    type: boolean
    tickets: Array<Ticket>

    constructor(id: number, name: string, username: string, password: string, type: boolean, tickets: Array<Ticket>) {
        this.id = id
        this.name = name
        this.username = username
        this.password = password
        this.type = type
        this.tickets = tickets
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

    getTickets() {
        return this.tickets
    }

}