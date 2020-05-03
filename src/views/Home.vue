<template>
  <div class="home content">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};

</script>
