<script setup lang="ts">

</script>

<template>
    <div id="tickets-div">
        
    </div>
</template>

<style scoped lang="scss">
#tickets-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 90vw;
    background-color: $base-grey;
    overflow-y: auto;
}

@media only screen and (min-width: 768px) {
    #tickets-div {
        height: 100%;
        width: 60vw;
        margin-bottom: 0%;
    }
}
</style>