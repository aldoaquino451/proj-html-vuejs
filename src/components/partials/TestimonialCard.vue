<script>
export default {
  name: 'TestimonialCard  ',
  props: { testiamonial: Object },
  methods: {
    getImagePath(imagePath) {
      return new URL(imagePath, import.meta.url).href
    },

    imageBackground() {
      
    }
  },
}
</script>


<template>
  <div class="card">
    <p class="text"> {{ testiamonial.text }} </p> 
    <p class="name"> <strong> {{ testiamonial.name }} </strong> </p>
    <p class="company"> {{ testiamonial.company }} </p>
  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.card {
  width: 33%;
  padding: 50px 80px 80px 80px;

  .text {
    margin-bottom: 50px;
  }
  .name {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: $text-bglight-title;
  }
  .company {
    font-size: .9rem;
  }

  &:hover {
    background-image: url('../../assets/img/oliver-ragfelt-488196-2.jpg');
    background-repeat: no-repeat;
    .text {
      color: $text-bgdark-title;
    }
    .company {
      color: $text-bgdark-title;
    }
  }
}
  
</style>