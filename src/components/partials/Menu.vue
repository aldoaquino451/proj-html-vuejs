<script>
export default {
  name: 'Menu',
  props: {
    menu: Array,
  }
}
</script>


<template>
  <div>
    <ul class="menu flex gap-20 uppercase">
    
      <li v-for="(item, index) in menu" :key="index">
        <a :href="'#' + item"> {{ item }} </a>
      </li>

    </ul>
  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

</style>