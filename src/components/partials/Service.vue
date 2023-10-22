<script>

export default {
  nama: 'Service',
  props: {
    service: Object
  }
}
</script>

<template>
  <div class="service flex">

    <div class="flex">
      <i :class="service.icon" class="flex center"></i>
    </div>

    <div class="flex col">
      <h3 class="uppercase"> {{ service.title }} </h3>
      <p> {{ service.text }} </p>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.service {
  color: $text-bglight-title;
  gap: 50px;

  i {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 30px;
    color: white;
    background-color: $bg-red;
  }

  h3 {
    padding: 10px 0 20px;
    font-size: 1.5rem;
  }  
}


</style>