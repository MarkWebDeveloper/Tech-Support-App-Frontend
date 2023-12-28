import { ref, reactive} from 'vue'
import { defineStore } from 'pinia'
import TicketRepository from '@/repositories/ticketRepository'
import TicketService from '@/services/ticketService'
export const useTicketsStore = defineStore('tickets', () => {

  const repository = new TicketRepository
  const service = new TicketService(repository)

  let tickets: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }[] = reactive([]); 
  let isLoaded = ref(false)

  async function setTickets(this: any) {
    this.tickets = await service.index()
    isLoaded.value = true
  }

  return { tickets, isLoaded, setTickets }
})