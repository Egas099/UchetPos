<template>
  <div class="content_wrapper">
    <div class="save_table">
      <div class="head">
        <div>
          <button id="exit_home" class="green_button"
          @click.prevent="send_attendance">Сохранить</button>
          <router-link to="/" id="exit_home" class="green_button">Главная</router-link>
        </div>
        <div class="left">
          {{this.$store.state.n.selectSubject}}
        </div>
        <div class="left">
          {{this.$store.state.n.selectDate}}
        </div>
        <div class="left">
          Группы:
          <transition-group name="list" tag="span">
              <span
                v-for="item in this.$store.state.n.groups_imp"
                v-bind:key="item.num" class="list-item">
                {{item.num}}
              </span>
            </transition-group>
        </div>
      </div>
      <div style="clear: both;"></div>
      <table>
          <thead>
            <tr>
              <td class="fio fix_y">ФИО</td>
              <td class="fix_y">&#177;</td>
              <td class="fix_y">Заметки</td>
            </tr>
          </thead>
          <tbody v-for="lesson in this.lessons" v-bind:key="lesson.num">
            <td colspan="3" class="group_name">{{lesson.group}}</td>
            <tr v-for="stud in lesson.students" v-bind:key="stud.id">
              <td class="grey stud_name">{{edit_name(stud.name)}}</td>
              <td
              :class="stud.visit==='no' ? 'b_red' : 'b_green'"
              @click="stud.visit==='no' ? stud.visit = 'yes' : stud.visit = 'no'"></td>
              <td class="grey full">
                <input type="text" class="itog" v-model="stud.itog">
              </td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
// axios.post(url+`/visit/create`, this.studsInLess)
export default {
  data() {
    return {
      lessons: [],
      lesson_id: 0,
    };
  },
  methods: {
    edit_name(name) {
      return name.split(' ', 2).join(' ');
    },
    send_attendance() {
      let visits = [];
      this.lessons.forEach((lesson) => {
        lesson.students.forEach((vis) => {
          visits.push(vis);
        });
      });
      let obj = [visits];
      // console.log(obj);
      axios.post('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/visit/add', obj)
        .then((response) => (this.$router.push('/')))
        .catch((error) => (console.log(error)));
    },
  },
  created() {
    // console.log(response.data.id);
    this.$store.state.n.groups_imp.forEach((group) => {
      const lesson = {
        group: group.num,
        students: [],
      };
      group.student.forEach((student) => {
        const stud = {
          stud_id: student.id,
          name: student.name,
          itog: '',
          visit: 'no',
          les_id: this.$store.state.n.lesson_id,
        };
        lesson.students.push(stud);
      });
      this.lessons.push(lesson);
    });
    console.log(this.lessons);
    if (this.$store.state.n.groups_imp.length === 0) {
      this.$router.push('/selectionnew');
    }
  },
};
</script>

<style lang="scss">
.group_name{
  background-color: rgba(128, 128, 128, 0.171);
}
td.fio{
  z-index:9999;
  text-align: center;
}
td.grey{
  background: rgb(196, 196, 196);
}
thead td{
  background: rgba(0, 150, 150);
}
td{
  padding: 5px;
  border: 1px solid rgb(0, 0, 0);
}
table{
  height: 70vh;
  display: block;
  color: black;
  border-collapse: collapse;
  margin: 0 auto 0 auto;
  overflow: auto;
  @media screen and (min-height: 700px) {
    height: 70vh;
  }
}
.save_table{
  width: 95%;
  margin: 0 auto 1vh auto;
  background-color: rgba(128, 128, 128, 0.637);
  padding: 1vh 1vw 1vh 1vw;
  border: 5px rgb(0, 145, 145) solid;
  @media screen and (min-height: 700px) {
    height: 81vh;
  }
}
.full{
  width: 100%;
}
.fix_y{
  position: sticky;
  top: 0;
}
.stud_name{
  text-align: start;
  padding: 0 0 0 1vw;
  width: 20%;
  @media screen and (max-width: 700px) {
    width: 50vw;
  }
}
#exit_home{
  font-size: 120%;
  float: right;
  padding: 1vh;
  margin: 1vh auto;
  text-decoration: none;
}
.left{
  font-size: 120%;
  padding: 2vh 2vw;
  float: left;
}
.head{
  min-height: 7vh;
  color: black;
}
.itog{
  border: none;
  min-height: 20px;
  width: 99%;
  background: rgb(196, 196, 196);
  &:hover {
    // transition: .1s;
    background: rgb(200, 200, 200);
  }
}
.list-item {
  background-color: rgb(196, 196, 196);
  display: inline-block;
  padding: 0 0.5vw;
  margin: 0 1px;
}
.b_green{
  background: rgba(0, 170, 0, 0.5);
  &::after{
    content: '+';
  }
  &:hover {
    background-color: rgba(0, 255, 0, 0.5);
    transition: .1s;
  }
  min-width: 40px;
}
.b_red{
  background: rgba(168, 0, 0, 0.5);
  &::after{
    content: '-';
  }
  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
    transition: .1s;
  }
  min-width: 40px;
}
</style>
