<script>
export default {
  name: 'ProjectCard',
  props: { project: Object },

  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
}
</script>


<template>
  <div class="card" >

    <img
      :src="getImagePath(`../../assets/img/${project.image}`)"
      alt="image">

    <div class="card-description flex align-end">
      <div class="flex w-100 justify-between">
        <div class="text flex col">
          <span class="name"><strong> {{ project.name }} </strong></span>
          <span class="category"> {{ project.category }} </span>
        </div>
        <button class="plus-btn flex center">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>

  </div>
</template>


<style lang="scss">
@use '../../scss/partials/vars' as *;

.card {
  width: 100%;
  position: relative;

  img {
    width: 100%;
    object-fit: cover ;
    display: block;
  }

  .card-description {
    visibility: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 20px;
    background-color: hsla(352, 94%, 54%, 0.7);
    .text {
      .name {
        margin-bottom: 5px;
        font-size: 1.3rem;
      }
      .category {
        font-size: 1.1rem;
        color: $text-bglight-subtitle2;
      }
    }
    .plus-btn {
      width: 60px;
      height: 60px;
      border: none;
      font-size: 1.3rem;
      background-color: $bg-blue;
      color: $text-bgdark-title;
      cursor: pointer;
    }
  }

  &:hover .card-description{
    visibility: visible;
  }
}
</style>