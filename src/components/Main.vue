<script>
import { store } from '../data/store';
import LinkButton from './partials/LinkButton.vue';
import ServiceCard from './partials/ServiceCard.vue';
import TitleSection from './partials/TitleSection.vue';
import BlogCard from './partials/BlogCard.vue';
import TestimonialCard from './partials/TestimonialCard.vue';
import ProjectCard from './partials/ProjectCard.vue';

export default {
  name: 'Main',
  components: { 
    LinkButton, 
    ServiceCard, 
    TitleSection, 
    BlogCard, 
    TestimonialCard, 
    ProjectCard 
  },
  data() {
    return { store }
  },
}
</script>


<template>

  <div class="main" >

    <!----- #1 - HOME ----->
    <section id="home">
      <div class="home-content container">
        <TitleSection :sectionObj="store.sections[0]" />
        <div class="flex align-end">
          <LinkButton :textButton="store.buttons[0]" size="big" color="green" />
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
        <h2 class="title uppercase flex align-center">our consultans can help you</h2>
      </div>
      <div class="services-cards container-md flex">
        <ServiceCard 
          v-for="(service, index) in store.services"
          :key="index" 
          :service="service"/>
      </div>
    </section>


    <!----- #3 - ABOUT US ----->
    <section id="about">
      <div class="container h-100 flex justify-end align-center">
        <div class="about-content">
          <TitleSection :sectionObj="store.sections[1]" />
        </div>
      </div>
    </section>


    <!----- #4 - GET STARTED ----->
    <section id="get-started" class=" container-left">
      <div class="get-started-content flex">
        <h3 class="uppercase">we help to deliver the business case</h3>
        <p>When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.</p>
      </div>
      <LinkButton :textButton="store.buttons[1]" size="small" color="red" />
    </section>


    <!----- #5 - PROGETTI ----->
    <section id="projects" class="container">
      <div class="projects-top flex justify-between align-end">
        <TitleSection :sectionObj="store.sections[2]" />
        <div class="flex gap-10"> 
          <i class="arrow-btn fa-solid fa-arrow-left"></i>
          <i class="arrow-btn fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div class="slider flex">
        <ProjectCard
          v-for="(project, index) in store.projectCard"
          :key="index"
          :project="project" />
      </div>
    </section>


    <!----- #6 - TESTIMONIAL ----->
    <section id="testimonial" class="flex col">
      <div class="testimonial-top container">
        <TitleSection :sectionObj="store.sections[3]" />
      </div>
      <div class="testimonial-cards container-rigth flex">
        <TestimonialCard 
          v-for="(testimonial, index) in store.testimonialCards" 
          :key="index"
          :testiamonial="testimonial" />
      </div>
    </section>


    <!----- #7 - BLOG ----->
    <section id="blog" class="container">
      <div class="blog-top flex justify-between align-end">
        <TitleSection :sectionObj="store.sections[4]" />
        <LinkButton :textButton="store.buttons[2]" size="big" color="green" /> 
      </div>
      <div class="blog-cards flex">
        <BlogCard 
          v-for="(card, index) in store.blogCards"
          :key="index"
          :blogCardObj="card" />
      </div>
    </section>


    <!----- #8 - CONTATTI ----->
    <section id="contact">
      <div class="contact-content">
        <h3 class="uppercase">let's talk about work</h3>
        <p>A wonderfulserenity has taken possession far far away, behind the words mountains.</p>
        <LinkButton :textButton="store.buttons[3]" size="small" color="blue" />
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
    padding-bottom: 210px;
    .services-top {
      padding: 150px 0;
      .title {
        margin-left: 350px;
        gap: 40px;
        font-size: 1.8rem;
        color: $bg-blue;

        &::after {
          content: '';
          flex-grow: 1;
          height: 3px;
          border-radius: 3px;
          background-color: $bg-green;
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
    height: 850px;
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
    margin-bottom: 220px;
    padding: 110px 0 130px;
    background-color: $bg-green;
    position: relative;
    .get-started-content {
      margin: 0 360px;
      gap: 250px;
      h3 {
        width: 40%;
        font-size: 2rem;
        font-weight: 700;
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

/* ----- #5 - PROGETTI ----- */
  #projects {
    margin-bottom: 170px;
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
      } 
    }
    .slider {
      gap: 30px;
    }
  }

/* ----- #6 - TESTIMONIAL ----- */
  #testimonial {
    margin-bottom: 250px; 
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
      padding-right: 10%;
      background-color: $bg-white;
    }
  }

/* ----- #7 - BLOG ----- */
  #blog {
    margin-bottom: 340px;
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
}

</style>