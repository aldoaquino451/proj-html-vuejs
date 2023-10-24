<script>
export default {
  name: 'Socials',

  data() {
    return {
      socials: [
        {
          social: 'fa-brands fa-instagram',
          link: '#'
        },
        {
          social: 'fa-brands fa-linkedin-in',
          link: '#'
        },
        {
          social: 'fa-brands fa-facebook-f',
          link: '#'
        },
        {
          social: 'fa-brands fa-twitter',
          link: '#'
        },
      ]
    }
  },
}
</script>


<template>
  <div>
    <ul class="socials flex">
      <li v-for="(item, index) in socials" :key="index"> 
        <a href="#"><i :class="item.social"></i></a>
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