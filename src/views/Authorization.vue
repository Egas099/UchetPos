<template>
  <div class="authorization content">
    <div class="">
      <form>
        <fieldset>
          <input class="inp" type="text" placeholder="Логин" name="" id="">
          <input class="inp" type="password" placeholder="Пароль" name="" id="">
          <input type="button" value="Не помню пароль">
          <input type="submit"   name="" id="" value="Вход">
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
fieldset{
  border: 5px rgba(0, 145, 145, 0.774) solid;
  text-align: start;
  display: inline-flex;
  background-color: rgb(150, 150, 150);
}
form{
  margin: 1em 0 10em 0;
}
.inp{
  border: none;
  padding: 0 1ch;
  margin: 1em 0 1ch 0;
  font-size: 130%;
  background-color: rgb(196, 196, 196);
}
[type="submit"]{
  background-color: rgba(0, 145, 145, 0.774);
  margin: 1ch auto 0 auto;
  padding: 2px 1em;
  border: none;
  font-size: 130%;
}
[type="button"]{
  border: none;
  background-color: rgb(150, 150, 150);
  margin: 0 auto;
}
span{
  display: block;
  text-align: center;
  font-size: 80%;
}
</style>
