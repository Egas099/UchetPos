<template>
  <div id="app">
    <Header/>
    <router-view v-if="this.$store.state.a.autoriz"/>
    <Authorization v-else/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
/* eslint-disable */
import Authorization from '@/components/Authorization.vue';
import Header from '@/components/Header.vue';
import axios from 'axios';
// import Footer from '@/components/Footer.vue';
// import axios from 'axios';

export default {
  components: {
    Header,
    // Footer,
    Authorization,
  },
  mounted() {
    this.$store.dispatch('subjects_request');
  },
  created() {
    axios.get('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/site/tekuser')
      .then((response) => {
        if (response.data.group != null) {
          this.$store.commit('autorization',{name:response.data.name,group: response.data.group});
        }
      })
      .catch((response) => {
        console.log(response);
      });
  },
};

</script>

<style lang="scss">
.info{
  border: 1px solid black;
  height: 30vh;
  overflow: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 110%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: rgb(196, 196, 196);
  transition: all 0.3s;
}
.content_wrapper{
  display: block;
  min-height: calc(100vh - 10vh);
  // max-width: 100vw;
}
.green_button{
  background-color: rgba(0, 150, 150);
  &:hover {
  background-color: rgb(0, 170, 170);
  transition: .3s;
  }
  text-decoration: none;
  border: none;
  color: black;
}
.list-enter-active, .list-leave-active {
  transition: opacity .2s;
}
.list-enter, .list-leave-to {
  opacity: 0;
}
.list-item {
  background-color: rgb(196, 196, 196);
  display: inline-block;
  padding: 0.5vh 0.5vw;
  margin: 1px;
}
</style>
