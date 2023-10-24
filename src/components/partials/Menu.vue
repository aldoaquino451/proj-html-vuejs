<script>
export default {
  name: 'Menu',
  data() {
    return {
      menu: [ 'home', 'services', 'about', 'projects', 'blog', 'contact' ]
    }
  },
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
li {
  a {
    color: $text-bglight-subtitle2;
  }
  &:hover {
    border-top-color: $bg-white;
    a {
      color: $text-bgdark-title;
    }
  }
}
</style>