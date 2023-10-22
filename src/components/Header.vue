<script>
import { store } from "../data/store";
import Menu from "./partials/Menu.vue";

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

  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    }
  },
}
</script>


<template>

  <div class="header-content ">
    <div class="container flex justify-between align-end">

      <div class="logo">
        <img :src="getImagePath(`../assets/${store.logo.header}`)" alt="logo">
      </div>

      <Menu :menu="store.menu"/>

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

  .logo img {
    height: 20px;
  }
  ul {
    gap: 40px;
    a {
      color: $text-bglight-subtitle2;
    }
    li {
      padding-top: 35px;
      border-top: 2px solid rgba(255, 255, 255, 0);
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