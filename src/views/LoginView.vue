<script setup lang="ts">
import LoginMobileTopSection from '@/components/login-view/LoginMobileTopSection.vue';
import LoginMiddleSection from '@/components/login-view/LoginMiddleSection.vue';

</script>

<template>
  <main>

    <LoginMobileTopSection id="mobile-top-section" />

    <LoginMiddleSection />

  </main>
</template>

<style scoped lang="scss">
main {
  width: 100vw;
  height: 90vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 768px) {
    #mobile-top-section {
        display: none;
    }
}
</style>
