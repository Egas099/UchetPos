<template>
  <div class="choiceforcheck content">
      <form>
        <fieldset>
          <select class="inp" required>
            <option disabled selected label="Выберите предмет"></option>
            <option value="Предметик">Предметик</option>
            <option value="Предметушка">Предметушка</option>
            <option value="Предмет">Предмет</option>
            <option value="Предметище">Предметище</option>
          </select>
          <input class="inp" type="text" placeholder="Введите номер группы" required>
          <router-link to="/view_attendance" class="sbmt">Просмотр посещаемости</router-link>
          <!-- <input type="submit"  value="Просмотреть посещаемость"> -->
        </fieldset>
      </form>
  </div>
</template>

<style scoped lang="scss">
fieldset{
  border: 5px rgba(0, 145, 145, 0.774) solid;
  display: inline-flex;
  background-color: rgb(150, 150, 150);
  padding: 5vh 1vh;
}
form{
  margin: 10vh auto;
}
.inp{
  width: 100%;
  border: none;
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
}
</style>
