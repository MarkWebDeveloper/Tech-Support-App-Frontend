<script setup lang="ts">
import EditMiddleSection from '@/components/edit-view/EditMiddleSection.vue';
import EditMobileTopSection from '@/components/edit-view/EditMobileTopSection.vue';


</script>

<template>
  <main>
    <EditMobileTopSection />

    <EditMiddleSection />
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
  