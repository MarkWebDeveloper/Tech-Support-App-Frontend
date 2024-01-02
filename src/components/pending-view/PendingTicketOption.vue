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

function convertTimestamp(timestamp: any) {
    let d = new Date(timestamp),
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),
        dd = ('0' + d.getDate()).slice(-2),  
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),
        ampm = 'AM',
        time;

    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }

    time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
    return time;
}
</script>

<template>
   <option :value="ticket" @click="assignTicket()">{{ convertTimestamp(props.ticket.created_date) }} #{{ ticket.id }} {{ ticket.problem_type }} {{ ticket.description.substr(0, 20) }}...</option>
</template>

<style scoped lang="scss">
#id {
  margin-right: 15px;
}

#description {
  font-family: 'VT323', monospace;
}
</style>