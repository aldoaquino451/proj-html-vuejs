<script>
import { store } from "../data/store"
import Menu from "./partials/Menu.vue";
import Socials from "./partials/Socials.vue";
import Logo from "./partials/Logo.vue";

export default {
  name: 'Footer',
  components: { Menu, Socials, Logo },

  data() {
    return {
      store,
      copyright: 'Copyright @2020 Phlox Consulting. All Rights Reservede.',
      moreInfos: [ 'Privacy', 'Environmental', 'Policy' ]
    }
  },
}
</script>


<template>
  <div class="footer-content container">

    <!----- #1 - TOP FOOTER ----->
    <div class="footer-top flex justify-between">
      <Logo position='footer' />
      <Menu />
      <Socials />
    </div>

    <!----- #2 - BOTTOM FOOTER ----->
    <div class="footer-bottom ">
      <p>Terms of use</p>
      <div class="flex justify-between">
        <ul class="flex gap-10">
          <li v-for="(item, index) in moreInfos" :key="index">
            <a href="#"> {{ item }} </a>
          </li>  
        </ul>
        <span> {{ copyright }} </span>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@use '../scss/partials/vars' as *;


.footer-content {
  color: $text-bglight-subtitle;
  
  .footer-top {
    padding: 80px 0;
  }

  .footer-bottom {
    padding: 35px 0;
    border-top: 1px solid $text-bgdark-subtitle;
    p {
      margin-bottom: 6px;
      font-size: 1rem;
    }
    a {
      color: $text-bglight-subtitle;
      &:hover {
        color: $text-bgdark-title;
      }
    }
  }
}


</style>