<script setup lang="ts">
import CreateMiddleSection from '@/components/create-view/CreateMiddleSection.vue';
import CreateMobileTopSection from '@/components/create-view/CreateMobileTopSection.vue';


</script>

<template>
  <main>
    <CreateMobileTopSection id="mobile-top-section"/>

    <CreateMiddleSection />
  </main>
</template>
  
<style lang="scss" scoped>
main {
  width: 100vw;
  height: 90vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

@media only screen and (min-width: 768px) {
    main {
      justify-content: center;
    }

    #mobile-top-section {
        display: none;
    }
}
</style>
  