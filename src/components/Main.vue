<script>
import { store } from '../data/store';
import LinkButton from './partials/LinkButton.vue';
import TitleSection from './partials/TitleSection.vue';
import ServiceCard from './partials/ServiceCard.vue';
import BlogCard from './partials/BlogCard.vue';
import TestimonialCard from './partials/TestimonialCard.vue';
import ProjectCard from './partials/ProjectCard.vue';
import Chat from './partials/Chat.vue';

export default {
  name: 'Main',
  components: { 
    LinkButton, 
    TitleSection, 
    ServiceCard, 
    BlogCard, 
    TestimonialCard, 
    ProjectCard, 
    Chat
  },
  data() {
    return { 
      store
    }
  }
}
</script>


<template>

  <div class="main" >

    <!----- #1 - HOME ----->
    <section id="home">
      <div class="home-content container">

        <TitleSection :sectionObj="store.titleSections['home']" />

        <div class="flex align-end">
          <LinkButton :button="store.buttons[0]" size="big" color="green" />
          <a class="play-button flex center" href="#">
            <i class="fa-solid fa-play"></i>
          </a>
          <div >
          </div>
        </div>

      </div>
    </section>


    <!----- #2 - SERVIZI OFFERTI ----->
    <section id="services">

      <div class="services-top">
        <TitleSection :sectionObj="store.titleSections['services']" />
      </div>

      <div class="services-cards container-md flex">
        <ServiceCard 
          v-for="(service, index) in store.serviceCards"
          :key="index" 
          :service="service"/>
      </div>

    </section>


    <!----- #3 - ABOUT US ----->
    <section id="about">
      <div class="container h-100 flex justify-end align-center">
        <div class="about-content">
          <TitleSection :sectionObj="store.titleSections['about']" />
        </div>
      </div>
    </section>


    <!----- #4 - GET STARTED ----->
    <section id="get-started">
      <div class="get-started-container container-left">
        <TitleSection class="flex" :sectionObj="store.titleSections['getstarted']" />
        <LinkButton :button="store.buttons[1]" size="small" color="red" />
      </div>
    </section>


    <!----- #5 - PROGETTI ----->
    <section id="projects">
      <div class="container">
        <div class="projects-top flex justify-between align-end">
          <TitleSection :sectionObj="store.titleSections['projects']" />
          <div class="flex gap-10"> 
            <i class="arrow-btn fa-solid fa-arrow-left"></i>
            <i class="arrow-btn fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <div class="slider flex">
          <ProjectCard
            v-for="(project, index) in store.projectCards"
            :key="index"
            :project="project" />
        </div>
      </div>
    </section>


    <!----- #6 - TESTIMONIAL ----->
    <section id="testimonial">
      <div  class="flex col">
        <div class="testimonial-top container">
          <TitleSection :sectionObj="store.titleSections['testimonial']" />
        </div>
        <div class="testimonial-cards container-rigth flex">
          <TestimonialCard 
            v-for="(testimonial, index) in store.testimonialCards" 
            :key="index"
            :testiamonial="testimonial" />
        </div>
      </div>
    </section>


    <!----- #7 - BLOG ----->
    <section id="blog">
      <div class="container">
        <div class="blog-top flex justify-between align-end">
          <TitleSection :sectionObj="store.titleSections['blog']" />
          <LinkButton :button="store.buttons[2]" size="big" color="green" /> 
        </div>
        <div class="blog-cards flex">
          <BlogCard 
            v-for="(card, index) in store.blogCards"
            :key="index"
            :blogCardObj="card" />
        </div>
      </div>
    </section>


    <!----- #8 - CONTATTI ----->
    <section id="contact">
      <div class="contact-content">
        <TitleSection :sectionObj="store.titleSections['contact']" />
        <LinkButton :button="store.buttons[3]" size="small" color="blue" />
      </div>
    </section>


    <!----- #9 - MESSAGGI ----->
    <section id="messages">
      <div class="flex gap-20 align-end">

        <a href="#home">
          <i class="arrow-btn fa-solid fa-arrow-up flex center" ></i>
        </a>

        <Chat  />

      </div>
    </section>

  </div>

</template>

<style lang="scss" >
@use '../scss/partials/utilities' as *;
@use '../scss/partials/vars' as *;

.main {

/* ----- #1 - HOME ----- */
  #home {
    padding: calc(230px + $height-header) 0 230px;
    background-image: url(
      '../assets/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg'
    );
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 66%;
    .title-section {
      h2 {
        font-size: 1.2rem;
        &::after {
          display: none;
        }
      }
      h4 {
        font-size: 6rem;
        line-height: 5.2rem;
        margin-bottom: 50px;
      }
    }
    .play-button {
      width: 55px;
      height: 55px;
      margin-left: 35px;
      border: 2px solid white;
      border-radius: 50%;
      .fa-play {
        color: $bg-green;
      }

      &:hover {
        scale: 1.1;
      }
    }
  }

/* ----- #2 - SERVIZI ----- */
  #services {
    background-color: $bg-white;
    padding-bottom: 200px;
    .services-top {
      padding: 130px 0 110px;
      .title-section {
        margin-left: 350px;
        h2 {
          font-size: 1.8rem;
          color: $bg-blue;
  
          &::before {
            display: none;
          }

          &::after {
            flex-grow: 1;

          }
        }
      }
    }
    .services-cards {
      flex-wrap: wrap; 
      row-gap: 130px ;
      column-gap: 20%;
    }
  }

/* ----- #3 - ABOUT US ----- */  
  #about {
    padding: 200px 0;
    background-image: url(
      '../assets/img/business-people-working-together-on-project-and-5FHSKBL.jpg'
    );
    background-size: 1100px;
    background-repeat: no-repeat;
    .about-content {
      width: 550px;
      padding: 50px 0;
      h2:after {
        display: none;
      }
      h4 {
        font-size: 4rem;
        margin-bottom: 40px;
      }
    }
  }

/* ----- #4 - GET STARTED ----- */
  #get-started {
    padding-bottom: 100px;

    .get-started-container {
      padding: 130px 0 110px;
      background-color: $bg-green;
      position: relative;
      .title-section {
        margin: 0 auto;
        gap: 200px;
        width: 60%;
        h4 {
          width: 50%;
          font-size: 2.2rem;
          color: $bg-blue;
        }
        p {
          width: 50%;
          color: $bg-blue;
        }
      }
      .btn {
        position: absolute;
        bottom: 0;
        right: 0;
      } 
    }
  }

/* ----- #5 - PROGETTI ----- */
  #projects {
    padding-top: 120px;
    .projects-top {
      margin-bottom: 50px;
      h2::after {
        display: none;
      }
      .arrow-btn {
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
        background-color: $bg-arrows;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      } 
    }
    .slider {
      gap: 30px;
    }
  }

/* ----- #6 - TESTIMONIAL ----- */
  #testimonial {
    padding-top: 170px; 
    padding-bottom: 130px;
    .testimonial-top {
      margin-bottom: 50px;
      .title-section {
        h2 {
          justify-content: space-between;
          &:before {
            visibility: hidden;
          }
        }
        h4 {
          text-align: end;
        }
      }
    }
    .testimonial-cards {
      padding-right: 5%;
      background-color: $bg-white;
    }
  }

/* ----- #7 - BLOG ----- */
  #blog {
    padding-top: 120px; 
    padding-bottom: 340px;
    .blog-top {
      margin-bottom: 60px;
      h2::after {
        display: none;
      }
    }
    .blog-cards {
      gap: 30px;
      .card {
        width: 50%;
      }
    }
  }

/* ----- #8 - CONTATTI ----- */
  #contact {
    padding: 160px 0 100px 0;
    background-image: url(
      '../assets/img/business-people-working-together-on-project-and-B3MZ4TX.jpg'
    );
    background-repeat: no-repeat;
    .contact-content {
      width: 600px;
      margin: 0 auto;
      text-align: center;
      h3 {
        font-size: 3rem;
        margin-bottom: 10px;
      }
      p {
        color: $text-bglight-subtitle2;
        margin-bottom: 25px;
        padding: 0 30px ;
      }
      .btn {
        margin: 0 auto;
      }
    }
  }

/* ----- #8 - MESSAGGI ----- */
  #messages {
    position: fixed;
    bottom: 30px;
    right: 40px;
    i {
      cursor: pointer;
      box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      &.arrow-btn {
        width: 40px;
        height: 40px;
        background-color: $bg-white;
        color: $bg-blue;
      }
    }
  }
}

</style>