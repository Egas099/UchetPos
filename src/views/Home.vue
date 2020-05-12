<template>
  <div class="home content">
    <div class="view_attendance">
      <router-link to="/selectionnew">Отметить посещаемость</router-link>
    </div>
    <div class="view_attendance">
      <router-link to="/selectioncheck">Просмотр посещаемости</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};

</script>
<style scoped lang="scss">
.view_attendance > *{
  background-color: rgba(128, 128, 128, 0.637);
  display: block;
  text-decoration: none;
  color: black;
  border: 5px rgb(0, 145, 145) solid;
  margin: 20vh auto;
  width: 30%;
  min-width: 200px;
  padding: 3vh 0;
}
</style>
