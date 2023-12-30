import type Ticket from "@/models/ticket";
import User from "@/models/user";
import UserRepository from "@/repositories/userRepository";

export default class UserService {

    repository = new UserRepository
    users: { id: number; name: string; username: string; password: string; type: boolean, tickets: Array<Ticket> }[] = []

    constructor(repository: any) {
        this.repository = repository
    }

    async index() {
        const users = await this.repository.getAll()
        
        users.forEach((user: { id: number; name: string; username: string; password: string; type: boolean, tickets: Array<Ticket> }) => {
            const userToAdd = new User(user.id, user.name, user.username, user.password, user.type, user.tickets)
            this.users.push(userToAdd)
        });

        return this.users
    }

}