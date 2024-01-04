<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/global/Header.vue';
import { useUsersStore } from './stores/usersStore';
import { useHeaderStore } from './stores/headerStore';
import { useTicketsStore } from './stores/ticketsStore';
import { usePaginationStore } from './stores/paginationStore';

const usersStore = useUsersStore()
const headerStore = useHeaderStore()
const ticketsStore = useTicketsStore()
const pageStore = usePaginationStore()

const settingUsers = async () => { await usersStore.setUsers() }
settingUsers()

const settingTickets = async () => { await ticketsStore.setTickets() }
settingTickets()
</script>

<template>
  <Header />

  <RouterView />
</template>

<style scoped>

</style>
