<script setup lang="ts">

</script>

<template>
    <form action="submit">
        <h3>USERNAME</h3>
        <input id="username-input" type="text">

        <h3>PASSWORD</h3>
        <input id="password-input" type="text">
    </form>
</template>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40%;
    width: 90%;
    background-color: $base-grey;
    padding-top: 10%;
}

h3 {
    font-family: "Cyberdyne Halftone";
    font-style: normal;
    font-size: 2vmax;
    color: white;
    margin: 0% 0 10% 0;
}

input {
    width: 90%;
    background-color: black;
    font-family: 'VT323', monospace;
    color: $text-green;
    margin-bottom: 10%;
    height: 10%;
}
</style>