<template>
  <div class="content_wrapper">
    <div class="home">
      <router-link to="/selectionnew" v-if="prava">
      Отметить посещаемость
      </router-link>
      <router-link to="/selectioncheck">Просмотр посещаемости</router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Home',
  data() {
    return {
      prava: this.$store.state.a.prepod,
    }
  },
};

</script>
<style scoped lang="scss">
.home > *{
  transition: all 0.3s;
  background-color: rgba(128, 128, 128, 0.637);
  border: 1vh rgb(0, 145, 145) solid;
  text-decoration: none;
  color: black;
  width: 30%;
  min-width: 200px;
  padding: 3vh 0;
  &:hover {
    background-color: rgba(194, 194, 194, 0.589);
    border: 1vh rgb(0, 170, 170) solid;
    width: 31%;
    font-size: 110%;
  }
}
.forPrep{
  display: none;
}
.forStud{
  display: block;
}
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 65vh;
}
</style>
