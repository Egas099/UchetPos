<template>
  <footer>
      <div class="copyright">
        <span>Copyright © 2020 UchetPos</span>
      </div>
  </footer>
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
  height: 4vh;
  min-height: 20px;
  background-color: rgb(150, 150, 150);
  color: rgba(255, 255, 255, 0.781);
}
.copyright{
  padding: .5vh;
}
</style>
