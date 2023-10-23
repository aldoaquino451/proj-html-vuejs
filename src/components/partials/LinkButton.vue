<script>
export default {
  nama: 'LinkButton',
  props: { textButton: String, size: String, color: String },
}
</script>


<template>
  <div>
    <a
      href="#"
      class="btn flex uppercase"
      :class="color, size">
      {{ textButton }}
    </a>
  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.btn {
  padding: 23px 0;
  width: fit-content;
  &.big {
    padding-left: 58px;
    padding-right: 58px;
  }
  &.small {
    padding-left: 48px;
    padding-right: 48px;
  }
  &.green {
    color: $bg-blue;
    background-color: $bg-green;
    &:hover {
      background-color: $bg-red;
      color: $text-bgdark-title;
    }
  }
  &.red {
    background-color: $bg-red;  
    color: $text-bgdark-title;
    &:hover {
      background-color: $bg-white;
      color: $bg-blue;
    }
  }
  &.blue {
    background-color: $bg-blue;
    color: $text-bgdark-title;
    &:hover {
      background-color: $bg-green;
      color: $bg-blue;
    }
  }
}
</style>