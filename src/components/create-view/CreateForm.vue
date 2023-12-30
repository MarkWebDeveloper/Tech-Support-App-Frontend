<script setup lang="ts">
import { useTicketsStore } from '@/stores/ticketsStore';
import ProblemOption from './ProblemOption.vue';

const ticketsStore = useTicketsStore()
</script>

<template>
    <div id="tickets-div">
        <h2>SELECT YOUR PROBLEM</h2>
        <div id="select-problem-div">
            <select v-model="ticketsStore.selectedProblem">
                <option value="">SELECT PROBLEM TYPE</option>
                <ProblemOption v-for="(problem, index) in ticketsStore.problem_types" :problem="problem" :index="index"/>
            </select>
        </div>
    </div>
</template>

<style scoped lang="scss">
#tickets-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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

@media only screen and (min-width: 768px) {
    #tickets-div {
        height: 100%;
        width: 60vw;
        margin-bottom: 0%;
    }
}
</style>