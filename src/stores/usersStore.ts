import { ref, reactive} from 'vue'
import { defineStore } from 'pinia'
import UsersRepository from '@/repositories/userRepository'
import UsersService from '@/services/userService'

export const useUsersStore = defineStore('users', () => {

  const repository = new UsersRepository
  const service = new UsersService(repository)

  let users: { id: number; name: string; username: string; password: string; type: boolean; }[] = reactive([]); 
  let isLoaded = ref(false)
  let activeUserIndex = ref();

  async function setUsers(this: any) {
    this.users = await service.index()
    isLoaded.value = true
  }

  return { users, isLoaded, setUsers, activeUserIndex }
})