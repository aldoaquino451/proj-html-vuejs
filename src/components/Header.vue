<script>
import { store } from "../data/store"

export default {
  name: 'Header',
  components: {
    // NewComponent
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
    <!-- <NewComponent /> -->
    <div class="logo">
      <img src="../assets/img/logotype.png" alt="">
    </div>
    <ul class="menu">
      <li
        v-for="(section, index) in store.sections"
        :key="index">
        <a href="#">
          {{ section.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

@use '../scss/partials/utilities' as *;

.header {
  @include flex-between;
  @include container-xl;
  position: absolute;
  right: 0;
  left: 0;
  align-items: end;
  padding-bottom: 30px;
  .logo {
    img {
      height: 25px
    }
  }
  .menu {
    @include flex-row;
    gap: 20px;
    li {
      padding-top: 30px;
      border-top: 2px solid rgba(0, 0, 0, 0);
      &:hover {
        border-top: 2px solid rgba(0, 0, 0, 1);
      }
    }
  }
}

</style>