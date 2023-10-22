<script>
export default {
  name: 'Logo',
  props: {
    position: String
  },  
  
  data() {
    return {
      logo: {
        header: 'logotype.png',
        footer: 'logotype-2-139x23.png',
      },
    }
  },
  methods: { 
    getImagePath(imgPath) {
      console.log(this.position);
      return new URL(imgPath, import.meta.url).href;
    }
  },
}
</script>


<template>

  <div class="logo" >
    <img
      v-if="position==='header'"
      :src="getImagePath(`../../assets/img/${logo[position]}`)"
      alt="logo">
    <img
      v-if="position==='footer'"
      :src="getImagePath(`../../assets/img/${logo[position]}`)"
      alt="logo">
  </div>

</template>


<style lang="scss">
@use '../../scss/partials/vars' as *;


.logo {
  img {
    height: 20px;
  }
}
</style>