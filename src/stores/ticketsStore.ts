import { ref, reactive} from 'vue'
import { defineStore } from 'pinia'
import TicketRepository from '@/repositories/ticketRepository'
import TicketService from '@/services/ticketService'
export const useTicketsStore = defineStore('tickets', () => {

  const repository = new TicketRepository
  const service = new TicketService(repository)

  let tickets: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }[] = reactive([]); 
  let isLoaded = ref(false)
  const problem_types: String[] = reactive(["Problem with Skynet", "Problem with T-800", "Problem with T-1000", "Problem with T-X", "Problem with T-1", "Problem with T-600", "Other"])

  async function setTickets(this: any) {
    this.tickets = await service.index()
    isLoaded.value = true
  }

  async function deleteTicket(this: any, id: number) {
    this.tickets = await service.delete(id)
  }

  return { tickets, isLoaded, setTickets, deleteTicket, problem_types }
})