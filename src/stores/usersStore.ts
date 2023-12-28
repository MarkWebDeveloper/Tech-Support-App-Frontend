import { ref, reactive} from 'vue'
import { defineStore } from 'pinia'
import UserRepository from '@/repositories/userRepository'
import UserService from '@/services/userService'

export const useUsersStore = defineStore('users', () => {

  const repository = new UserRepository
  const service = new UserService(repository)

  let users: { id: number; name: string; username: string; password: string; type: boolean; }[] = reactive([]); 
  let isLoaded = ref(false)
  const isAuthenticated = ref(false)
  let activeUserIndex = ref();

  async function setUsers(this: any) {
    this.users = await service.index()
    isLoaded.value = true
  }

  return { users, isLoaded, setUsers, isAuthenticated, activeUserIndex }
})