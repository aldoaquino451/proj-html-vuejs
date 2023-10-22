<script>
import { store } from "../data/store";
import Menu from "./partials/Menu.vue";
import Logo from "./partials/Logo.vue";

export default {
  name: 'Header',
  components: { Menu, Logo },

  data() {
    return {
      store
    } 
  },
}
</script>


<template>

  <div class="header-content ">
    <div class="container flex justify-between align-end">

      <Logo position='header' />
      <Menu />

    </div>
  </div>

</template>


<style lang="scss">
@use '../scss/partials/vars' as *;

.header-content {
  height: 80px;
  width: 100%;
  position: absolute;
  z-index: 999;

  .menu {
    gap: 40px;
    li {
      padding-top: 35px;
      border-top: 2px solid rgba(255, 255, 255, 0);
      &:hover {
        border-top: 2px solid rgba(255, 255, 255, 1);
      }
    }
  }
}

</style>