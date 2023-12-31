<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore'
import { useRoute, useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/usersStore'
import TicketOption from './TicketOption.vue';
import ProblemOption from './../global/ProblemOption.vue';
import UserRepository from '@/repositories/userRepository';
import UserService from '@/services/userService';
import { onUpdated } from 'vue';

const route = useRoute()
const router = useRouter()

const ticketsStore = useTicketsStore()
const usersStore = useUsersStore()

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

function cancelTicketEditing() {
    ticketsStore.selectedProblem = ''
    ticketsStore.newTicketDescription = ''
    const redirectPath: any = route.query.redirect || '/tickets'
    router.push(redirectPath)
}

function resetTicket() {
    ticketsStore.ticketToPost.problem_type = ''
    ticketsStore.ticketToPost.description = ''
}

function setUserId() {
    ticketsStore.ticketToPost.userId = usersStore.activeUserIndex + 1
}

setUserId()

function handleChange(e: any) {
    ticketsStore.selectedTicket = usersStore.usersPendingTickets[e.target.value]
    ticketsStore.ticketToPost.problem_type = ticketsStore.selectedTicket.problem_type
    ticketsStore.ticketToPost.description = ticketsStore.selectedTicket.description
    console.log(console.log(e.target.value), ticketsStore.selectedTicket)
}

onUpdated(async() => {
    const repository = new UserRepository
    const service = new UserService(repository)
    usersStore.isLoaded = false
    usersStore.users = await service.index()
    usersStore.isLoaded = true

    usersStore.usersSortedTickets = usersStore.users[usersStore.activeUserIndex].tickets.sort(sort_by_id())
    usersStore.usersPendingTickets = usersStore.usersSortedTickets.filter((element) => element.status == "pending")
})
</script>

<template>
    <form id="new-ticket-form">
        <h2>SELECT A TICKET</h2>

        <div id="select-ticket-div">
            <select id="select-ticket" @change="handleChange" required>
                <option id="ticket-not-selected" value=""></option>
                <TicketOption v-for="(ticket, index) in usersStore.usersPendingTickets" :ticket="ticket" :index="index"/>
            </select>
        </div>

        <h2>SELECT PROBLEM TYPE</h2>

        <div id="select-problem-div">
            <select v-model="ticketsStore.ticketToPost.problem_type" required>
                <option id="problem-not-selected" value=""></option>
                <ProblemOption v-for="(problem, index) in ticketsStore.problem_types" :problem="problem" :index="index"/>
            </select>
        </div>

        <label for="description">ADD THE DESCRIPTION</label>
        <textarea name="description" id="description" v-model="ticketsStore.ticketToPost.description" required></textarea>

        <div id="buttons-div">
            <button type="button" id="cancel-button" class="button" @click="cancelTicketEditing()">CANCEL</button>
            <button type="button" id="reset-button" class="button" @click="resetTicket()">RESET</button>
            <button type="submit" id="submit-button" class="button" @click.prevent="ticketsStore.updateTicket(ticketsStore.selectedTicket.id, ticketsStore.ticketToPost)">SUBMIT</button>
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

h2, label {
    font-family: "Cyberdyne Halftone";
    font-style: italic;
    color: white;
    font-size: 2vmax;
}

#select-ticket-div {
    width: 90%;
    position: relative;
}

#select-problem-div {
    width: 90%;
    position: relative;
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

textarea {
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

#buttons-div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    background-color: white;
    font-family: 'Cyberdyne Condensed';
    font-style: italic;
    font-size: 1.5vmax;
    width: 10vmax;
    height: 2.2vmax;
}

@media only screen and (min-width: 768px) {
    #new-ticket-form {
        height: 100%;
        width: 60vw;
        margin-bottom: 0%;
        align-items: flex-start;
        padding-left: 5%;
    }

    h2,
    label {
        font-size: 1.4vmax;
    }

    select {
        font-size: 1vmax;
        padding: 0.5vmax;
        background-size: 1.5em auto, 100%;
    }

    textarea {
        height: 30%;
        padding: 5px;
        font-size: 1.5vmax;
        line-height: 2vmax;
        overflow-y: auto;
    }

    #buttons-div {
        justify-content: flex-end;
    }

    button {
        width: 6vmax;
        height: 1.5vmax;
        font-size: 0.8vmax;
        margin-left: 6%;
    }
}
</style>