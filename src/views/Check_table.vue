<template>
  <div class="check_table content">
    <table id="first_table">
        <thead class="w">
          <tr class="w">
            <td class="fio w">ФИО</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in students" v-bind:key="item.id">
            <td class="name">{{item.student[0]}}</td>
          </tr>
        </tbody>
    </table>
    <table id="second_table">
        <thead>
          <tr>
            <td v-for="item in data" v-bind:key="item.id">
              {{item}}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in students" v-bind:key="item.id">
            <td v-for="item in data" v-bind:key="item.id">
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
        { student: ['Длинное Имя'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
        { student: ['Студент'] },
      ],
      data: ['20.03.2020',
        '25.03.2020',
        '31.03.2020',
        '10.04.2020',
        '16.04.2020',
        '22.04.2020',
        '12.05.2020',
        '21.05.2020',
        '01.06.2020',
        '23.06.2020',
        '23.06.2020',
        '23.06.2020',
        '23.06.2020',
        '23.06.2020',
        '23.06.2020',
        '23.06.2020',
      ],
    };
  },
};
</script>

<style lang="scss">
td.fio{
  text-align: center;
  background: rgba(0, 150, 150);
  padding: 1ch 0;
}
td.name{
  background-color: rgb(196, 196, 196);
  padding: 1ch 0;
}
thead td{
    background: rgba(0, 150, 150);
    padding: 1ch;
}
tbody td{
    padding: 1ch;
    background: rgb(0, 255, 0);
}
h1{
  padding: 0 auto;
}
table{
  color: black;
  border-collapse: collapse;
}
#second_table{
  overflow: auto;
}
#second_table{
  display: block;
  float: right;
  width: 80%;
}
#first_table{
   display: block;
  float: left;
  width: 20%;
}
.w{
  width: 1000px;
}
td{
  border: 1px solid rgb(0, 0, 0);
}
.check_table{
  overflow: visible;
}
</style>
