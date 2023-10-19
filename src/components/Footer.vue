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
      logo: 'logotype-2-139x23.png',
      icons: [
        '<i class="fa-brands fa-instagram"></i>',
        '<i class="fa-brands fa-linkedin-in"></i>',
        '<i class="fa-brands fa-facebook-f"></i>',
        '<i class="fa-brands fa-twitter"></i>'
      ],
      infoSite: { 
        terms: ['Privacy', 'Environmental', 'Policy'], 
        copyright: 'Copyright @2020 Phlox Consulting. All Rights Reservede.'
      }
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
  <div class="footer">

    <div class="footer-top">
      <div class="logo">
        <img :src="getImagePath(`../assets/img/${logo}`)" alt="logo">
      </div>
      <Menu :sections="store.sections"/>
      <ul class="icons">
        <li 
          v-for="(icon, index) in icons"
          :key="index">
            <a href="#" v-html="icon"></a>
        </li>
      </ul>
    </div>

    <div class="footer-bottom">
      <div>
        <p>Terms of use</p>
        <ul>
          <li
            v-for="(term, index) in infoSite.terms"
            :key="index">
            <a href="#">{{ term }}</a>
          </li>  
        </ul>
      </div>
      <p>{{ infoSite.copyright }}</p>
    </div>

  </div>
</template>

<style lang="scss">
@use  '../scss/partials/utilities' as *;

.footer {
  @include container;
  .footer-top {
    @include flex-between;
    padding: 80px 0;
    .icons {
      @include flex-between;
      gap: 10px;
      font-size: 20px;
      a {
        color: white
      }
    }
  }
  .footer-bottom {
    @include flex-between;
    padding: 35px 0;
    border-top: 2px solid black;
    ul {
      @include flex-row;
    }
  }
}


</style>