<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore';

const ticketsStore = useTicketsStore()

const props = defineProps({
  ticket: {
    required: true},
  index: {
    type: Number,
    required: true}
})
</script>

<template>
   <option :value="ticket">{{ ticket }}</option>
</template>

<style scoped lang="scss">

</style>