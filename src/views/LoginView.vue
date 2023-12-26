<script setup lang="ts">
import LoginMobileTopSection from '@/components/login-view/LoginMobileTopSection.vue';
import LoginMiddleSection from '@/components/login-view/LoginMiddleSection.vue';
import { useUsersStore } from '@/stores/usersStore';

const store = useUsersStore()

async function printUsers() {
  const users = await store.users
  return console.log(users)
}

printUsers()
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
