<template>
  <div class="check_table content">
    <h1>This is a table page</h1>
    <table cellspacing="2">
      <thead>
        <tr>
          <td>{{title[0]}}</td>
          <td>{{title[1]}}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in students" v-bind:key="item.id">
          <td>{{item.student[0]}}</td>
          <td>{{item.student[1]}}</td>
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
        { student: ['Мещанинов Константин', '22304'] },
        { student: ['Дмитриев Егор', '22304'] },
        { student: ['Етчуев Павел', '22304'] },
        { student: ['Бароев Семён', '22304'] },
        { student: ['Минеев Иван', '22304'] },
        { student: ['Погудин Даниил', '22304'] },
      ],
    };
  },
};
</script>

<style lang="scss">
table{
  border: black 1px solid;
  margin: 0 auto 1em auto;
}
td{
  background: rgba(139, 184, 154, 0.733);
  padding: 1em;
}
h1{
  padding: 0 auto;
}
</style>
