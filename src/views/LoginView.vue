<script setup lang="ts">
import LoginForm from './../components/login-view/LoginForm.vue'
</script>

<template>
  <main>
    <h1 id="page-title">TECHNICAL SUPPORT</h1>
    <img id="terminator-gif" src="/images/gif/wayne-dalton-wd-terminator-32c-2019-anim.gif" alt="t-800 image">
    <h2 id="view-title">LOGIN</h2>

    <LoginForm />

    <div id="text-container">
        <p id="greetings">GREETINGS, HUMAN:</p>    
        <p id="paragraph">LOGIN INTO YOUR ACCOUNT AS AN EMPLOYEE OR TECHNICIAN</p>    
    </div>

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
}

#page-title {
  display: block;
  font-family: "Cyberdyne";
  font-size: 2.2vmax;
  color: white;
  margin: 5% 0 5% 0;
}

#view-title {
  display: block;
  font-family: "Cyberdyne";
  font-size: 2.2vmax;
  color: white;
  margin: 5% 0 5% 0;
}

#terminator-gif {
  height: 20%;
}

#text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    text-align: center;
}

p {
  font-family: "Cyberdyne";
  font-size: 2vmax;
  color: white;
}

#greetings {
  margin-bottom: 10%;
}
</style>
