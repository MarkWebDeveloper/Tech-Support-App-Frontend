import { ref, reactive} from 'vue'
import { defineStore } from 'pinia'
import TicketRepository from '@/repositories/ticketRepository'
import TicketService from '@/services/ticketService'
export const useTicketsStore = defineStore('tickets', () => {

  const repository = new TicketRepository
  const service = new TicketService(repository)

  let tickets: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }[] = reactive([]); 
  let pendingTickets: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }[] = reactive([]); 
  let resolvedTickets: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }[] = reactive([]); 
  let isLoaded = ref(false)
  const problem_types: String[] = reactive(["Problem with Skynet", "Problem with T-800", "Problem with T-1000", "Problem with T-X", "Problem with T-1", "Problem with T-600", "Other"])
  let selectedProblem = ref<string>("")
  let newTicketDescription = ref<string>("")
  let selectedTicket = reactive<any>({})
  let selectedPendingTicket = reactive<any>({})
  let ticketToPost = reactive({
    problem_type: ref(""),
    description: ref(""),
    status: ref("pending"),
    userId: ref()
  })

  async function setTickets(this: any) {
    this.tickets = await service.index()
    isLoaded.value = true
  }

  async function deleteTicket(this: any, id: number) {
    this.tickets = await service.delete(id)
  }

  async function createTicket(this: any, data: Object) {
    this.tickets = await service.create(data)
    resetTicket()
    alert ("Ticket is created succesfully")
  }

  async function updateTicket(this: any, id: number, data: Object) {
    this.tickets = await service.update(id, data)
    resetTicket()
    alert ("Ticket is updated succesfully")
  }

  function resetTicket() {
    ticketToPost.problem_type = ''
    ticketToPost.description = ''
}

function convertTimestamp(timestamp: any) {
  let d = new Date(timestamp),
      yyyy = d.getFullYear(),
      mm = ('0' + (d.getMonth() + 1)).slice(-2),
      dd = ('0' + d.getDate()).slice(-2),  
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),
      ampm = 'AM',
      time;

  if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
  } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
  } else if (hh == 0) {
      h = 12;
  }

  time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
  return time;
}

  return { tickets, isLoaded, setTickets, deleteTicket, problem_types, selectedProblem, newTicketDescription, ticketToPost, createTicket, updateTicket, resetTicket, selectedTicket, pendingTickets, resolvedTickets, convertTimestamp, selectedPendingTicket }
})