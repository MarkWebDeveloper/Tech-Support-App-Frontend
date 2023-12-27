<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/global/Header.vue';
import { useUsersStore } from './stores/usersStore';
import { useHeaderStore } from './stores/headerStore';

const store = useUsersStore()
const store2 = useHeaderStore()

const settingUsers = async () => { await store.setUsers() }
settingUsers()
</script>

<template>
  <Header />

  <RouterView />
</template>

<style scoped>

</style>
