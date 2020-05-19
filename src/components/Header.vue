<template>
  <header>
    <div class="" v-if="this.$store.state.a.autoriz">
      <div class="auth_name">
        <input type="button" value="Иванов Иван Иванович" class="green_button">
      </div>
      <div class="exit">
        <input type="button" value="Выход" class="green_button"
        @click="Deauthorization">
      </div>
      <div style="clear: both;"></div>
    </div>
    <div class="auth" v-else>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  methods: {
    Deauthorization() {
      this.$store.commit('deautorization');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header{
  background: rgba(0, 150, 150);
  margin: 0 0 1vh 0;
  height: 9vh;
  min-height: 30px;
}
input{
  font-size: 120%;
  height: 9vh;
  min-height: 30px;
}
.auth_name{
  float: left;
  padding: 0 1vh;
}
.exit{
  float: right;
  padding: 0 1vh;
}
.auth{
  margin: auto;
  color: black;
  font: 140% sans-serif;
}
span::after{
  display: block;
  margin: 2vh auto;
  content: 'Авторизация';
}
</style>
