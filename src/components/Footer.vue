<script>
import { store } from "../data/store"
import Menu from "./partials/Menu.vue";

export default {
  name: 'Footer',
  components: {
    Menu,
  },

  data() {
    return {
      store,

      copyright: 'Copyright @2020 Phlox Consulting. All Rights Reservede.',
      moreInfos: [ 
        'Privacy', 
        'Environmental', 
        'Policy' 
      ],
      socials: [
        'fa-brands fa-instagram',
        'fa-brands fa-linkedin-in',
        'fa-brands fa-facebook-f',
        'fa-brands fa-twitter'
        ]
    }
  },

  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    }
  },
}
</script>

<template>
  <div class="footer-content container">

    <div class="footer-top flex justify-between">

      <div class="logo">
        <img :src="getImagePath(`../assets/${store.logo.footer}`)" alt="logo">
      </div>

      <Menu :menu="store.menu"/>

      <ul class="socials flex">
        <li v-for="(item, index) in socials" :key="index"> 
            <a href="#"><i :class="item"></i></a>
        </li>
      </ul>

    </div>

    <div class="footer-bottom ">

      <p>Terms of use</p>

      <div class="flex justify-between">
        <ul class="flex gap-10">
          <li v-for="(item, index) in moreInfos" :key="index">
            <a href="#"> {{ item }} </a>
          </li>  
        </ul>

        <p> {{ copyright }} </p>
      </div>

    </div>

  </div>
</template>

<style lang="scss">
@use '../scss/partials/vars' as *;


.footer-content {
  color: $text-bglight-subtitle;
  
  a {
    color: $text-bglight-subtitle;
    &:hover {
      color: $text-bgdark-title;
    }
  }

  .footer-top {
    padding: 80px 0;
    .socials {
      gap: 20px;
      a {
        font-size: 1.2rem;
        color: $text-bgdark-title;
      }
    }
  }

  .footer-bottom {
    padding: 35px 0;
    border-top: 1px solid $text-bgdark-subtitle;
    p {
      margin-bottom: 8px;
    }
  }
}


</style>