<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore';

const ticketsStore = useTicketsStore()

const props = defineProps({
  problem: {
    required: true},
  index: {
    type: Number,
    required: true}
})
</script>

<template>
   <option :value="problem">{{ problem }}</option>
</template>

<style scoped lang="scss">

</style>