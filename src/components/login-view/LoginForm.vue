<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStore';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useUsersStore()

const route = useRoute()
const router = useRouter()

const username = ref('')
const password = ref('')
const isAuthenticated = ref(false)

function redirectToTickets() {
    const redirectPath: any = route.query.redirect || '/tickets'
    router.push(redirectPath)
}

function redirectToPending() {
    const redirectPath: any = route.query.redirect || '/pending'
    router.push(redirectPath)
}

function checkUser() {

    for (let index = 0; index < store.users.length; index++) {
        if (store.users[index].username == username.value && store.users[index].password == password.value) {
            isAuthenticated.value = true
            localStorage.setItem('isAuthenticated', 'true')
            if (store.users[index].type == false) {
                redirectToTickets()
            } else {
                redirectToPending()
            }
        } else {
            alert("Incorrect email or password")
        }
    }
}
</script>

<template>
    <form @submit.prevent="checkUser()">
        <div class="container">
            <label id="username-label" for="username-input">USERNAME</label>
            <input id="username-input" type="text" v-model="username">
        </div>

        <div class="container">
            <label id="password-label" for="password-input">PASSWORD</label>
            <input id="password-input" type="password" v-model="password">
        </div>

        <button id="submit-button">SUBMIT</button>
    </form>
</template>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 37vh;
    width: 90vw;
    background-color: $base-grey;
}

.container {
    width: 90%;
    height: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

label {
    font-family: "Cyberdyne Halftone";
    font-style: normal;
    font-size: 2vmax;
    color: white;
}

input {
    width: 100%;
    background-color: black;
    font-family: 'VT323', monospace;
    color: $text-green;
    height: 3.5vh;
    text-align: center;
}

button {
    background-color: white;
    font-family: 'Cyberdyne Condensed';
    font-style: italic;
    font-size: 2vmax;
    padding: 5px 15px 5px 15px;
    margin-left: auto;
    margin-right: 5%;
}

@media only screen and (min-width: 768px) {
    form {
        height: 100%;
        width: 60vw;
        margin-bottom: 0%;
    }

    .container {
        width: 100%;
        height: 15%;
    }

    label {
        font-size: 1.3vmax;
    }

    input {
        width: 80%;
        height: 2vmax;
    }

    button {
        padding: 5px 15px 5px 15px;
        margin-left: auto;
        margin-right: 10%;
        font-size: 1vmax;
    }
}
</style>