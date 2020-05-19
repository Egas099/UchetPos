<template>
  <div class="check_table content">
    <div class="head">
      <div class="left">
        {{this.$store.state.c.selectSubject}}
      </div>
      <div class="left">
        {{this.$store.state.c.selectGroup}}
      </div>
      <div>
        <router-link to="/" id="exit_home" class="green_button">Главная</router-link>
      </div>
    </div>
    <div style="clear: both;"></div>
    <table>
        <thead>
          <tr>
            <td class="fio fix_x fix_y">ФИО</td>
            <td v-for="item in data" v-bind:key="item.id" class="fix_y">
              {{item}}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in students" v-bind:key="item.id">
            <td class="name fix_x">{{item.student[0]}}</td>
            <td v-for="item in data" v-bind:key="item.id" class="over">
              +
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
        { student: ['Студентищеееееееееее еееееееееееееееееееееееее'] },
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
td.name{
  background: rgb(196, 196, 196);
}
thead td{
  background: rgba(0, 150, 150);
}
tbody td{
  background: rgba(0, 255, 0, 0.7);
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
  height: 75vh;
}
.fix_y{
  position: sticky;
  top: 0;
}
.fix_x{
  position: sticky;
  left: 0;
}
.check_table{
  width: 90%;
  margin: 0 auto;
  background-color: rgba(128, 128, 128, 0.637);
  padding: 1% 1%;
  border: 5px rgb(0, 145, 145) solid;
}
#exit_home{
  font-size: 120%;
  float: right;
  padding: 1vh;
  margin: 1vh auto;
}
.left{
  font-size: 120%;
  padding: 2vh 2vw;
  float: left;
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
