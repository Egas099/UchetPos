<template>
  <transition name="footer">
    <footer>
        <div class="copyright">
          <span>Copyright © 2020 UchetPos</span>
        </div>
    </footer>
  </transition>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  },
};
</script>

<style scoped lang="scss">
footer{
  margin: -5vh 0;
  height: 5vh;
  background-color: rgb(150, 150, 150);
  color: rgba(255, 255, 255, 0.781);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-height: 700px) {
    display: none;
  }
}
.list-enter-active, .list-leave-active {
  transition: opacity 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
}
</style>
