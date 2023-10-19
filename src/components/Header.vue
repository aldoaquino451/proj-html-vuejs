<script>
import Menu from "./partials/Menu.vue";
import { store } from "../data/store";


export default {
  name: 'Header',
  components: {
    Menu,
  },
  data() {
    return {
      store
    }
  },

}
</script>

<template>
  <div class="header">

    <div class="logo">
      <img src="../assets/img/logotype.png" alt="">
    </div>

    <Menu :sections="store.sections"/>

  </div>
</template>

<style lang="scss">

@use '../scss/partials/utilities' as *;
@use '../scss/partials/vars' as *;

.header {
  @include flex-between;
  @include container;
  position: absolute;
  z-index: 999;
  height: 80px;
  right: 0;
  left: 0;
  .logo {
    height: 50px;
    display: flex;
    align-items: end;
    img {
      height: 25px
    }
  }
  .menu {
    li {
      height: 50px;
      display: flex;
      align-items: end;
      border-top: 2px solid rgba(255, 255, 255, 0);
      a {
        color: $bg-arrows;
      }
      
      &:hover {
        border-top: 2px solid rgba(255, 255, 255, 1);
        a {
          color: white;
        }
      }
    }
  }

}

</style>