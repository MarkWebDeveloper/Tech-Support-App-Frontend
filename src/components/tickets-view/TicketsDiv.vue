<script setup lang="ts">
import { usePaginationStore } from '@/stores/paginationStore';
import Ticket from './Ticket.vue';
import { useUsersStore } from '@/stores/usersStore';
const userStore = useUsersStore()
const pageStore = usePaginationStore()

</script>

<template>
    <div id="tickets-div">
        <Ticket v-for="(ticket, index) in pageStore.paginatedTickets" v-if="userStore.isLoaded" :ticket="ticket" :index="index"/>
    </div>
</template>

<style scoped lang="scss">
#tickets-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 90vw;
    background-color: $base-grey;
    overflow-y: auto;
}

@media only screen and (min-width: 768px) {
    #tickets-div {
        width: 60vw;
        margin-bottom: 0%;
    }
}
</style>