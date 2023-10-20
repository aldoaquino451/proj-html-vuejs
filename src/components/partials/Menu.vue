<script>

export default {
  nama: 'Menu',
  data() {
    return {
      menu: ['home', 'about', 'projects', 'services', 'blog', 'contact']
    }
  },
}
</script>

<template>
  <div>
    <ul class="menu">
      <li
        v-for="(item, index) in menu"
        :key="index">
        <a :href="'#' + item">
          {{ item }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/utilities' as *;
@use '../../scss/partials/vars' as *;

.menu {
  @include flex-row;
  gap: 20px;

}
</style>