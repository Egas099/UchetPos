<template>
  <div class="content_wrapper">
    <div class="content">
      <div class="head">
        <p class="">
          {{this.$store.state.c.selectSubject}}
        </p>
        <p class="">
          {{this.$store.state.c.selectGroup}}
        </p>
        <div>
          <router-link to="/" id="exit_home" class="green_button">Главная</router-link>
        </div>
      </div>
      <div style="clear: both;"></div>
      <div class="table_wrapper">
        <table id="main_table">
            <thead>
              <tr>
                <td class="fio fix_x fix_y">ФИО</td>
                <td v-for="item in loc_visit" v-bind:key="item.data" class="fix_y">
                  {{item.lesson.data}}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="stud in loc_stud" v-bind:key="stud.id">
                <td class="name fix_x">
                {{edit_name(stud.name)}}
                </td>
                <td v-for="item in loc_visit" v-bind:key="item.data"
                  :class="find_pos(stud.id,item.lesson.visit) ? 'b_green' : 'b_red'">
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loc_visit: this.$store.state.c.visits,
      loc_stud: this.$store.state.c.students,
    };
  },
  methods: {
    edit_name(name) {
      return name.split(' ', 2).join(' ');
    },
    find_pos(id, visit) {
      let pos = false;
      try {
        visit.forEach((element) => {
          if ((element.stud_id === id) && (element.visit === 'yes')) {
            pos = true;
          }
        });
      } catch {
        pos = false;
      }
      return pos;
    },
    view() {
    },
  },
};
</script>

<style lang="scss">
.table_wrapper{
  display: inline-block;
  margin: 0 auto;
}
td.fio{
  z-index: 9999;
  text-align: center;
  background: rgba(0, 150, 150);
}
td.name{
  background: rgb(196, 196, 196);
  min-width: 16vw;
  text-align: left;
}
thead td{
  background: rgba(0, 150, 150);
}
.b_green{
  background: rgba(0, 168, 0, 0.5);
}
.b_red{
  background: rgba(255, 0, 0, 0.5);
}
td{
  padding: 5px;
  border: 1px solid rgb(0, 0, 0);
}
#main_table{
  display: block;
  border-collapse: collapse;
  margin: 0 auto;
  overflow: auto;
  max-height: 75vh;
  max-width: 94vw;
  @media screen and (min-height: 700px) {
    height: 72.5vh;
  }
}
.fix_y{
  position: sticky;
  top: 0;
}
.fix_x{
  position: sticky;
  left: 0;
}
.content{
  display: inline-block;
  max-width: 95%;
  margin: 0 auto;
  background-color: rgba(128, 128, 128, 0.637);
  padding: 0 1vw 1vh 1vw;
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
.head > p{
  font-size: 120%;
  padding: 0 1vh;
  display: block;
  text-align: left;
  float: left;
}
</style>
