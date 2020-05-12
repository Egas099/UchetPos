<template>
  <div class="choiceforcheck content">
      <form class="main_form">
        <fieldset>
          <div class="head">
            <span>Группы:</span>
            <input type="button" value="Добавить" class="sbmt"
            v-on:click="() => {this.window_on=!this.window_on}">
          </div>
          <div style="clear: both;"></div>
          <transition-group name="list" tag="p">
              <span
              v-for="(item, index) in groups"
              v-bind:key="item.id" class="list-item"
              >{{item.title}}
              <button v-on:click="$emit(groups.splice(index, 1))" class="krestik">×</button>
              </span>
          </transition-group>
          <select class="inp">
            <option disabled selected label="Выберите предмет"></option>
            <option value="Предметик">Предмет</option>
          </select>
          <input class="inp"  placeholder="Введите дату" type="date">
          <router-link to="/save_attendance" class="sbmt">Отметить посещение</router-link>
          <!-- <input type="submit"  value="Просмотреть посещаемость"> -->
        </fieldset>
      </form>
      <form v-on:submit.prevent="addNewGroup" v-if="window_on" class="form_newgroup">
        <fieldset >
          <input class="inp" v-model="newGroupText" placeholder="Введите номер группы" required>
          <input type="submit" value="Сохранить" class="sbmt savegroup">
        </fieldset>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      window_on: false,
      newGroupText: '',
      groups: [
        {
          title: '1234',
          id: 1,
        },
      ],
    };
  },
  methods: {
    addNewGroup() {
      this.groups.push({
        title: this.newGroupText,
      });
      this.newGroupText = '';
      this.window_on = !this.window_on;
    },
  },
};
</script>

<style scoped lang="scss">
fieldset{
  border: 5px rgba(0, 145, 145, 0.774) solid;
  text-align: start;
  display: inline-flex;
  background-color: rgb(150, 150, 150);
  padding: 1vh 1vw 1vh 1vw;
}
.main_form{
  margin: 10vh auto;
}
.inp{
  width: 100%;
  border: 1px rgb(100, 100, 100) solid;
  padding: 1vh 0;
  margin: 4vh auto;
  font-size: 130%;
  background-color: rgb(196, 196, 196);
}
.sbmt{
  background-color: rgba(0, 145, 145, 0.774);
  margin: 1vh 1vw 0 1vw;
  padding: 1vh 1vw;
  font-size: 100%;
  text-decoration: none;
  color: black;
  text-align: center;
  border: none;
}
// .choiceforcheck li{
//   list-style-type: none;
//   padding: 0.5vh 0.5vw;
//   margin: 1px;
//   background: rgb(196, 196, 196);
// }
// .choiceforcheck ul{
//   display: inline-flex;
//   margin: 0;
//   padding: 0;
// }
.head > input{
  float: right;
}
.head > span{
  margin: 2vh 1vw;
  float: left;
}
.form_newgroup{
  position: fixed;
  top: 30vh;
  left: 35vw;
  right: 35vw;
  width: 30vw;
}
.savegroup{
  margin: auto;
}
.krestik{
  background-color: rgb(196, 196, 196);
  font-size: 150%;
  border: none;
}

.list-item {
  display: inline-block;
  height: 3em;
  // margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
