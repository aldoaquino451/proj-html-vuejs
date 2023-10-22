<script>

export default {
  nama: 'LinkButton',
  props: {
    textButton: String,
    size: String,
    color: String
  },
  data() {
    return {
    }
  },
}
</script>

<template>
  <div class="btn" :class="color, size">
    <a class="uppercase" href="#">
      {{ textButton }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.btn {
  padding-top: 23px;
  padding-bottom: 23px;
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
  }
  &.red {
    color: $text-bgdark-title;
    background-color: $bg-red;
  }
  &.blu {
    color: $text-bgdark-title;
    background-color: $bg-blue;
  }
}
</style>