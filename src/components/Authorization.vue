<template>
  <div class="authorization content">
    <div class="">
      <form v-on:submit.prevent="Authorization">
        <fieldset>
          <input class="inp" type="text" placeholder="Логин" name="" >
          <input class="inp" type="password" placeholder="Пароль" name="">
          <input type="button" value="Не помню пароль">
          <input type="submit" class="green_button" name="" value="Вход">
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authorization',
  data() {
    return {
    };
  },
  methods: {
    Authorization() {
      this.$store.commit('autorization');
    },
  },
};
</script>

<style scoped lang="scss">
fieldset{
  border: 5px rgba(0, 145, 145, 0.774) solid;
  text-align: start;
  display: inline-flex;
  background-color: rgb(150, 150, 150);
}
form{
  margin: 20vh auto;
}
.inp{
  border: none;
  padding: 0 1ch;
  margin: 1em 0 1ch 0;
  font-size: 130%;
  background-color: rgb(196, 196, 196);
}
.authorization [type="submit"]{
  background-color: rgba(0, 145, 145, 0.774);
  margin: 1ch auto 0 auto;
  padding: 2px 1em;
  border: none;
  font-size: 130%;
}
.authorization [type="button"]{
  border: none;
  background-color: rgb(150, 150, 150);
  margin: 0 auto;
}
span{
  display: block;
  text-align: center;
  font-size: 80%;
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
