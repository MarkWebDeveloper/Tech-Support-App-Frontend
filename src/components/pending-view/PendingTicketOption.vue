<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore';

const ticketsStore = useTicketsStore()

const props = defineProps({
  ticket: {
    type: Object,
    required: true},
  index: {
    type: Number,
    required: true}
})

function assignTicket () {
  Object.assign(ticketsStore.selectedTicket, props.ticket)
}
</script>

<template>
   <option :value="ticket" @click="assignTicket()">{{ ticketsStore.convertTimestamp(props.ticket.created_date) }} #{{ ticket.id }} {{ ticket.problem_type }} {{ ticket.description.substr(0, 20) }}...</option>
</template>

<style scoped lang="scss">
#id {
  margin-right: 15px;
}

#description {
  font-family: 'VT323', monospace;
}
</style>