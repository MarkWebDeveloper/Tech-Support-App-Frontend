<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore';
import ResolvedTicket from './ResolvedTicket.vue';

const ticketsStore = useTicketsStore()

</script>

<template>
    <div id="tickets-div">
        <ResolvedTicket v-for="(ticket, index) in ticketsStore.resolvedTickets" :ticket="ticket" :index="index"/>
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
    overflow-y: auto;
}

@media only screen and (min-width: 768px) {
    #tickets-div {
        height: 100%;
        width: 60vw;
        margin-bottom: 0%;
    }
}
</style>