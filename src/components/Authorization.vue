<template>
  <div class="content_wrapper">
    <div class="authorization">
      <form>
        <fieldset>
          <div>
            <input class="inp" type="text" placeholder="Логин" v-model="login">
          </div>
          <div>
            <input class="inp" type="password" placeholder="Пароль" v-model="password">
          </div>
          <!-- <div>
            <input class="inp" placeholder="Url" v-model="use_url">
          </div> -->
          <div>
            <input type="button" value="Не помню пароль" @click="show_window = !show_window">
          </div>
          <div>
            <button @click.prevent="Authorization" class="green_button">
              Войти без авторизации</button>
          </div>
          <button @click.prevent="server_author" class="green_button but">
            Авторизироваться</button>
            <!-- <button @click.prevent="tester">
            Отправить введённые данные на сервер</button>
            <button @click.prevent="exit">
            выйти</button> -->
        </fieldset>
      </form>
      <transition name="list">
        <div class="donotrem" v-show="show_window">
          <div>
            <div>По поводу пароля обращайтесь в директцию вашего института</div>
            <button class="green_button but" @click="show_window = !show_window">Продолжить</button>
          </div>
        </div>
      </transition>
      <!-- <div class="">{{resp}}</div> -->
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
      show_window: false,
      login: '',
      password: '',
      // use_url: 'http://localhost/tppoq/web/site/login',
      resp: '-',
    };
  },
  methods: {
    tester() {
axios.get('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/site/tekuser')
      .then((response) => {
        console.log(response.data);
        console.log(response.data.name);
        console.log(response.data);
      })
    },
    Authorization() {
      // console.log('eqweqweqw')
      this.$store.commit('face_auth');
    },
    exit() {
 axios.post('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/site/logout')
        .then((response) => {
        //  this.resp = response.data;
          console.log(this.resp);
        //  if(response.data.groups != null)
        //  {
        //    this.$store.commit('autorization');
        //  }
        })
    },
    server_author() {
      let data = [];
      let obj = [];
      data = {
        login: this.login,
        password: this.password,
      };
      data = JSON.stringify(data);
     // obj.push(data);
     // obj = JSON.stringify(obj);
      // obj = JSON.stringify(obj);
      // console.log(obj);
     // console.log(obj);
      axios.post('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/site/login', data)
        .then((response) => {
          this.resp = response.data;
         // console.log(this.resp);
          if(response.data.group != null)
          {
            this.$store.commit('autorization',{name:this.resp.name,group:this.resp.group});
          }
        })
        .catch((response) =>{
          
          // this.$store.commit('autorization',{name:'test',group:'22304'});
          //alert(this.$store.state.a.tekgroup)
          console.log(response);
          //alert(response);
          //this.$store.commit('autorization','loh');
        //  alert(this.$store.state.a.user_name)
        })
        
    },
  },
};
</script>

<style scoped lang="scss">
.donotrem{
  position: fixed;
  top: 30vh;
  left:0;
  right:0;
}
.donotrem > div{
  // display: block;
  padding: 3vh 3vw;
  width: 40%;
  border: 5px rgba(0, 145, 145, 0.774) solid;
  background-color: rgb(150, 150, 150);
  margin: 0 auto;
}
fieldset{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px rgba(0, 145, 145, 0.774) solid;
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
  font-size: 120%;
}
.authorization{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
