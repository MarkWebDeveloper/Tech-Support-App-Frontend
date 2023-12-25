<script setup lang="ts">

</script>

<template>
    <form>
        <label id="username-label" for="username-input">USERNAME</label>
        <input id="username-input" type="text">

        <label id="password-label" for="password-input">PASSWORD</label>
        <input id="password-input" type="password">

        <button id="submit-button">SUBMIT</button>
    </form>
</template>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 37vh;
    width: 90vw;
    background-color: $base-grey;
    padding-top: 10%;
    margin-bottom: 8%;
}

label {
    font-family: "Cyberdyne Halftone";
    font-style: normal;
    font-size: 2vmax;
    color: white;
    margin-bottom: 5%;
}

input {
    width: 90%;
    background-color: black;
    font-family: 'VT323', monospace;
    color: $text-green;
    margin-bottom: 15%;
    height: 10%;
    text-align: center;
}

button {
    background-color: white;
    font-family: 'Cyberdyne Condensed';
    font-style: italic;
    padding: 5px 15px 5px 15px;
    margin-left: auto;
    margin-right: 5%;
}

@media only screen and (min-width: 768px) {
    form {
        padding-top: 0%;
        height: 60vh;
        width: 60vw;
        margin-bottom: 0%;
    }

    #username-label {
        margin-top: 7%;
    }

    label {
        font-size: 1.3vmax;
        margin-bottom: 2%;
    }

    input {
        width: 80%;
        margin-bottom: 7%;
        height: 9%;
    }

    button {
        padding: 5px 15px 5px 15px;
        margin-left: auto;
        margin-right: 10%;
        font-size: 1vmax;
    }
}
</style>