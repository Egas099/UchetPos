<template>
  <div id="app">
    <Header/>
    <!-- <transition-group name="view" tag="div"> -->
    <router-view v-if="this.$store.state.a.autoriz"/>
    <Authorization v-else/>
    <!-- </transition-group> -->
    <Footer/>
  </div>
</template>

<script>
import Authorization from '@/components/Authorization.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// import axios from 'axios';

export default {
  components: {
    Header,
    Footer,
    Authorization,
  },
  mounted() {
    if (localStorage.autoriz === 'true') {
      this.$store.commit('autorization');
    }
    this.$store.dispatch('subjects_request');
    // axios.get('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/group/22305')
    //   .then((response) => {
    //     console.log(response.data.student);
    //   })
    //   .catch((error) => console.log(error));
  },
  // created() {
  //   // axios.get(`http://localhost/basic/web/predmet/visits/`+group+`/`+predmet)
  //   // .then(response => (this.lesson = response.data))
  //   axios.get('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/group/22305')
  //     .then((response) => {
  //       console.log(response);
  //       this.info = response;
  //     })
  //     .catch((error) => console.log(error));
  // },
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

}
.content{
  display: block;
  min-height: calc(100vh - 10vh - 4vh);
}
.green_button{
  background-color: rgba(0, 150, 150);
  &:hover {
  background-color: rgb(0, 170, 170);
  transition: 0.3s;
  }
  text-decoration: none;
  border: none;
  color: black;
}
</style>
