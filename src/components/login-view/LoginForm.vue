<script setup lang="ts">

</script>

<template>
    <form>
        <h3>USERNAME</h3>
        <input id="username-input" type="text">

        <h3>PASSWORD</h3>
        <input id="password-input" type="password">

        <button id="submit-button">SUBMIT</button>
    </form>
    
</template>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 42%;
    width: 90%;
    background-color: $base-grey;
    padding-top: 10%;
    margin-bottom: 8%;
}

h3 {
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
}

button {
    background-color: white;
    font-family: 'Cyberdyne Condensed';
    font-style: italic;
    padding: 5px 15px 5px 15px;
    margin-left: auto;
    margin-right: 5%;
}

</style>