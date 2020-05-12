<template>
  <header>
    <!-- <nav>
        <ul>
            <li><router-link to="/">Главная</router-link></li>
            <li><router-link to="/authorization">Авторизация</router-link></li>
            <li><router-link to="/view_attendance">Посещаемость</router-link></li>
        </ul>
    </nav> -->
    <div class="auth_name">
      <input type="button" value="Иванов Иван Иванович">
    </div>
    <div class="exit">
      <input type="button" value="Выход">
      <div style="clear: both;"></div>
    </div>
    <!-- <div class="auth">
      <span>
        Авторизация
      </span>
    </div> -->
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
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
  color: black;
  height: 9vh;
  border: none;
  background: rgba(0, 150, 150);
  min-height: 30px;
}
.auth_name{
  float: left;
}
.exit > *{
  float: right;
}
.auth{
  color: black;
  padding: 1vh;
  font: 140% sans-serif;
}
</style>
