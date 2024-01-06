<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore';
import { useUsersStore } from '@/stores/usersStore';

const userStore = useUsersStore()
const ticketStore = useTicketsStore()

const props = defineProps({
  ticket: {
    type: Object,
    required: true},
  index: {
    type: Number,
    required: true}
})
</script>

<template>
    <div id="ticket-container">
        <div id="date-id-container">
            <p id="ticket-date">{{ ticketStore.convertTimestamp(ticket.created_date) }}</p>
            <p id="ticket-number">#{{ ticket.id }}</p>
            <h3 id="problem-type-desktop">{{ ticket.problem_type }}</h3>
        </div>
        <h3 id="problem-type-mobile">{{ ticket.problem_type }}</h3>
        <p id="problem-description">{{ ticket.description }}</p>
        <div id="status-fin-date-container">
            <p id="finalized-date">FINALIZED: {{ ticketStore.convertTimestamp(ticket.modified_date) }}</p>
            <div id="status-container">
                <h4 id="status">STATUS:</h4>
                <h4 id="current-status" class="current-status" :class="{ resolved: props.ticket.status == 'resolved', not_resolved: props.ticket.status == 'not resolved' }">{{ ticket.status }}</h4>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#ticket-container {
    width: 90%;
    min-height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
}

#date-id-container {
    width: 100%;
    display: flex;
    align-items: center;
}

#ticket-number, #ticket-date {
    color: white;
    font-family: "Cyberdyne";
    font-size: 2vmax;
    font-style: italic;
}

#ticket-date {
    margin-right: 10px;
}

#problem-type-mobile {
    color: white;
    font-family: "Cyberdyne Expanded";
    font-size: 1.7vmax;
    margin-right: auto;
}

#problem-type-desktop {
    display: none;
}

#problem-description {
    width: 100%;
    height: 30%;
    padding: 0.5vmax;
    background-color: black;
    color: $text-green;
    text-wrap: wrap;
    font-family: 'VT323', monospace;
    overflow-y: auto;
    line-height: 1.3rem;
}

#status-fin-date-container {
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

#finalized-date {
    font-family: "Cyberdyne Halftone";
    font-style: italic;
    font-size: 1.2vmax;
    color: white;
}

#status-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-family: "Cyberdyne Halftone";
    font-style: italic;
    font-size: 1.2vmax;
}

#status {
    color: white;
    margin-right: 1vmax;
}

.current-status {
    color: white;
}

.resolved {
    color: $text-green;
}

.not_resolved {
    color: $base-red;
}

@media only screen and (min-width: 768px) {

#ticket-number, #ticket-date {
    font-size: 1.2vmax;
}

#problem-type-mobile {
    display: none;
}

#problem-type-desktop {
    display: block;
    color: white;
    font-family: "Cyberdyne Expanded";
    font-size: 1.2vmax;
    margin-left: auto;
}

#problem-description {
    width: 100%;
    height: 30%;
    padding: 0.5vmax;
    overflow-y: auto;
    line-height: 1.5vmax;
    font-size: 1.2vmax;
}

#status-fin-date-container {
    width: 100%;
    height: 5%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

#finalized-date {
    font-family: "Cyberdyne Halftone";
    font-style: italic;
    font-size: 1vmax;
    color: white;
}

#status-container {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    font-size: 1vmax;
}

.current-status {
    color: white;
}

.resolved {
    color: $text-green;
}

.not_resolved {
    color: $base-red;
}
    
}
</style>

