<script setup lang="ts">
import LoginMobileTopSection from '@/components/login-view/LoginMobileTopSection.vue';
import LoginForm from './../components/login-view/LoginForm.vue'
import LoginMiddleSection from '@/components/login-view/LoginMiddleSection.vue';
</script>

<template>
  <main>

    <LoginMobileTopSection id="mobile-top-section" />

    <LoginMiddleSection />

    <!-- <h2 id="view-title">LOGIN</h2>

    <div id="center-section-container">

      <LoginForm />

      <div id="text-container">
        <p id="greetings">GREETINGS, HUMAN:</p>
        <p id="paragraph">LOGIN INTO YOUR ACCOUNT AS AN EMPLOYEE OR TECHNICIAN</p>
      </div>

    </div> -->

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

// #view-title {
//   display: none;
// }

// #text-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 70%;
//   text-align: center;
// }

// p {
//   font-family: "Cyberdyne";
//   font-size: 2vmax;
//   color: white;
// }

// #greetings {
//   margin-bottom: 10%;
// }

// @media only screen and (min-width: 768px) {
//   #mobile-top-section {
//     display: none;
//   }

//   #view-title {
//     display: block;
//     font-family: "Cyberdyne";
//     font-size: 1.3vmax;
//     color: white;
//     margin: 5% 0 2% 0;
//   }

//   #text-container {
//     display: none;
//     flex-direction: column;
//     align-items: center;
//     width: 70%;
//     text-align: center;
//   }

//   p {
//     font-family: "Cyberdyne";
//     font-size: 2vmax;
//     color: white;
//   }

//   #greetings {
//     margin-bottom: 10%;
//   }
// }
</style>
