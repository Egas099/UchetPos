<template>
  <div class="authorization content">
    <h1>This is an authorization page</h1>
    <div class="">
      <form>
        <fieldset>
          <legend>Авторизация</legend>
          <label for="">Логин:</label>
          <input type="text" name="" id="">
          <label for="">Пароль:</label>
          <input type="password" name="" id="">
          <input type="submit"   name="" id="" value="Отправить">
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
fieldset{
  text-align: start;
  display: inline-flex;
}
label{
  padding: 1ch;
}
legend{
  text-align: center;
}
form{
  margin: 1em 0 10em 0;
}
[type="submit"]{
  width: 100%;
  margin: 1em 0 0 0 ;
}
</style>
