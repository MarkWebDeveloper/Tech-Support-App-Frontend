<script setup lang="ts">
import Ticket from './Ticket.vue';
import { useUsersStore } from '@/stores/usersStore';

const userStore = useUsersStore()
</script>

<template>
    <div id="tickets-div">
        <Ticket v-for="(ticket, index) in userStore.users[userStore.activeUserIndex].tickets" v-if="userStore.isLoaded" :ticket="ticket" :index="index"/>
    </div>
</template>

<style scoped lang="scss">
#tickets-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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