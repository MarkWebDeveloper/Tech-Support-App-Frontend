<script setup lang="ts">
import TicketsMiddleSection from '@/components/tickets-view/TicketsMiddleSection.vue';
import TicketsMobileTopSection from '@/components/tickets-view/TicketsMobileTopSection.vue';
import UserRepository from '@/repositories/userRepository';
import UserService from '@/services/userService';
import { useHeaderStore } from '@/stores/headerStore';
import { useUsersStore } from '@/stores/usersStore';
import { onBeforeMount } from 'vue';

const userStore = useUsersStore()
const headerStore = useHeaderStore()

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
    const repository = new UserRepository
    const service = new UserService(repository)
    userStore.isLoaded = false
    userStore.users = await service.index()
    userStore.isLoaded = true
    userStore.usersSortedTickets = userStore.users[userStore.activeUserIndex].tickets.sort(sort_by_id())
})

function checkIfAuthenticated() {
    if (userStore.isAuthenticated) {
        if (userStore.isAuthenticated == true) {
            headerStore.showButton = true
        } else {
            headerStore.showButton = false
        }
    }
}

checkIfAuthenticated()
headerStore.checkUserType(userStore.users[userStore.activeUserIndex])
</script>

<template>
    <main>

        <TicketsMobileTopSection id="mobile-top-section" />

        <TicketsMiddleSection />

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
    justify-content: center;
}

@media only screen and (min-width: 768px) {
    #mobile-top-section {
        display: none;
    }
}
</style>
