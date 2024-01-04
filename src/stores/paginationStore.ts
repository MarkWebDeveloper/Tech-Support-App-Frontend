import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUsersStore } from './usersStore'

export const usePaginationStore = defineStore('pagination', () => {
  const usersStore = useUsersStore()

  let ticketsCount = ref<number>()
  let pagesCount = ref<number>()
  let pageNumber = ref<number>(1)
  let minCount = ref<number>(0)
  let maxCount = ref<number>(2)
  let isBeginning = ref<boolean>(true)
  let isEnd = ref<boolean>(false)

  let paginatedTickets = computed(() => usersStore.usersSortedTickets.slice(minCount.value, maxCount.value))

  function nextPage() {
    if (usersStore.usersSortedTickets.length >= maxCount.value + 2) {
      minCount.value += 2
      maxCount.value += 2
      pageNumber.value += 1
      console.log(minCount.value, maxCount.value)
    }
  }

  function prevPage() {
    if (minCount.value - 2 >= 0) {
      minCount.value -= 2
      maxCount.value -= 2
      pageNumber.value -= 1
      console.log(minCount.value, maxCount.value)
    }
  }

  return { ticketsCount, pagesCount, pageNumber, paginatedTickets, minCount, maxCount, isBeginning, isEnd, nextPage, prevPage }
})
