<template>
  <header>
    <nav>
        <ul>
            <li><router-link to="/">Главная</router-link></li>
            <li><router-link to="/authorization">Авторизация</router-link></li>
            <li><router-link to="/view_attendance">Посещаемость</router-link></li>
        </ul>
    </nav>
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
ul {
  list-style-type: none;
  margin: 0;
}
li {
  background-color: rgb(248, 248, 248);
  display: inline-flex;
  margin: 1px;
}
a {
  font-size: 130%;
  display: block;
  text-decoration: none;
  color: #359167;
  width: 10em;
  padding: 0.5em 0;
}
header{
  border: 1px black solid;
}
li:hover{
  background-color: rgb(223, 223, 223);
}
</style>
