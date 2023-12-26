<script setup lang="ts">

</script>

<template>
    <form>
        <div class="container">
            <label id="username-label" for="username-input">USERNAME</label>
            <input id="username-input" type="text">
        </div>

        <div class="container">
            <label id="password-label" for="password-input">PASSWORD</label>
            <input id="password-input" type="password">
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
    margin-bottom: 8%;
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
    height: 3vmax;
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
        height: 100%;
        width: 60vw;
        margin-bottom: 0%;
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