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
    border-left: 2px ridge $base-red;
    border-right: 2px ridge $base-red;
    border-bottom: 2px ridge $base-red;
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
    font-size: 1.6vmax;
}

button {
    font-family: 'Cyberdyne';
    color: white;
    font-size: 1.8vmax;
}

@media only screen and (min-width: 768px) {
    #menu-container {
    margin-left: auto;
    width: 20%;
    height: 25vh;
}

img {
    height: 20px;
    margin-right: 2%;
}

p {
    font-family: 'Cyberdyne Condensed';
    font-style: italic;
    color: white;
    font-size: 1vmax;
}

button {
    font-family: 'Cyberdyne';
    color: white;
    font-size: 1.2vmax;
}
}
</style>