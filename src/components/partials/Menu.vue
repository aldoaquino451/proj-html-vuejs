<script>

export default {
  nama: 'Menu',
  props: {
    sections: Object,
  }
}
</script>

<template>
  <div>
    <ul class="menu">
      <li
        v-for="(section, index) in sections"
        :key="index">
        <a href="#">
          {{ section.title }}
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