<script setup lang="ts">

</script>

<template>
   <div id="pagination-container">
    <button type="button" class="button" id="first">FIRST</button>
    <button type="button" class="button" id="prev">PREV</button>
    <p id="page-number">1</p>
    <button type="button" class="button" id="next">NEXT</button>
    <button type="button" class="button" id="last">LAST</button>
   </div>
</template>

<style scoped lang="scss">
#pagination-container {
    width: 75%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.button {
    font-family: "Cyberdyne Condensed";
    font-style: italic;
    font-size: 1.2vmax;
    color: white;
    height: 3vmax;
    width: 6vmax;
}

#page-number {
    font-family: "Cyberdyne";
    font-style: italic;
    font-size: 3vmax;
    color: white;
    width: 4vmax;
    text-align: center;
}

@media only screen and (min-width: 768px) {
    #pagination-container {
        position: absolute;
        width: 40%;
        bottom: 2%;
        // height: 10%;
        // align-items: flex-end;
    }

    .button {
        font-size: 1vmax;
    }

    #page-number {
        font-size: 2.5vmax;
    }
}
</style>