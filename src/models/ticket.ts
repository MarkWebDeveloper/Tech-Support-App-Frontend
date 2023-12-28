export default class Ticket {

    id: number
    created_date: string
    modified_date: string
    problem_type: string
    description: string
    status: string
    users: Object

    constructor(id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string, users: Object) {
        this.id = id
        this.created_date = created_date
        this.modified_date = modified_date
        this.problem_type = problem_type
        this.description = description
        this.status = status
        this.users = users
    }

    getId() {
        return this.id
    }
    
    getCreated_date() {
        return this.created_date
    }

    getModified_date() {
        return this.modified_date
    }
    
    getProblem_type() {
        return this.problem_type
    }

    getDescription() {
        return this.description
    }

    getStatus() {
        return this.status
    }
 
    getUser() {
        return this.users
    }

}