<script>
export default {
  name: 'BlogCard',
  props: {
    image: String
  },
  methods: {
    getImagePath(imagePath) {
      return new URL(imagePath, import.meta.url).href
    }
  }
}
</script>


<template>
  <div class="card">
    <!-- <img v-for="image in images" :src="getImagePath(image)" alt="progetto"> -->
    <img 
      :src="getImagePath(`../../assets/${image}`)" 
      alt="progetto">
    <div class="description">
      <div class="date flex gap-20">
        <span>july 4, 2019</span>
        <span>by paul</span>
      </div>
      <p class="title"><strong>Canadian Consulting Film acquired by UK Giant</strong></p>
      <p>When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.card {
  position: relative;
  img {
    width: 100%;
  }
  .description {
    padding: 50px 150px 50px 90px;
    position: absolute;
    bottom: -100px;
    right: 0;
    width: 80%;
    background-color: $bg-white;
    .date {
      color: $bg-red;
      margin-bottom: 20px;
      font-size: 1.1rem;
    }
    .title {
      margin-bottom: 30px;
      font-size: 1.4rem;
      color: $text-bglight-title;
    }
  }
}
  
</style>