<script>
export default {
  nama: 'TitleSection',
  props: { sectionObj: Object }
}
</script>


<template>

  <div class="title-section">

    <h2 v-if="sectionObj.title"  class="uppercase flex align-end gap-20"> {{ sectionObj.title }} </h2>

    <h4 
      class="uppercase" 
      v-if="sectionObj.subtitle" v-html="sectionObj.subtitle"></h4>

    <p v-if="sectionObj.text" > {{ sectionObj.text }} </p>

  </div>

</template>


<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.title-section {
  h2 {
    margin-bottom: 30px;
    font-size: 1.1rem;
    color: $text-bglight-subtitle2;
    
    &:before,
    &::after {
      content: '';
      width: 50px;
      height: 3px;
      margin-bottom: 4px;
      border-radius: 3px;
      background-color: $bg-green;
    }
  }
  
  h4 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
}


</style>