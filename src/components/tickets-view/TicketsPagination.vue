<script setup lang="ts">
import { usePaginationStore } from '@/stores/paginationStore';
import { useUsersStore } from '@/stores/usersStore';

const usersStore = useUsersStore()
const pageStore = usePaginationStore()

</script>

<template>
   <div id="pagination-container">
    <button type="button" class="button" id="first" :class="{ deactivated: pageStore.isBeginning }" @click="pageStore.GoToFirstPage()">FIRST</button>
    <button type="button" class="button" id="prev" :class="{ deactivated: pageStore.isBeginning }" @click="pageStore.GoToPrevPage()">PREV</button>
    <p id="page-number">{{ pageStore.pageNumber }}</p>
    <button type="button" class="button" id="next" :class="{ deactivated: pageStore.isEnd }" @click="pageStore.GoToNextPage()">NEXT</button>
    <button type="button" class="button" id="last" :class="{ deactivated: pageStore.isEnd }" @click="pageStore.GoToLastPage()">LAST</button>
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

.deactivated {
    color: gray;
    cursor: default;
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