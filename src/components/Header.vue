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
      <span>
        Иванов Иван Иванович
      </span>
    </div>
    <div class="exit">
      <input type="button" value="Выход">
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
// ul {
//   list-style-type: none;
//   margin: 0;
// }
// li {
//   background-color: rgb(248, 248, 248);
//   display: inline-flex;
//   margin: 1px;
// }
// a {
//   font-size: 130%;
//   display: block;
//   text-decoration: none;
//   color: #359167;
//   width: 10em;
//   padding: 0.5em 0;
// }
header{
  // border: 1px black solid;
  // display: inline-flex;
  background: rgba(0, 150, 150);
  margin: 0 0 3em 0;
}
// li:hover{
//   background-color: rgb(223, 223, 223);
// }

.auth_name{
  float: left;
  padding: 1em;
  color: black;
}
.auth_name > span{
  font-size: 150%;
}
.exit > *{
  font-size: 120%;
  float: right;
  color: black;
  padding: 1em;
  border: none;
  background: rgba(0, 150, 150);
}
.auth{
  color: black;
  padding: 1em;
  font: 140% sans-serif;
}
</style>
