<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/global/Header.vue';
import { useUsersStore } from './stores/usersStore';

const store = useUsersStore()

const settingUsers = async () => { await store.setUsers() }
settingUsers()
</script>

<template>
  <Header />

  <RouterView />
</template>

<style scoped>

</style>
