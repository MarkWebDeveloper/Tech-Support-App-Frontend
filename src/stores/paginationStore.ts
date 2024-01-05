import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUsersStore } from './usersStore'

export const usePaginationStore = defineStore('pagination', () => {
  const usersStore = useUsersStore()

  let ticketsCount = ref<number>(usersStore.usersSortedTickets.length)
  let pagesCount = ref<number>(Math.round(ticketsCount.value / 2))
  let pageNumber = ref<number>(1)
  let minCount = ref<number>(0)
  let maxCount = ref<number>(2)

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
    if (usersStore.usersSortedTickets.length % 2 == 0) {
      maxCount.value = usersStore.usersSortedTickets.length
      minCount.value = maxCount.value - 2
      pageNumber.value = pagesCount.value
    } else if (usersStore.usersSortedTickets.length % 2 != 0) {
      maxCount.value = usersStore.usersSortedTickets.length
      minCount.value = maxCount.value - 1
      pageNumber.value = pagesCount.value
    }
  }

  function adaptPagesToDelete() {
    if (usersStore.usersSortedTickets.length % 2 == 0 || usersStore.usersSortedTickets.length == 1) {
      maxCount.value -= 1
    } else if (usersStore.usersSortedTickets.length % 2 != 0 || usersStore.usersSortedTickets.length != 1) {
      minCount.value -= 2
      maxCount.value -= 1
      pageNumber.value = pagesCount.value
    }
  }

  return { ticketsCount, pagesCount, pageNumber, paginatedTickets, minCount, maxCount, GoToFirstPage, GoToLastPage, GoToNextPage, GoToPrevPage, adaptPagesToDelete }
})
