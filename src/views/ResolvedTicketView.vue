<script setup lang="ts">
import ResolvedMobileTopSection from '@/components/resolved-view/ResolvedMobileTopSection.vue';
import ResolvedPagination from '@/components/resolved-view/ResolvedPagination.vue';
import ResolvedTicketsMiddleSection from '@/components/resolved-view/ResolvedTicketsMiddleSection.vue';
import TicketRepository from '@/repositories/ticketRepository';
import UserRepository from '@/repositories/userRepository';
import TicketService from '@/services/ticketService';
import UserService from '@/services/userService';
import { useResolvedPaginationStore } from '@/stores/resolvedPaginationStore';
import { useTicketsStore } from '@/stores/ticketsStore';
import { useUsersStore } from '@/stores/usersStore';
import { onBeforeMount } from 'vue';

const userStore = useUsersStore()
const ticketsStore = useTicketsStore()
const pageStore = useResolvedPaginationStore()

function sort_by_id() {
    return function (elem1: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }, elem2: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }) {
        if (elem1.id < elem2.id) {
            return -1;
        } else if (elem1.id > elem2.id) {
            return 1;
        } else {
            return 0;
        }
    };
}

onBeforeMount(async () => {
    const repository = new TicketRepository
    const service = new TicketService(repository)
    ticketsStore.tickets = await service.index()
    
    let filteredTickets = ticketsStore.tickets.filter(element => element.status == "resolved" || element.status == "not resolved")

    ticketsStore.resolvedTickets = filteredTickets.sort(sort_by_id())
    pageStore.ticketsCount = ticketsStore.resolvedTickets.length
    pageStore.pagesCount = Math.round(pageStore.ticketsCount / 2);
})

</script>

<template>
  <main>
    <ResolvedMobileTopSection id="mobile-top-section"/>

    <ResolvedTicketsMiddleSection />

    <ResolvedPagination />
  </main>
</template>
  
<style lang="scss" scoped>
main {
  width: 100vw;
  height: 90vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

@media only screen and (min-width: 768px) {
    main {
      justify-content: center;
    }

    #mobile-top-section {
        display: none;
    }
}
</style>
  