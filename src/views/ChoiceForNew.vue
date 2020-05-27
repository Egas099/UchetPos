<template>
  <div class="choicefornew content_wrapper">
    <form @submit.prevent="save_attendance">
      <fieldset id="main_fieldset">
        <div class="head">
          <span>Группы:</span>
          <input type="button" value="Добавить" class="green_button"
          v-on:click="() => {window_on=!window_on}">
        </div>
        <div style="clear: both;"></div>
        <transition-group name="list" tag="p">
          <span
          v-for="(group, index) in this.$store.state.n.groups"
          v-bind:key="group.num" class='list-item'>
          {{group.num}}
          <button v-on:click.prevent="remoteGroup(index)" class="krestik">×</button>
          </span>
        </transition-group>

        <input type="list" class="inp" list="pred"  placeholder="Выберите предмет"
        v-model="selSub" required>
        <datalist id="pred">
          <option v-for="sub in this.$store.state.subjects"
            v-bind:key="sub.name">{{sub.name}}</option>
        </datalist>

        <input class="inp" placeholder="Введите дату" type="date" v-model="selDate" required>
        <button type="submit" class="green_button">Отметить посещение</button>
        <!-- <button class="green_button" @click.prevent="created_less">Создать</button> -->
      </fieldset>
    </form>

    <transition name="list">
      <form v-on:submit.prevent="addNewGroup" v-if="window_on" class="form_new_group">
        <div>
          <fieldset class="list">
            <input class="inp" v-model="newGroupText"
            placeholder="Введите номер группы" required>
            <input type="submit" value="Сохранить" id="button_save_group" class="green_button">
          </fieldset>
        </div>
      </form>
    </transition>
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
// /* eslint-disable */
import axios from 'axios';

export default {
  /* eslint-disable */
  data() {
    return {
      load: false,
      load_text: '',
      load_error: '',
      window_on: false,
      newGroupText: '',
      groups: [],
      selSub: this.$store.state.n.selectSubject,
      selDate: this.$store.state.n.selectDate,
      studsInLess: [],
    };
  },
  mounted() {
    if (!this.$store.state.a.prepod) {
      this.$router.push('/');
    }
  },

  methods: {
    created_less() {
      // let obj = new Object();
      // obj = {
      //   stud_id: 'Ivanov',
      //   name: 'Иванов',
      //   itog: '',
      //   visit: 'yes',
      //   les_id: 55,
      // };
      // this.studsInLess.push(obj);
      // axios.post('http://kappa.cs.petrsu.ru/~pogudin/tppo/web//visit/create', this.studsInLess)
      //   .then((response) => (console.log(response)))
      //   .catch((error) => (console.log(error)));

    },
    save_attendance() {
      this.$store.commit('clear_groups');
      this.$store.commit('select_sub_and_date', {
        selDate: this.selDate,
        selSub: this.selSub,
      });
      let textRequest = '';
      this.load = true;
      // console.log('Просим группы');
      if (this.$store.state.n.groups.length === 0) {
        this.load_text = 'Вы не выбрали ни одной группы';
      }
      if (this.$store.state.n.groups.length > 1) {
        textRequest += 'http://kappa.cs.petrsu.ru/~pogudin/tppo/web/group?';
        this.$store.state.n.groups.forEach((group) => {
          textRequest += `list[]=${group.num}&`;
        });
        textRequest = textRequest.substring(0, textRequest.length - 1);
      } else {
        textRequest += 'http://kappa.cs.petrsu.ru/~pogudin/tppo/web/group/';
        textRequest += `${this.$store.state.n.groups[0].num}`;
      }
      axios.get(`${textRequest}`)
        .then((response) => {
          this.$store.commit('add_groups', response.data);
          let dataLess = new Object();
          dataLess = {
            groups: '',
            predmet: this.$store.state.n.selectSubject,
            data: this.$store.state.n.selectDate,
          };
          this.$store.state.n.groups_imp.forEach(group => {
            if (dataLess.groups !== '') {
              dataLess.groups += ' ';
            }
            dataLess.groups += `${group.num}`
          });
          dataLess = JSON.stringify(dataLess);
          console.log(dataLess);
          axios.post('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/lesson/create', dataLess)
            .then((response) => {
              this.$store.commit('change_less_id', response.data);
              this.load_text = 'Запрос выполнен';
              this.$router.push('/save_attendance');
            })
            .catch((error) => {
              console.log(error);
              this.load_error += error;
              this.load_text = 'Ошибка при создании занятия: ';
            });
        })
        .catch((error) => {
          console.log(error);
          this.load_error += error;
          this.load_text = 'Ошибка при запросе групп: ';
        });
    },
    addNewGroup() {
      // console.log('Добавляем группу');
      this.$store.commit('new_group', this.newGroupText);
      this.newGroupText = '';
      this.window_on = !this.window_on;
    },
    remoteGroup(index) {
      this.$store.commit('remote_group', index);
    },
  },
};
</script>

<style scoped lang="scss">
.choicefornew  fieldset{
  border: 5px rgba(0, 145, 145, 0.774) solid;
  text-align: start;
  background-color: rgb(150, 150, 150);
  padding: 1vh 1vw 1vh 1vw;
  transition: all 0.3s;
  // min-width: 400px;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  // justify-content: space-around;
}
#main_fieldset{
  margin: 15vh auto;
  width: 30%;
  margin: 10vh auto;
  @media screen and (max-width: 640px) {
    width: calc(100vw - 50px);
  }
}
.form_new_group{
  position: fixed;
  top: 30vh;
  left:0;
  right:0;
  transition: all 0.3s;
}
.inp{
  display: block;
  width: 100%;
  border: 1px rgb(100, 100, 100) solid;
  padding: 1vh 0;
  margin: 4vh 0;
  font-size: 130%;
  background-color: rgb(196, 196, 196);
}
.choicefornew .green_button{
  margin: auto;
  padding: 1vh 1vw;
  font-size: 100%;
  text-align: center;
}
.head > input{
  float: right;
}
.head > span{
  margin: 2vh 1vw;
  float: left;
}
#button_save_group{
  margin: auto;
}
.krestik{
  background-color: inherit;
  font-size: 150%;
  border: none;
}

.choicefornew p{
  margin: 0;
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
