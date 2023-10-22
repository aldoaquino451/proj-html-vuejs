import { reactive } from 'vue'

export const store = reactive({

  /* ----- TITOLI DELLE SECTION ----- */
  sections: [
    {
      title: 'home',
      titleSecond: 'alway the best way you need it',
      subtitle: 'the best business consulting',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
    },
    {
      title: 'about us',
      titleSecond: null,
      subtitle: 'we make your stategy work',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
    },
    {
      title: 'project',
      titleSecond: null,
      subtitle: 'our expert trusted consultans <br>help clients',
      text: null,
    },
    {
      title: 'testimonial',
      titleSecond: 'alway the best way you need it',
      subtitle: 'what\'s the customer say<br>about our work',
      text: null,
    },
    {
      title: 'blog',
      titleSecond: 'alway the best way you need it',
      subtitle: 'the recent news you must read it',
      text: '',
    },
    {
      title: 'contact',
      titleSecond: 'alway the best way you need it',
      subtitle: 'let\'s talk about work',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
    }
  ],


  /* ----- SERVIZI ----- */
  services: [
    {
      title: 'statistical consulting',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      icon: 'fa-solid fa-chart-line'
    },
    {
      title: 'digital consulting',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      icon: 'fa-solid fa-bullhorn'
    },
    {
      title: 'banking conuslting consulting',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      icon: 'fa-solid fa-wallet'
    },
    {
      title: 'enterprise consulting',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      icon: 'fa-solid fa-bullseye'
    },
  ],


  /* ----- LOGHI ----- */
  logo: {
    header: 'img/logotype.png',
    footer: 'img/logotype-2-139x23.png',
  },


  /* ----- MENU ----- */
  menu: [
    'home',
    'about',
    'projects',
    'services',
    'blog',
    'contact'
  ],


  /* ----- BUTTON ----- */
  buttons: [
    'read more',
    'get started',
    'view all',
    'get started',
  ],


  /* ----- BLOG ----- */
  blogCards: [
    {
      image: 'img/business-people-working-together-on-project-and-5FHSKBL-1390.jpg',
      date: null,
      title: null,
      text: null
    }, {
      image: 'img/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg',
      date: null,
      title: null,
      text: null
    }
  ],

  /* ----- TESTIMOMIAL ----- */
  testimonialCards: [
    {
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      name: 'Vera Duncan',
      company: 'Amazon Inc.',
      image: 'img/oliver-ragfelt-488196-2.jpg'
    }, {
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      name: 'Vera Duncan',
      company: 'Amazon Inc.',
      image: 'img/oliver-ragfelt-488196-unsplash.jpg'
    }, {
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      name: 'Vera Duncan',
      company: 'Amazon Inc.',
      image: 'img/12679.jpg'
    }
  ]
})
