<script>
export default {
  name: 'Socials',

  data() {
    return {
      socials: [
        'fa-brands fa-instagram',
        'fa-brands fa-linkedin-in',
        'fa-brands fa-facebook-f',
        'fa-brands fa-twitter'
        ]
    }
  },
}
</script>


<template>
  <div>
    <ul class="socials flex">
      <li v-for="(item, index) in socials" :key="index"> 
          <a href="#"><i :class="item"></i></a>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.socials {
  gap: 20px;
  a {
    font-size: 1.2rem;
    color: $text-bgdark-title;
  }
  li:hover {
    scale: 1.2;
  }
}
  
</style>