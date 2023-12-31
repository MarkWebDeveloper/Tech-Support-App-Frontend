<script setup lang="ts">
import CreateForm from './CreateForm.vue';


</script>

<template>
    
    <h2 id="view-title">CREATE TICKET</h2>

    <div id="center-section-container">

        <img id="terminator-gif" src="/images/gif/wayne-dalton-wd-terminator-32c-2019-anim.gif" alt="t-800 image">

        <CreateForm />

        <div id="text-container">
            <p id="paragraph">HERE YOU CAN WATCH AND DELETE YOUR TICKETS. NOT GONNA HELP YOU ANYWAY. YOU'RE ALL PRIMITIVE AND USELESS.</p>
        </div>

    </div>
</template>

<style scoped lang="scss">
#view-title {
    display: none;
}

#center-section-container {
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

#terminator-gif {
    display: none;
}

#text-container {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20%;
    width: 70%;
    text-align: center;
}

p {
    font-family: "Cyberdyne";
    font-size: 2vmax;
    color: white;
}

@media only screen and (min-width: 768px) {

    #view-title {
        display: block;
        font-family: "Cyberdyne";
        font-size: 1.3vmax;
        color: white;
        margin: 0% 0 2% 0;
    }

    #center-section-container {
        width: 100%;
        height: 30vmax;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    #terminator-gif {
        display: block;
        width: 15%;
    }

    #text-container {
        display: flex;
        width: 15%;
        text-align: center;
    }

    p {
        font-size: 1.2vmax;
    }
}
</style>