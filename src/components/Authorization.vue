<template>
  <div class="content_wrapper">
    <div class="authorization">
      <form v-on:submit.prevent="Authorization">
        <fieldset>
          <div>
            <input class="inp" type="text" placeholder="Логин" v-model="login">
          </div>
          <div>
            <input class="inp" type="password" placeholder="Пароль" v-model="password">
          </div>
          <div>
            <input class="inp" placeholder="Url" v-model="use_url">
          </div>
          <div>
            <input type="button" value="Не помню пароль">
          </div>
          <div>
            <input type="submit" class="green_button" value="Войти без авторизации">
          </div>
          <button @click.prevent="server_author" class="green_button but">
            Отправить введённые данные на сервер</button>
        </fieldset>
      </form>
      <div class="">{{resp}}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'Authorization',
  data() {
    return {
      login: 'login',
      password: 'password',
      use_url: 'http://kappa.cs.petrsu.ru/~pogudin/tppo/web/site/login',
      resp: '-',
    };
  },
  methods: {
    Authorization() {
      this.$store.commit('autorization');
    },
    server_author() {
      let data = [];
      let obj = [];
      data = {
        login: this.login,
        password: this.password,
      };
      data = JSON.stringify(data);
      obj.push(data);
      obj = JSON.stringify(obj);
      // obj = JSON.stringify(obj);
      // console.log(obj);
      console.log(obj);
      axios.post('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/site/test2', obj)
        .then((response) => {
          this.resp = response;
          console.log(response);
        })
        .catch((error) => {
          this.resp = error;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
fieldset{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px rgba(145, 0, 0, 0.774) solid;
  background-color: rgb(150, 150, 150);
}
form{
  margin: 10vh auto;
}
.inp{
  border: none;
  padding: 0 1ch;
  margin: 1em 0 1ch 0;
  font-size: 120%;
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
.but{
  margin: 1vh auto;
  padding: 1vh 1vw;
}
.authorization{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
