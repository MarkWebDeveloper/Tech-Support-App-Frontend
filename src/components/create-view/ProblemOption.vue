<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore';

const ticketsStore = useTicketsStore()

const props = defineProps({
  problem: {
    type: String,
    required: true},
  index: {
    type: Number,
    required: true}
})
</script>

<template>
   <option value="0">{{ problem }}</option>
</template>

<style scoped lang="scss">

</style>