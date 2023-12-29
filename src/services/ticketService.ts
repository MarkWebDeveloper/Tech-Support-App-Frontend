import Ticket from "@/models/ticket";
import TicketRepository from "@/repositories/ticketRepository";

export default class TicketService {

    repository = new TicketRepository
    tickets: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }[] = []; 

    constructor(repository: any) {
        this.repository = repository
    }

    async index() {
        const tickets = await this.repository.getAll()
        
        tickets.forEach((ticket: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }) => {
            const ticketToAdd = new Ticket(ticket.id, ticket.created_date, ticket.modified_date, ticket.problem_type, ticket.description, ticket.status)
            this.tickets.push(ticketToAdd)
        });

        return this.tickets
    }

    async delete(id: number) {
        const tickets = await this.repository.getAll()
        await this.repository.deleteById(id)
        
        tickets.splice(id, 1)
        return this.tickets
    }

}