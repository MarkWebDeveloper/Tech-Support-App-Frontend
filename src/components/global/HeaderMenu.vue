<script setup lang="ts">

</script>

<template>
    <div id="menu-container">
        <div id="user-container">
            <img id="user-type-image" src="/images/logos/technician-icon-white.png" alt="technician icon">
            <p>Mark Kil</p>
        </div>
        <button id="create-ticket-button" class="menu-button" type="button">CREATE TICKET</button>
        <button id="edit-ticket-button" class="menu-button" type="button">EDIT TICKET</button>
        <button id="log-out-button" class="menu-button" type="button">LOG OUT</button>
    </div>
</template>

<style scoped lang="scss">
#menu-container {
    position: relative;
    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: $base-grey;
    z-index: 99;
    border-top: 2px solid black;
}

#user-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    height: 3vmax;
    margin-right: 2%;
}

p {
    font-family: 'Cyberdyne Condensed';
    font-style: italic;
    color: white;
}

button {
    font-family: 'Cyberdyne';
    color: white;
}
</style>