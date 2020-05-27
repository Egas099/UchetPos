<template>
  <div class="choiceforcheck content_wrapper">
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
        <button type="submit"  class="green_button">
          Просмотр посещаемости
        </button>
      </fieldset>
    </form>
    <div class="loading" v-if="load">
      <div class="load_data" >Загружаем данные...</div>
      <div class="load_error">
        <div class="load_data" v-show="load_error || load_text">
          <div>
            {{load_text}}<br>{{load_error}}<br>
          </div>
        <button @click="() => {
          this.load = false;
          this.load_error = '';
          this.load_text = '';
          }"
          class="green_button">Продолжить
        </button>
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
      selGroup: this.$store.state.c.selectGroup,
      selSubject: this.$store.state.c.selectSubject,
      load: false,
      load_error: '',
      load_text: '',
    };
  },
  computed: {
    visitRequest() {
      return `http://kappa.cs.petrsu.ru/~pogudin/tppo/web/predmet/visits/${this.selGroup}/${this.selSubject}`;
    },
  },
  methods: {
    view_attendance() {
      this.load = true;
      this.$store.dispatch('students_request');
      axios.get(this.visitRequest)
        .then((response) => {
          if (response.data.length === 0) {
            this.load_text = 'По вашему запросу ничего не найдено';
          } else if (response.data.length !== 0) {
            this.load_text = 'Запрос выполнен';
            this.$store.commit('import_visits', response.data);
            this.$router.push('/view_attendance');
          }
        })
        .catch((error) => {
          this.load_text = 'Произошла ошибка при загрузке данных';
          this.load_error = error;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
fieldset{
  margin: 0 auto;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 5px rgba(0, 145, 145, 0.774) solid;
  background-color: rgb(150, 150, 150);
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
  margin: auto;
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
