import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUsersStore } from './usersStore'

export const usePaginationStore = defineStore('pagination', () => {
  const usersStore = useUsersStore()

  let ticketsCount = ref<number>(usersStore.usersSortedTickets.length)
  let pagesCount = ref<number>(ticketsCount.value / 2)
  let pageNumber = ref<number>(1)
  let minCount = ref<number>(0)
  let maxCount = ref<number>(2)
  let isBeginning = ref<boolean>(true)
  let isEnd = ref<boolean>(false)

  let paginatedTickets = computed(() => usersStore.usersSortedTickets.slice(minCount.value, maxCount.value))

  function GoToNextPage() {
    if (usersStore.usersSortedTickets.length >= maxCount.value + 2) {
      minCount.value += 2
      maxCount.value += 2
      pageNumber.value += 1
    } else if (usersStore.usersSortedTickets.length == maxCount.value + 1) {
      minCount.value += 2
      maxCount.value += 1
      pageNumber.value += 1
    }
  }

  function GoToPrevPage() {
    if (minCount.value - 2 >= 0 && maxCount.value % 2 == 0) {
      minCount.value -= 2
      maxCount.value -= 2
      pageNumber.value -= 1
    } else if (minCount.value - 2 >= 0 && maxCount.value % 2 != 0) {
      minCount.value -= 2
      maxCount.value -= 1
      pageNumber.value -= 1
    }
  }

  function GoToFirstPage() {
    minCount.value = 0
    maxCount.value = 2
    pageNumber.value = 1
  }

  function GoToLastPage() {
    maxCount.value = usersStore.usersSortedTickets.length
    minCount.value = maxCount.value - 2
    pageNumber.value = pagesCount.value
  }

  return { ticketsCount, pagesCount, pageNumber, paginatedTickets, minCount, maxCount, isBeginning, isEnd, GoToFirstPage, GoToLastPage, GoToNextPage, GoToPrevPage }
})
