<script setup lang="ts">
import TicketsMiddleSection from '@/components/tickets-view/TicketsMiddleSection.vue';
import TicketsMobileTopSection from '@/components/tickets-view/TicketsMobileTopSection.vue';
import { useHeaderStore } from '@/stores/headerStore';
import { useTicketsStore } from '@/stores/ticketsStore';
import { useUsersStore } from '@/stores/usersStore';

const userStore = useUsersStore()
const headerStore = useHeaderStore()
const ticketsStore = useTicketsStore()

function checkIfAuthenticated() {
    if(userStore.isAuthenticated) {
        if(userStore.isAuthenticated == true) {
            headerStore.showButton = true
        } else {
            headerStore.showButton = false
        }
    }
}

checkIfAuthenticated()

console.log(userStore.users)
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
