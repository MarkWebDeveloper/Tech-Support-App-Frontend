import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useTicketsStore } from './ticketsStore'

export const useResolvedPaginationStore = defineStore('resolvedPagination', () => {
  const ticketsStore = useTicketsStore()

  let ticketsCount = ref<number>(ticketsStore.resolvedTickets.length)
  let pagesCount = ref<number>(Math.round(ticketsCount.value / 2))
  let pageNumber = ref<number>(1)
  let minCount = ref<number>(0)
  let maxCount = ref<number>(2)

  let paginatedTickets = computed(() => ticketsStore.resolvedTickets.slice(minCount.value, maxCount.value))

  function GoToNextPage() {
    if (ticketsStore.resolvedTickets.length >= maxCount.value + 2) {
      minCount.value += 2
      maxCount.value += 2
      pageNumber.value += 1
    } else if (ticketsStore.resolvedTickets.length == maxCount.value + 1) {
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
    if (ticketsStore.resolvedTickets.length % 2 == 0) {
      maxCount.value = ticketsStore.resolvedTickets.length
      minCount.value = maxCount.value - 2
      pageNumber.value = pagesCount.value
    } else if (ticketsStore.resolvedTickets.length % 2 != 0) {
      maxCount.value = ticketsStore.resolvedTickets.length
      minCount.value = maxCount.value - 1
      pageNumber.value = pagesCount.value
    }
  }

  function adaptPagesToDelete() {
    if (ticketsStore.resolvedTickets.length % 2 == 0 || ticketsStore.resolvedTickets.length == 1) {
      maxCount.value -= 1
    } else if (ticketsStore.resolvedTickets.length % 2 != 0 || ticketsStore.resolvedTickets.length != 1) {
      minCount.value -= 2
      maxCount.value -= 1
      pageNumber.value = pagesCount.value
    }
  }

  return { ticketsCount, pagesCount, pageNumber, paginatedTickets, minCount, maxCount, GoToFirstPage, GoToLastPage, GoToNextPage, GoToPrevPage, adaptPagesToDelete }
})
