<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore';
import ProblemOption from './ProblemOption.vue';

const ticketsStore = useTicketsStore()
</script>

<template>
    <form action="submit" id="new-ticket-form">
        <h2>SELECT YOUR PROBLEM</h2>
        <div id="select-problem-div">
            <select v-model="ticketsStore.selectedProblem">
                <option value="">SELECT PROBLEM TYPE</option>
                <ProblemOption v-for="(problem, index) in ticketsStore.problem_types" :problem="problem" :index="index"/>
            </select>
        </div>
        <label for="description">ADD THE DESCRIPTION</label>
        <textarea name="description" id="description" v-model="ticketsStore.newTicketDescription"></textarea>
        <div id="buttons-div">
            <button type="button" id="cancel-button" class="button">CANCEL</button>
            <button type="button" id="reset-button" class="button">RESET</button>
            <button type="submit" id="submit-button" class="button">CREATE</button>
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
    height: 50%;
    width: 90%;
    background-color: black;
    font-family: 'VT323', monospace;
    color: $text-green;
    padding: 5px;
    font-size: 2.5vmax;
    line-height: 3vmax;
    overflow-y: auto;
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
    #tickets-div {
        height: 100%;
        width: 60vw;
        margin-bottom: 0%;
    }

    button {
        padding: 5px 15px 5px 15px;
        margin-left: auto;
        margin-right: 10%;
        font-size: 1vmax;
    }
}
</style>