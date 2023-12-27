<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore';
import { useUsersStore } from '@/stores/usersStore';

const userStore = useUsersStore()
const headerStore = useHeaderStore()

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
</script>

<template>
  <div class="about">
    <h1>This is a tickets page</h1>
  </div>
</template>

<style lang="scss" scoped>

h1 {
    font-family: 'Cyberdyne';
    color: $text-green;
  }
</style>
