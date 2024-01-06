<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore'
import { useUsersStore } from '@/stores/usersStore'
import PendingTicketOption from './PendingTicketOption.vue';

const ticketsStore = useTicketsStore()
const usersStore = useUsersStore()

function setAsNotResolved() {
    if (Object.keys(ticketsStore.selectedPendingTicket).length === 0) {
        alert("Please, select a ticket")
    } else {
        ticketsStore.selectedPendingTicket.status = "not resolved"
        ticketsStore.updateTicket(ticketsStore.selectedPendingTicket.id, ticketsStore.selectedPendingTicket)
    }
}

function setAsResolved() {
    if (Object.keys(ticketsStore.selectedPendingTicket).length === 0) {
        alert("Please, select a ticket")
    } else {
        ticketsStore.selectedPendingTicket.status = "resolved"
        ticketsStore.updateTicket(ticketsStore.selectedPendingTicket.id, ticketsStore.selectedPendingTicket)
    }

}

function setUserId() {
    ticketsStore.ticketToPost.userId = usersStore.activeUserIndex + 1
}

setUserId()
</script>

<template>
    <form id="new-ticket-form">
        <h2>SELECT A TICKET</h2>

        <div id="select-ticket-div">
            <select v-model="ticketsStore.selectedPendingTicket" required>
                <option value=""></option>
                <PendingTicketOption v-for="(ticket, index) in ticketsStore.pendingTickets" :ticket="ticket"
                    :index="index" />
            </select>
        </div>

        <div id="problem-div">
            <p>{{ ticketsStore.selectedPendingTicket.problem_type }}</p>
        </div>

        <div id="description-div">
            <p>{{ ticketsStore.selectedPendingTicket.description }}</p>
        </div>

        <div id="mark-div">
            <h2 id="mark-as">MARK AS:</h2>

            <div id="buttons-div">
                <button type="button" id="set-not-resolved" class="button" @click.prevent="setAsNotResolved()">NOT
                    RESOLVED</button>

                <button type="button" id="set-resolved" class="button" @click.prevent="setAsResolved()">RESOLVED</button>
            </div>
        </div>


    </form>
</template>

<style scoped lang="scss">
#new-ticket-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 90vw;
    background-color: $base-grey;
    overflow-y: auto;
}

h2 {
    font-family: "Cyberdyne Halftone";
    font-style: italic;
    color: white;
    font-size: 2vmax;
}

#select-ticket-div {
    width: 90%;
    position: relative;
}

#problem-div {
    display: flex;
    align-items: center;
    width: 90%;
    height: 6%;
    background-color: black;
    font-family: "Cyberdyne";
    font-size: 1.5vmax;
    color: white;
    padding-left: 5px;
}

#description-div {
    height: 40%;
    width: 90%;
    background-color: black;
    font-family: 'VT323', monospace;
    color: $text-green;
    padding: 5px;
    font-size: 2.5vmax;
    line-height: 3vmax;
    overflow-y: auto;
    resize: none;
}

select {
    font-family: "Cyberdyne";
    width: 100%;
    font-size: 1.5vmax;
    padding: 1vmax;
    background-color: black;
    color: white;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url('/images/logos/expand-arrow-white.png');
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: 2em auto, 100%;
}

#mark-div {
    height: 14%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

#buttons-div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

button {
    background-color: white;
    font-family: 'Cyberdyne Condensed';
    font-style: italic;
    font-size: 1.5vmax;
    width: 15vmax;
    height: 2.5vmax;
}

@media only screen and (min-width: 768px) {
    #new-ticket-form {
        height: 100%;
        width: 60vw;
        margin-bottom: 0%;
        align-items: flex-start;
        padding-left: 5%;
    }

    h2 {
        font-size: 1.4vmax;
    }

    select {
        font-size: 1vmax;
        padding: 0.5vmax;
        background-size: 1.5em auto, 100%;
    }

    #problem-div {
        height: 8%;
        // font-size: 1vmax;
    }

    #description-div {
        height: 30%;
        padding: 5px;
        font-size: 1.5vmax;
        line-height: 2vmax;
        overflow-y: auto;
    }

    #mark-div {
        flex-direction: row;
        justify-content: flex-end;
    }

    #buttons-div {
        justify-content: space-between;
        width: 37%;
        margin-left: 5%;
    }

    button {
        width: 8vmax;
        height: 1.5vmax;
        font-size: 0.8vmax;
    }
}
</style>