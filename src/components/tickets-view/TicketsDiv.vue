<script setup lang="ts">
import { onBeforeMount } from 'vue';
import Ticket from './Ticket.vue';
import { useUsersStore } from '@/stores/usersStore';
import UserRepository from '@/repositories/userRepository';
import UserService from '@/services/userService';
const userStore = useUsersStore()

onBeforeMount(async () => {
    const repository = new UserRepository
    const service = new UserService(repository)
    userStore.isLoaded = false
    userStore.users = await service.index()
    userStore.isLoaded = true
    userStore.usersSortedTickets = userStore.users[userStore.activeUserIndex].tickets.sort(sort_by_id())
})

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

</script>

<template>
    <div id="tickets-div">
        <Ticket v-for="(ticket, index) in userStore.usersSortedTickets" v-if="userStore.isLoaded" :ticket="ticket" :index="index"/>
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