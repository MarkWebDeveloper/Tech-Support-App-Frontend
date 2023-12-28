<script setup lang="ts">

</script>

<template>
    <div id="ticket-container">
        <div id="number_delete_container">
            <p id="ticket-number">#1</p>
            <button type="button" id="delete-button">DELETE</button>
        </div>
        <h3 id="problem-type">Problem name</h3>
        <p id="problem-description">Join & Create Image Creator from Designer helps you generate images based on your words with AI. Learn more. You will receive emails about Microsoft Rewards, which</p>
        <div id="status-container">
            <h4 id="status">STATUS:</h4>
            <h4 id="current-status">PENDING</h4>
        </div>
    </div>
</template>

<style scoped lang="scss">
#ticket-container {
    width: 90%;
    height: 50%;
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

#problem-type {
    color: white;
    font-family: "Cyberdyne Expanded";
    font-size: 1.7vmax;
    margin-right: auto;
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

#current-status {
    color: $text-green;
}

@media only screen and (min-width: 768px) {

    button {
        padding: 5px 15px 5px 15px;
        margin-left: auto;
        margin-right: 10%;
        font-size: 1vmax;
    }
}
</style>

