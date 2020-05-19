<template>
  <div class="choiceforcheck content">
    <form @submit.prevent="view_attendance">
      <fieldset>
        <input type="list" class="inp" list="pred"  placeholder="Выберите предмет" required
        v-model="selSubject" v-on:keyup="() => {this.$store.commit('change_Subject',selSubject)}">
        <datalist id="pred">
          <option v-for="sub in this.$store.state.subjects"
            v-bind:key="sub.name">{{sub.name}}
          </option>
        </datalist>

        <input class="inp" type="text" placeholder="Введите номер группы" required
        v-model="selGroup" v-on:keyup="() => {this.$store.commit('change_Group',selGroup)}">
        <router-link to="/view_attendance" class="green_button">
          Просмотр посещаемости
        </router-link>
        <button type="submit"  class="green_button">
          Импорт
        </button>
      </fieldset>
    </form>
    <div class="loading" v-if="load">
      <div class="load_data">Загружаем данные</div>
      <div class="load_error">
        <div class="load_data" v-show="load_error">
          <div>
            Произошла ошибка при загрузке данных:<br>{{load_error}}<br>
          </div>
        <button @click="() => {
          this.load = false;
          this.load_error = '';
          }"
          class="green_button">Продолжить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selSubject: this.$store.state.c.selectSubject,
      selGroup: this.$store.state.c.selectGroup,
      load: false,
      load_error: '',
    };
  },
  methods: {
    none() {
      axios.get('http://kappa.cs.petrsu.ru/~pogudin/tppo/web')
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    q() {
      console.log('fdgg');
    },
    view_attendance() {
      this.load = true;
      console.log('Импортируем визиты');
      axios.get('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/predmet/visits/')
        .then((response) => {
          console.log(response.data);
          this.load = false;
        })
        .catch((error) => {
          this.load_error = error;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
fieldset{
  border: 5px rgba(0, 145, 145, 0.774) solid;
  background-color: rgb(150, 150, 150);
  display: inline-flex;
  padding: 5vh 1vh;
  @media screen and (max-width: 640px) {
    width: calc(100vw - 50px);
    transition: .3s;
  }
  transition: .3s;
}
form{
  margin: 10vh auto;
  transition: .3s;
}
.inp{
  width: 100%;
  border: none;
  padding: 1vh 0;
  margin: 4vh auto;
  font-size: 130%;
  background-color: rgb(196, 196, 196);
}
.green_button{
  background-color: rgba(0, 145, 145, 0.774);
  margin: 1vh 1vw 0 1vw;
  padding: 1vh 1vw;
  font-size: 100%;
  text-decoration: none;
  color: black;
  text-align: center;
}
.loading{
  display:block;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.603);
}
.load_data{
  border: 5px rgba(0, 145, 145, 0.774) solid;
  background-color: rgb(150, 150, 150);
  position: fixed;
  top: 40vh;
  right: 0;
  left: 0;
  width: 50%;
  margin: auto;
  font-size: 130%;
  padding: 3vh 0;
}
</style>
