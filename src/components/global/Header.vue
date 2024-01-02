<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HeaderMenu from './HeaderMenu.vue';
import { useHeaderStore } from '@/stores/headerStore';
import { useUsersStore } from '@/stores/usersStore';
import { storeToRefs } from 'pinia';
const showRoutes: boolean = false

const userStore = useUsersStore()
const headerStore = useHeaderStore()
</script>

<template>
    <header>
        <div id="container">
            <img id="cyberdyne-logo" alt="Cyberdine logo" src="/images/logos/cyberdyne-logo-white.png">
            <h1 id="header-title">TECHNICAL SUPPORT</h1>
            <button id="menu-button-mobile" type="button" v-if="headerStore.showButton" @click.prevent="headerStore.toggleMenuVisibility()"><img id="menu-icon" src="/images/logos/mobile-menu-icon.png" alt="menu icon"></button>
            <button id="menu-button-desktop" v-if="userStore.isAuthenticated" @click.prevent="headerStore.toggleMenuVisibility()">MENU</button>
        </div>

        <HeaderMenu />

        <div class="wrapper" v-if="showRoutes">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/tickets">Tickets</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    height: 10vh;
    width: 100vw;
    background-color: $base-grey;
}

#container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
}

#cyberdyne-logo {
    height: 90%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}

#header-title {
    display: none;
}

#menu-button-mobile {
    height: 80%;
    width: 70px;
    margin-right: 3%;
}

#menu-button-desktop {
    display: none;
}

#menu-icon {
    height: 50%;
}

@media only screen and (min-width: 768px) {
    #header-title {
        display: block;
    }

    #container {
        justify-content: space-between;
    }

    #cyberdyne-logo {
        height: 100%;
        position: relative;
        left: auto;
        transform: translate(0);
        margin-left: 3%;
    }

    #header-title {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        display: block;
        font-family: "Cyberdyne";
        font-size: 1.8vmax;
        color: white;
    }

    #menu-button-mobile {
        display: none;
    }

    #menu-button-desktop {
        display: block;
        width: 80px;
        height: 70%;
        font-family: "Cyberdyne";
        font-size: 1.5vmax;
        color: white;
        margin-right: 2%;
    }

    #menu-icon {
        height: 50%;
    }
}
</style>
