<script>

export default {
  name: 'Main',
}
</script>

<template>
  <div class="main">

    <section id="home">
      <div class="home-content">HOME</div>
    </section>
    <section id="services">
      <div class="info-content">
        <p class="">titolo</p>
      </div>
      <div class="cards">
        <p class="card">cards</p>
        <p class="card">cards</p>
        <p class="card">cards</p>
        <p class="card">cards</p>
      </div>
    </section>

    <section id="about">
      <div class="about-us-content">
        <p>about-us</p>
      </div>
    </section>

    <section id="get-started">
      <div class="get-started-content">
        <p>primo testo</p>
        <p>secondo testo</p>
      </div>
      <div class="button">botton</div>
    </section>
    
    <section id="projects">
      <p>project</p>
    </section>

    <section id="testimonial">
      testimonial
    </section>

    <section id="blog">
      blog
    </section>

    <section id="contact">
      <div class="lets-talk-content">lets talk</div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/utilities' as *;
@use '../scss/partials/vars' as *;

.main {
  section {
    border: 1px solid black;
  }
  #home {
    padding: calc(230px + $height-header) 0 230px;
    background-image: url('../assets/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg');
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 66%;
    .home-content {
      @include container;
    }
  }
  #services {
    padding: 150px 0 210px 350px;
    background-color: $bg-white;
    .info-content {
      margin-bottom: 150px;
    }
    .cards {
      padding-right:   350px;
      display: flex;
      flex-wrap: wrap;  
      gap: 250px;
      .card {
        min-width: 350px;
      }
    }
  }
  #about {
    display: flex;
    align-items: center;
    background-image: url('../assets/img/business-people-working-together-on-project-and-5FHSKBL.jpg');
    background-size: 55%;
    background-repeat: no-repeat;
    background-position: top left;
    padding: 240px 0;
    .about-us-content {
      margin: 0 250px 0 auto;
      width: 500px;
    }
  }
  #get-started {
    @include container-left;
    @include flex-center-j;
    padding: 110px 0 130px;
    position: relative;
    background-color: $bg-green;
    color: $bg-blue;
    .get-started-content {
      @include flex-row;
      gap: 250px;

    }
    .button {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: $bg-red;
    }
  }
  #projects {
    @include container;
    margin-top: 220px;
    margin-bottom: 170px;
  }
  #testimonial {
    @include container-rigth;
    margin-bottom: 250px;
  }
  #blog {
    @include container;
    margin-bottom: 160px;
  }

  #contact {
    padding: 160px 0 100px 0;
    background-image: url('../assets/img/business-people-working-together-on-project-and-B3MZ4TX.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    .contact-content {
      width: 600px;
      margin: 0 auto;
    }
  }
}

</style>