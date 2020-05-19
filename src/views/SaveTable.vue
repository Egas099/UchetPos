<template>
  <div class="save_table content">
    <div class="head">
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
            v-for="item in this.$store.state.n.groups"
            v-bind:key="item.title" class="list-item">
            {{item.title}}
            </span>
          </transition-group>
      </div>
      <div>
        <router-link to="/" id="exit_home" class="green_button">Сохранить</router-link>
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
        <tbody>
          <tr v-for="item in students" v-bind:key="item.id">
            <td class="grey">{{item.student[0]}}</td>
            <td>+</td>
            <td class="grey full">
              <input type="text" class="zam">
            </td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ['ФИО', 'Группа'],
      students: [
        { student: ['Студентик'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студеняка'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студентищееееееееее ееееееееееееееееее'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студенёк'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студентъ'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студень'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
      ],
      data: ['20.03.2020',
        '25.03.20',
        '31.03.20',
        '10.04.20',
        '16.04.20',
        '22.04.20',
        '12.05.20',
        '21.05.20',
        '01.06.20',
        '23.06.20',
        '23.06.20',
        '23.06.20',
        '23.06.20',
        '23.06.20',
        '23.06.20',
        '23.06.20',
      ],
    };
  },
};
</script>

<style lang="scss">
td.fio{
  z-index:9999;
  text-align: center;
  background: rgba(0, 150, 150);
}
td.grey{
  background: rgb(196, 196, 196);
}
thead td{
  background: rgba(0, 150, 150);
}
tbody td{
  background: rgba(0, 255, 0, 0.7);
  min-width: 30px;
}
td{
  padding: 5px;
  border: 1px solid rgb(0, 0, 0);
}
table{
  display: block;
  color: black;
  border-collapse: collapse;
  margin: 0 auto 0 auto;
  overflow: auto;
  height: 77vh;
}
.full{
  width: 100%;
}
.fix_y{
  position: sticky;
  top: 0;
}
.save_table{
  width: 95%;
  margin: 0 auto 1vh auto;
  background-color: rgba(128, 128, 128, 0.637);
  padding: 1vh 1vw 1vh 1vw;
  border: 5px rgb(0, 145, 145) solid;
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
.zam{
  border: none;
  min-height: 20px;
  width: 99%;
  background: rgb(196, 196, 196);
}
.list-item {
  background-color: rgb(196, 196, 196);
  display: inline-block;
  padding: 0 0.5vw;
  margin: 0 1px;
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
