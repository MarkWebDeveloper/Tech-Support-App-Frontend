<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore';
import ResolvedTicket from './ResolvedTicket.vue';
import { useResolvedPaginationStore } from '@/stores/resolvedPaginationStore';

const ticketsStore = useTicketsStore()
const pageStore = useResolvedPaginationStore()

</script>

<template>
    <div id="tickets-div">
        <ResolvedTicket v-for="(ticket, index) in pageStore.paginatedTickets" :ticket="ticket" :index="index"/>
    </div>
</template>

<style scoped lang="scss">
#tickets-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    width: 90vw;
    background-color: $base-grey;
}

@media only screen and (min-width: 768px) {
    #tickets-div {
        height: 100%;
        width: 60vw;
        margin-bottom: 0%;
    }
}
</style>