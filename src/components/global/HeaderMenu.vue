<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStore';
import { useHeaderStore } from '@/stores/headerStore';

const userStore = useUsersStore() 
const headerStore = useHeaderStore()

</script>

<template>
    <div id="menu-container" v-if="!headerStore.menuIsHidden">
        <div id="user-container">
            <img id="technician-image" src="/images/logos/technician-icon-white.png" alt="technician icon" v-if="!headerStore.isUser">
            <img id="user-image" src="/images/logos/user-icon-white.png" alt="user icon" v-if="headerStore.isUser">
            <p>Mark Kil</p>
        </div>
        <button id="tickets-button" class="menu-button" type="button" v-if="headerStore.isUser" @click.prevent="headerStore.redirectToTickets()">TICKETS</button>
        <button id="create-ticket-button" class="menu-button" type="button" v-if="headerStore.isUser" @click.prevent="headerStore.redirectToCreate()">CREATE TICKET</button>
        <button id="edit-ticket-button" class="menu-button" type="button" v-if="headerStore.isUser" @click.prevent="headerStore.redirectToEdit()">EDIT TICKET</button>
        <button id="pending-tickets-button" class="menu-button" type="button" v-if="!headerStore.isUser" @click.prevent="headerStore.redirectToPending()">PENDING TICKETS</button>
        <button id="resolved-tickets-button" class="menu-button" type="button" v-if="!headerStore.isUser" @click.prevent="headerStore.redirectToResolved()">RESOLVED TICKETS</button>
        <button id="log-out-button" class="menu-button" type="button" @click.prevent="headerStore.logout()">LOG OUT</button>

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