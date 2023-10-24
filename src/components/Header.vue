<script>
import Menu from "./partials/Menu.vue";
import Logo from "./partials/Logo.vue";
import scroll from '../data/scroll'

export default {
  name: 'Header',
  components: { Menu, Logo },
  mixins: [scroll('position')],
  data() {
    return {
      active: false
    }
  }, 
  computed: {
    valueOpacity() {
      let value = this.position[1] / 500
      return value;
    }
  }
}
</script>


<template>

  <div  
    class="header-content" 
    :style="`background-color: rgba(38, 37, 75, ${valueOpacity} )`" >
    <div class="container flex justify-between align-end">

      <Logo position='header' />
      <Menu />
    </div>
      <p> {{ position[1] }}</p>
  </div>

</template>


<style lang="scss">
@use '../scss/partials/vars' as *;

.header-content {
  height: 70px;
  width: 100%;
  position: fixed;
  z-index: 999;
  // box-shadow: 0px -6px 10px 3px rgba(0, 0, 0,   0.5);
  &.active {
    background-color: rgb(38, 37, 75);
    // background-color: rgba(82, 123, 235, 0.9);
  }
  .menu {
    gap: 40px;
    li {
      padding-top: 30px;
      border-top: 2px solid rgba(255, 255, 255, 0);
      &:hover {
        border-top: 2px solid rgba(255, 255, 255, 1);
      }
    }
  }
}

</style>