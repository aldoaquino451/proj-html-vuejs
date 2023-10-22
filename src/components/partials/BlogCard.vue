<script>
export default {
  name: 'BlogCard',
  props: { blogCardObj: Object },
  
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
      :src="getImagePath(`../../assets/${blogCardObj.image}`)" 
      alt="progetto">
    <div class="description">
      <div class="date flex gap-20">
        <span> {{ blogCardObj.date[0] }} </span>
        <span> {{ blogCardObj.date[1] }} </span>
      </div>
      <p class="title"><strong> {{ blogCardObj.title }} </strong></p>
      <p> {{ blogCardObj.text }} </p>
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
    top: 62%;
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