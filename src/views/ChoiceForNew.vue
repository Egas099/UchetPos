
<template>
  <div class="choicefornew content">
      <form >
        <fieldset class="main_fieldset">
          <div class="head">
            <span>Группы:</span>
            <input type="button" value="Добавить" class="green_button"
            v-on:click="() => {window_on=!window_on}">
          </div>
          <div style="clear: both;"></div>
          <transition-group name="list" tag="p">
            <span
            v-for="(item, index) in this.$store.state.n.groups"
            v-bind:key="item.title" class="list-item">
            {{item.title}}
            <button v-on:click="remoteGroup(index)" class="krestik">×</button>
            </span>
          </transition-group>

          <input type="list" class="inp" list="pred"  placeholder="Выберите предмет"
          v-model="selSub">
          <datalist id="pred">
            <option v-for="sub in this.$store.state.subjects"
              v-bind:key="sub.name">{{sub.name}}</option>
          </datalist>

          <input class="inp" placeholder="Введите дату" type="date" v-model="selDate">
          <button class="green_button" @click="exportData()">Отметить посещение</button>
        </fieldset>
      </form>
      <transition name="list">
      <form v-on:submit.prevent="addNewGroup"
      v-if="window_on"
       class="form_new_group">
        <div>
          <fieldset class="list">
            <input class="inp" v-model="newGroupText" autofocus
            placeholder="Введите номер группы" required>
            <input type="submit" value="Сохранить" id="button_save_group" class="green_button">
            <input type="button" value="Загрузить группы"
            id="button_save_group" class="green_button"
            @click="qwerty">
          </fieldset>
        </div>
      </form>
      </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      window_on: false,
      newGroupText: '',
      groups: [
      ],
      selSub: this.$store.state.n.selectSubject,
      selDate: this.$store.state.n.selectDate,
    };
  },
  methods: {
    addNewGroup() {
      this.$store.commit('new_group', this.newGroupText);
      this.newGroupText = '';
      this.window_on = !this.window_on;
    },
    remoteGroup(index) {
      this.$store.commit('remote_group', index);
    },
    exportData() {
      this.$store.commit('select_sub_and_date', {
        selDate: this.selDate,
        selSub: this.selSub,
      });
      this.$router.push('/save_attendance');
    },
    // none() {
    //   this.$store.dispatch('group_request');
    // },
  },
};
</script>

<style scoped lang="scss">
.choicefornew  fieldset{
  border: 5px rgba(0, 145, 145, 0.774) solid;
  text-align: start;
  display: inline-flex;
  background-color: rgb(150, 150, 150);
  padding: 1vh 1vw 1vh 1vw;
  transition: all 0.3s;
  min-width: 400px;
}
.main_fieldset{
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
.form_new_group fieldset
{
  margin: auto;
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
  background-color: rgb(196, 196, 196);
  font-size: 150%;
  border: none;
}
.list-enter-active, .list-leave-active {
  transition: opacity .2s;
}
.list-enter, .list-leave-to {
  opacity: 0;
}
.list-item {
  background-color: rgb(196, 196, 196);
  display: inline-block;
  padding: 0.5vh 0.5vw;
  margin: 1px;
}
.choicefornew p{
  margin: 0;
}
.green_button{
  background-color: rgba(0, 150, 150);
  &:hover {
  background-color: rgb(0, 170, 170);
  transition: 0.3s;
  }
  border: none;
}
</style>
