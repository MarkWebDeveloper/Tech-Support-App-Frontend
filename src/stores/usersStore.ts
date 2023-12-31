import { ref, reactive} from 'vue'
import { defineStore } from 'pinia'
import UserRepository from '@/repositories/userRepository'
import UserService from '@/services/userService'
import type Ticket from '@/models/ticket'

export const useUsersStore = defineStore('users', () => {

  const repository = new UserRepository
  const service = new UserService(repository)

  let users: { id: number; name: string; username: string; password: string; type: boolean, tickets: Array<Ticket> }[] = reactive([]); 
  let isLoaded = ref(false)
  const isAuthenticated = ref(false)
  let activeUserIndex = ref();
  let usersSortedTickets: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }[] = reactive([])
  let usersPendingTickets: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }[] = reactive([])

  async function setUsers(this: any) {
    this.users = await service.index()
    isLoaded.value = true
  }

  return { users, isLoaded, setUsers, isAuthenticated, activeUserIndex, usersSortedTickets, usersPendingTickets }
})