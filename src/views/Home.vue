<template>
  <div class="home content">
    <form action="">
      <div class="view_attendance">
        <router-link to="/">Отметить посещаемость</router-link>
      </div>
      <div class="view_attendance">
        <router-link to="/view_attendance">Просмотр посещаемости</router-link>
      </div>
    </form>
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
  margin: 3em auto;
  width: 30%;
  padding: 1em 0;
}
</style>
