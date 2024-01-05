<script setup lang="ts">
import { usePaginationStore } from '@/stores/paginationStore';
import { useTicketsStore } from '@/stores/ticketsStore';
import { useUsersStore } from '@/stores/usersStore';

const userStore = useUsersStore()
const ticketStore = useTicketsStore()
const pageStore = usePaginationStore()

const props = defineProps({
    ticket: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})

function sort_by_id() {
    return function (elem1: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }, elem2: { id: number, created_date: string, modified_date: string, problem_type: string, description: string, status: string }) {
        if (elem1.id < elem2.id) {
            return -1;
        } else if (elem1.id > elem2.id) {
            return 1;
        } else {
            return 0;
        }
    };
}

function deleteFromSortedTickets(index: number) {
    userStore.usersSortedTickets.splice(index, 1)
}

function adaptPagesToDelete() {
    if (userStore.usersSortedTickets.length % 2 != 0) {
        pageStore.maxCount -= 1
    } else if (userStore.usersSortedTickets.length % 2 == 0) {
        pageStore.minCount -= 2
        pageStore.maxCount -= 1
        pageStore.pageNumber -= 1
    }
    console.log(pageStore.minCount, pageStore.maxCount)
}
</script>

<template>
    <div id="ticket-container">
        <div id="number_delete_container">
            <p id="ticket-number">#{{ ticket.id }}</p>
            <h3 id="problem-type-desktop">{{ ticket.problem_type }}</h3>
            <button type="button" id="delete-button" @click.prevent="deleteFromSortedTickets(index), ticketStore.deleteTicket(ticket.id), adaptPagesToDelete()">DELETE</button>
        </div>
        <h3 id="problem-type-mobile">{{ ticket.problem_type }}</h3>
        <p id="problem-description">{{ ticket.description }}</p>
        <div id="status-container">
            <h4 id="status">STATUS:</h4>
            <h4 id="current-status" class="current-status" :class="{ resolved: props.ticket.status == 'resolved', not_resolved: props.ticket.status == 'not resolved' }">{{ ticket.status }}</h4>
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
    align-items: center;
}

#number_delete_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#ticket-number {
    color: white;
    font-family: "Cyberdyne";
    font-size: 2.2vmax;
}

button {
    background-color: white;
    font-family: 'Cyberdyne Condensed';
    font-style: italic;
    font-size: 1.5vmax;
    padding: 2px 10px 2px 10px;
    margin-left: auto;
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
    height: 50%;
    padding: 1vmax;
    background-color: black;
    color: $text-green;
    text-wrap: wrap;
    font-family: 'VT323', monospace;
    overflow-y: auto;
    line-height: 1.5rem;
}

#status-container {
    display: flex;
    font-family: "Cyberdyne Halftone";
    font-style: italic;
    font-size: 1.2vmax;
    margin-left: auto;
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

    #ticket-container {
        width: 95%;
        // min-height: 25%;
    }

    #ticket-number {
        font-size: 1.4vmax;
    }

    #problem-type-mobile {
        display: none;
    }

    #problem-type-desktop {
        display: block;
        color: white;
        font-family: "Cyberdyne Expanded";
        font-size: 1.2vmax;
        margin-left: 3vw;
    }

    button {
        padding: 2px 10px 2px 10px;
        margin-left: auto;
        font-size: 0.8vmax;
    }

    #problem-description {
        width: 100%;
        height: 50%;
        padding: 0.5vmax;
        background-color: black;
        color: $text-green;
        text-wrap: wrap;
        font-family: 'VT323', monospace;
        overflow-y: auto;
        font-size: 1.5vmax;
        line-height: 2vmax;
    }

    #status-container {
        font-size: 0.8vmax;
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

