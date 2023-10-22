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
  cursor: pointer;
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
    &:hover {
      background-color: $bg-red;
      a {
        color: $text-bgdark-title;
      }
    }
  }
  &.red {
    background-color: $bg-red;  
    a {
      color: $text-bgdark-title;
    }
    &:hover {
      background-color: $bg-white;
      a {
        color: $bg-blue;
      }
    }
  }
  &.blue {
    background-color: $bg-blue;
    a {
      color: $text-bgdark-title;
    }
    &:hover {
      background-color: $bg-green;
      a {
        color: $bg-blue;
      }
    }
  }


}
</style>