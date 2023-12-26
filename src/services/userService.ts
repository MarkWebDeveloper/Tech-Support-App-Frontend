import User from "@/models/user";
import UsersRepository from "@/repositories/userRepository";

export default class UsersService {

    repository = new UsersRepository
    users: { id: number; name: string; username: string; password: string; type: boolean; }[] = []; 

    constructor(repository: any) {
        this.repository = repository
    }

    async index() {
        const users = await this.repository.getAll()
        
        users.forEach((user: { id: number; name: string; username: string; password: string; type: boolean; }) => {
            const userToAdd = new User(user.id, user.name, user.username, user.password, user.type)
            this.users.push(userToAdd)
        });

        return this.users
    }

}